type TelegramLeadPayload = {
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

const TELEGRAM_API_BASE = "https://api.telegram.org";

function valueOrDash(value?: string | string[]) {
  if (Array.isArray(value)) {
    const joined = value.filter(Boolean).join(", ");
    return joined || "—";
  }

  return value?.trim() || "—";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function line(label: string, value?: string | string[]) {
  return `${label}: ${escapeHtml(valueOrDash(value))}`;
}

function buildTelegramMessage(payload: TelegramLeadPayload) {
  return [
    "<b>Новая заявка с лендинга Главгеоком</b>",
    "",
    "<b>Контакты</b>",
    line("Имя", payload.name),
    line("Телефон", payload.phone),
    line("Email", payload.email),
    "",
    "<b>Параметры объекта</b>",
    line("Тип объекта", payload.objectType),
    line("Задача / этап", payload.projectStage),
    line("Виды изысканий", payload.surveyTypes),
    line("Район работ", payload.workArea),
    line("Объём / описание", payload.workVolume),
    line("Кадастровый номер", payload.cadastralNumber),
    "",
    "<b>Источник</b>",
    line("Страница", payload.pageUrl),
    line("UTM source", payload.utm_source),
    line("UTM medium", payload.utm_medium),
    line("UTM campaign", payload.utm_campaign),
    line("UTM content", payload.utm_content),
    line("UTM term", payload.utm_term),
  ].join("\n");
}

async function telegramFetch(path: string, body: FormData) {
  const token = process.env.TELEGRAM_BOT_TOKEN;

  if (!token) {
    throw new Error("TELEGRAM_BOT_TOKEN is not configured");
  }

  const response = await fetch(`${TELEGRAM_API_BASE}/bot${token}/${path}`, {
    method: "POST",
    body,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Telegram API error: ${errorText}`);
  }
}

export async function sendTelegramLead(payload: TelegramLeadPayload) {
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!chatId) {
    throw new Error("TELEGRAM_CHAT_ID is not configured");
  }

  const messageFormData = new FormData();
  messageFormData.set("chat_id", chatId);
  messageFormData.set("text", buildTelegramMessage(payload));
  messageFormData.set("parse_mode", "HTML");
  messageFormData.set("disable_web_page_preview", "true");

  await telegramFetch("sendMessage", messageFormData);

  if (!payload.file) return;

  const documentFormData = new FormData();
  documentFormData.set("chat_id", chatId);
  documentFormData.set("document", payload.file);
  documentFormData.set(
    "caption",
    `Файл к заявке: ${valueOrDash(payload.phone || payload.name)}`,
  );

  await telegramFetch("sendDocument", documentFormData);
}
