import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Инженерно-экологические изыскания в Москве и МО — Главгеоком",
  description:
    "Подготовим технический отчёт для проектирования и поможем закрыть замечания экспертизы по инженерно-экологическим изысканиям.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.png?v=2",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Инженерно-экологические изыскания — Главгеоком",
    description:
      "Инженерно-экологические изыскания для застройщиков, технических заказчиков и проектировщиков. Смета по параметрам объекта.",
    url: "https://eco-landing-five.vercel.app/",
    siteName: "Главгеоком",
    images: "/og-image.png",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Инженерно-экологические изыскания — Главгеоком",
    description:
      "Инженерно-экологические изыскания для застройщиков, технических заказчиков и проектировщиков. Смета по параметрам объекта.",
    images: "/og-image.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
