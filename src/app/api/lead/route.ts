import { NextResponse } from "next/server";
import { createAmoLead } from "@/lib/integrations/amocrm";
import { sendTelegramLead } from "@/lib/integrations/telegram";
import {
  formatRussianPhone,
  isRussianPhoneComplete,
} from "@/lib/phoneMask";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

type ChannelStatus = "success" | "failed" | "skipped";

function formValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function getLeadFile(formData: FormData) {
  const files = formData
    .getAll("brief")
    .filter((value): value is File => value instanceof File && value.size > 0);

  return files[0];
}

function isTelegramConfigured() {
  return Boolean(
    (process.env.TELEGRAM_RELAY_URL && process.env.TELEGRAM_RELAY_SECRET) ||
      (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID),
  );
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const honeypot =
    formValue(formData, "website") || formValue(formData, "companyUrl");
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const phone = formValue(formData, "phone");
  if (!phone) {
    return NextResponse.json(
      { ok: false, error: "Укажите телефон" },
      { status: 400 },
    );
  }

  if (!isRussianPhoneComplete(phone)) {
    return NextResponse.json(
      { ok: false, error: "Укажите телефон полностью" },
      { status: 400 },
    );
  }

  const formattedPhone = formatRussianPhone(phone);
  const file = getLeadFile(formData);

  if (file && file.size > MAX_FILE_SIZE) {
    return NextResponse.json(
      {
        ok: false,
        error: "Файл слишком большой. Максимальный размер — 10 МБ.",
      },
      { status: 400 },
    );
  }

  const leadPayload = {
    objectType: formValue(formData, "objectType"),
    projectStage: formValue(formData, "projectStage"),
    surveyTypes: formData
      .getAll("surveyTypes")
      .filter((value): value is string => typeof value === "string")
      .map((value) => value.trim())
      .filter(Boolean),
    workArea: formValue(formData, "workArea"),
    workVolume: formValue(formData, "workVolume"),
    cadastralNumber: formValue(formData, "cadastralNumber"),
    name: formValue(formData, "name"),
    phone: formattedPhone,
    email: formValue(formData, "email"),
    file,
    pageUrl: formValue(formData, "pageUrl"),
    utm_source: formValue(formData, "utm_source"),
    utm_medium: formValue(formData, "utm_medium"),
    utm_campaign: formValue(formData, "utm_campaign"),
    utm_content: formValue(formData, "utm_content"),
    utm_term: formValue(formData, "utm_term"),
  };

  const channels: Record<"telegram" | "amocrm", ChannelStatus> = {
    telegram: "skipped",
    amocrm: "skipped",
  };

  if (isTelegramConfigured()) {
    try {
      await sendTelegramLead(leadPayload);
      channels.telegram = "success";
    } catch (error) {
      channels.telegram = "failed";
      console.error("Telegram lead submission error", error);
    }
  }

  try {
    const amoResult = await createAmoLead(leadPayload);
    channels.amocrm = amoResult.status;
  } catch (error) {
    channels.amocrm = "failed";
    console.error("amoCRM lead submission error", error);
  }

  console.log("Lead delivery results", {
    telegram: channels.telegram,
    amocrm: channels.amocrm,
  });

  const isDevelopment = process.env.NODE_ENV === "development";

  if (channels.telegram === "success" || channels.amocrm === "success") {
    return NextResponse.json(
      isDevelopment ? { ok: true, channels } : { ok: true },
    );
  }

  return NextResponse.json(
    isDevelopment
      ? {
          ok: false,
          error: "Не удалось отправить заявку. Попробуйте ещё раз.",
          channels,
        }
      : {
          ok: false,
          error: "Не удалось отправить заявку. Попробуйте ещё раз.",
        },
    { status: 500 },
  );
}
