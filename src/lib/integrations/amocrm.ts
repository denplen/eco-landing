type AmoLeadPayload = {
  objectType?: string;
  projectStage?: string;
  surveyTypes?: string[];
  workArea?: string;
  workVolume?: string;
  cadastralNumber?: string;
  name?: string;
  phone: string;
  email?: string;
  pageUrl?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  file?: File;
};

type AmoEntityResponse = {
  _embedded?: {
    leads?: Array<{ id: number }>;
    contacts?: Array<{ id: number }>;
  };
};

type CreateAmoLeadResult =
  | { status: "skipped" }
  | { status: "success"; leadId: number; contactId: number };

function getAmoConfig() {
  const baseDomain = process.env.AMO_BASE_DOMAIN?.trim();
  const accessToken = process.env.AMO_ACCESS_TOKEN?.trim();

  if (!baseDomain || !accessToken) {
    return null;
  }

  const normalizedBaseDomain = baseDomain
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

  return {
    accessToken,
    baseUrl: `https://${normalizedBaseDomain}/api/v4`,
    pipelineId: parseOptionalNumber(process.env.AMO_PIPELINE_ID),
    statusId: parseOptionalNumber(process.env.AMO_STATUS_ID),
    responsibleUserId: parseOptionalNumber(process.env.AMO_RESPONSIBLE_USER_ID),
  };
}

function parseOptionalNumber(value?: string) {
  const trimmedValue = value?.trim();
  if (!trimmedValue) return undefined;

  const parsedValue = Number(trimmedValue);
  return Number.isFinite(parsedValue) ? parsedValue : undefined;
}

function valueOrDash(value?: string | string[]) {
  if (Array.isArray(value)) {
    const joined = value.filter(Boolean).join(", ");
    return joined || "—";
  }

  return value?.trim() || "—";
}

function buildLeadNote(payload: AmoLeadPayload) {
  return [
    "Новая заявка с лендинга Главгеоком",
    "",
    "Контакты",
    `Имя: ${valueOrDash(payload.name)}`,
    `Телефон: ${valueOrDash(payload.phone)}`,
    `Email: ${valueOrDash(payload.email)}`,
    "",
    "Параметры объекта",
    `Тип объекта: ${valueOrDash(payload.objectType)}`,
    `Задача / этап: ${valueOrDash(payload.projectStage)}`,
    `Виды изысканий: ${valueOrDash(payload.surveyTypes)}`,
    `Район работ: ${valueOrDash(payload.workArea)}`,
    `Объём / описание: ${valueOrDash(payload.workVolume)}`,
    `Кадастровый номер: ${valueOrDash(payload.cadastralNumber)}`,
    "",
    "Источник",
    `Страница: ${valueOrDash(payload.pageUrl)}`,
    `UTM source: ${valueOrDash(payload.utm_source)}`,
    `UTM medium: ${valueOrDash(payload.utm_medium)}`,
    `UTM campaign: ${valueOrDash(payload.utm_campaign)}`,
    `UTM content: ${valueOrDash(payload.utm_content)}`,
    `UTM term: ${valueOrDash(payload.utm_term)}`,
    "",
    "Файл:",
    payload.file ? "Файл приложен к заявке и отправлен в Telegram" : "—",
  ].join("\n");
}

async function amoFetch<T>(
  action: string,
  path: string,
  accessToken: string,
  baseUrl: string,
  body: unknown,
) {
  const response = await fetch(`${baseUrl}${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("amoCRM request failed", {
      action,
      status: response.status,
      body: errorText,
    });
    throw new Error(`amoCRM API error ${response.status}: ${errorText}`);
  }

  return (await response.json()) as T;
}

function getFirstEntityId(response: AmoEntityResponse, entity: "leads" | "contacts") {
  const id = response._embedded?.[entity]?.[0]?.id;
  if (!id) {
    throw new Error(`amoCRM did not return ${entity} id`);
  }

  return id;
}

export async function createAmoLead(
  payload: AmoLeadPayload,
): Promise<CreateAmoLeadResult> {
  console.log("amoCRM integration check", {
    hasBaseDomain: Boolean(process.env.AMO_BASE_DOMAIN),
    hasAccessToken: Boolean(process.env.AMO_ACCESS_TOKEN),
    pipelineId: process.env.AMO_PIPELINE_ID || null,
    statusId: process.env.AMO_STATUS_ID || null,
    responsibleUserId: process.env.AMO_RESPONSIBLE_USER_ID || null,
  });

  const config = getAmoConfig();
  if (!config) {
    console.warn("amoCRM skipped: env is not configured");
    return { status: "skipped" };
  }

  const leadBody: Array<Record<string, unknown>> = [
    {
      name: "Заявка по Экологии",
      ...(config.pipelineId ? { pipeline_id: config.pipelineId } : {}),
      ...(config.statusId ? { status_id: config.statusId } : {}),
      ...(config.responsibleUserId
        ? { responsible_user_id: config.responsibleUserId }
        : {}),
      _embedded: {
        tags: [{ name: "landing_eco" }, { name: "site" }],
      },
    },
  ];

  console.log("amoCRM: creating lead");
  const leadResponse = await amoFetch<AmoEntityResponse>(
    "creating lead",
    "/leads",
    config.accessToken,
    config.baseUrl,
    leadBody,
  );
  const leadId = getFirstEntityId(leadResponse, "leads");
  console.log("amoCRM lead created", { leadId });

  const customFieldsValues: Array<Record<string, unknown>> = [
    {
      field_code: "PHONE",
      values: [{ value: payload.phone, enum_code: "WORK" }],
    },
  ];

  if (payload.email?.trim()) {
    customFieldsValues.push({
      field_code: "EMAIL",
      values: [{ value: payload.email, enum_code: "WORK" }],
    });
  }

  console.log("amoCRM: creating contact");
  const contactResponse = await amoFetch<AmoEntityResponse>(
    "creating contact",
    "/contacts",
    config.accessToken,
    config.baseUrl,
    [
      {
        name: payload.name?.trim() || payload.phone || "Заявка с лендинга",
        ...(config.responsibleUserId
          ? { responsible_user_id: config.responsibleUserId }
          : {}),
        custom_fields_values: customFieldsValues,
      },
    ],
  );
  const contactId = getFirstEntityId(contactResponse, "contacts");
  console.log("amoCRM contact created", { contactId });

  try {
    console.log("amoCRM: linking contact to lead");
    await amoFetch<unknown>(
      "linking contact to lead",
      `/leads/${leadId}/link`,
      config.accessToken,
      config.baseUrl,
      [
        {
          to_entity_id: contactId,
          to_entity_type: "contacts",
        },
      ],
    );
  } catch (error) {
    console.error("amoCRM link error", error);
  }

  console.log("amoCRM: adding note");
  await amoFetch<unknown>(
    "adding note",
    `/leads/${leadId}/notes`,
    config.accessToken,
    config.baseUrl,
    [
      {
        note_type: "common",
        params: {
          text: buildLeadNote(payload),
        },
      },
    ],
  );

  console.log("amoCRM lead created", { leadId, contactId });
  return { status: "success", leadId, contactId };
}
