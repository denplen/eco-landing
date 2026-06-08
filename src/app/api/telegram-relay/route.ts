import { NextResponse } from "next/server";

const TELEGRAM_API_BASE = "https://api.telegram.org";

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

function getRelayFile(formData: FormData) {
  const file = formData.get("file");
  return file instanceof File && file.size > 0 ? file : undefined;
}

export async function POST(request: Request) {
  const relaySecret = process.env.TELEGRAM_RELAY_SECRET;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!relaySecret) {
    return NextResponse.json(
      { ok: false, error: "Telegram relay secret is not configured" },
      { status: 500 },
    );
  }

  const authorization = request.headers.get("authorization");
  if (authorization !== `Bearer ${relaySecret}`) {
    return NextResponse.json(
      { ok: false, error: "Unauthorized" },
      { status: 401 },
    );
  }

  if (!chatId) {
    return NextResponse.json(
      { ok: false, error: "TELEGRAM_CHAT_ID is not configured" },
      { status: 500 },
    );
  }

  try {
    const formData = await request.formData();
    const messageHtml = formData.get("messageHtml");

    if (typeof messageHtml !== "string" || !messageHtml.trim()) {
      return NextResponse.json(
        { ok: false, error: "messageHtml is required" },
        { status: 400 },
      );
    }

    const messageFormData = new FormData();
    messageFormData.set("chat_id", chatId);
    messageFormData.set("text", messageHtml);
    messageFormData.set("parse_mode", "HTML");
    messageFormData.set("disable_web_page_preview", "true");

    await telegramFetch("sendMessage", messageFormData);

    const file = getRelayFile(formData);
    if (file) {
      const caption = formData.get("fileCaption");
      const documentFormData = new FormData();
      documentFormData.set("chat_id", chatId);
      documentFormData.set("document", file);
      documentFormData.set(
        "caption",
        typeof caption === "string" && caption.trim() ? caption : "Файл к заявке",
      );

      await telegramFetch("sendDocument", documentFormData);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Telegram relay error", error);
    return NextResponse.json(
      { ok: false, error: "Telegram relay failed" },
      { status: 500 },
    );
  }
}
