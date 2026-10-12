import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Заявка отправлена — Главгеоком",
  alternates: { canonical: "/success" },
  openGraph: { url: "/success" },
  robots: { index: false, follow: true },
};

export default function SuccessLayout({ children }: { children: ReactNode }) {
  return children;
}
