"use client";

import Link from "next/link";
import { reachYandexGoal } from "@/lib/analytics/yandexMetrika";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#0E2748]">
      <section className="relative flex min-h-screen items-center overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-8 top-10 hidden h-52 w-96 bg-[linear-gradient(rgba(14,39,72,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(14,39,72,0.08)_1px,transparent_1px)] bg-[size:28px_28px] lg:block"
        />
        <div className="relative mx-auto w-full max-w-3xl border border-[#0E2748]/10 bg-white p-6 shadow-[0_24px_70px_rgba(14,39,72,0.10)] sm:p-10">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 size-8 border-l-2 border-t-2 border-[#F4A11A]/70"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 size-8 border-b-2 border-r-2 border-[#F4A11A]/70"
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo_horizont.svg"
            alt="Главгеоком"
            className="h-auto w-40"
          />

          <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0E2748]/60">
            <span className="size-2 rounded-full bg-[#F4A11A]" />
            Заявка принята
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Заявка отправлена
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#0E2748]/68 sm:text-lg sm:leading-8">
            Спасибо. Специалист Главгеоком свяжется с вами, уточнит параметры
            объекта и подготовит предложение по составу, срокам и стоимости
            работ.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center justify-center rounded-sm border border-[#0E2748]/25 bg-white px-5 py-3 text-sm font-semibold text-[#0E2748] transition-colors duration-200 hover:border-[#F4A11A] hover:bg-[#F4A11A]/5"
            >
              Вернуться на главную
            </Link>
            <a
              href="tel:+74993808104"
              onClick={() => reachYandexGoal("phone_click")}
              className="inline-flex min-h-11 items-center justify-center rounded-sm bg-[#F4A11A] px-5 py-3 text-sm font-semibold text-[#0E2748] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_12px_26px_rgba(244,161,26,0.28)]"
            >
              Позвонить
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
