"use client";

import { CtaButton } from "@/components/ui/CtaButton";

const credentials = [
  {
    number: "01",
    title: "Член СРО",
    description:
      "Работаем в соответствии с требованиями к инженерным изысканиям и предоставляем подтверждающие документы по запросу.",
    action: "Посмотреть документы",
    externalHref: null,
  },
  {
    number: "02",
    title: "Реквизиты компании",
    description:
      "Передаём карточку организации для договора, закупочных процедур и внутреннего согласования.",
    action: "Скачать карточку компании",
    externalHref: null,
  },
  {
    number: "03",
    title: "Профиль на Яндекс Картах",
    description:
      "Публичная информация о компании, отзывы и контактные данные доступны в профиле организации.",
    action: "Открыть профиль",
    externalHref: null,
  },
  {
    number: "04",
    title: "Основной сайт и объекты",
    description:
      "На основном сайте можно посмотреть направления работ, выполненные объекты и дополнительные сведения о компании.",
    action: "Перейти на сайт",
    externalHref: "https://glavgeocom.ru/",
  },
];

const procurementDocuments = [
  "Карточка организации",
  "Реквизиты для договора",
  "Сведения о СРО",
  "Пример технического отчёта",
  "Информация о выполненных объектах",
];

const secondaryActionClassName =
  "mt-5 inline-flex min-h-10 items-center justify-center rounded-sm border border-[#0E2748]/25 bg-white px-4 py-2.5 text-sm font-semibold text-[#0E2748] transition-colors duration-200 hover:border-[#F4A11A] hover:bg-[#F4A11A]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A11A]";

export function CredentialsSection() {
  return (
    <section
      id="credentials"
      className="scroll-mt-24 bg-white py-16 text-[#0E2748] sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E2748]/60">
            <span className="size-2 rounded-full bg-[#F4A11A]" />
            Документы и реквизиты
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            Работаем официально и прозрачно
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#0E2748]/65">
            Предоставляем реквизиты, заключаем договор, подтверждаем членство в
            СРО и готовим документы, которые нужны для закупки, тендера или
            внутреннего согласования.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((credential) => (
            <article
              key={credential.number}
              className="group flex min-h-72 flex-col border border-[#0E2748]/10 bg-[#F7F9FC] p-6 shadow-[0_12px_32px_rgba(14,39,72,0.05)] transition-all duration-200 hover:-translate-y-[2px] hover:border-[#F4A11A]/50 hover:shadow-[0_18px_40px_rgba(14,39,72,0.09)]"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F4A11A]">
                {credential.number}
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-[#0E2748]">
                {credential.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#0E2748]/62">
                {credential.description}
              </p>

              <div className="mt-auto">
                {credential.externalHref ? (
                  <a
                    href={credential.externalHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={secondaryActionClassName}
                  >
                    {credential.action}
                  </a>
                ) : (
                  // TODO: Add a verified document or profile link when available.
                  <button type="button" className={secondaryActionClassName}>
                    {credential.action}
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 border border-[#0E2748]/10 bg-[#F7F9FC] p-6 sm:p-8 lg:grid lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F4A11A]">
              Для проверки подрядчика
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#0E2748]">
              Подходит для закупки, тендера и согласования подрядчика
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-6 text-[#0E2748]/65 sm:text-base">
              По запросу предоставим реквизиты, сведения о компании,
              подтверждающие документы и материалы, необходимые для проверки
              подрядчика перед заключением договора.
            </p>
          </div>

          <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:mt-0 lg:self-center">
            {procurementDocuments.map((document) => (
              <li
                key={document}
                className="flex items-start gap-3 border-t border-[#0E2748]/10 pt-4 text-sm leading-6 text-[#0E2748]/70 sm:text-base"
              >
                <span className="mt-1.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#F4A11A]/12 text-[#F4A11A]">
                  <svg
                    aria-hidden="true"
                    className="size-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m5 12 4 4L19 6"
                    />
                  </svg>
                </span>
                {document}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 border border-[#0E2748]/10 bg-white p-6 shadow-[0_14px_36px_rgba(14,39,72,0.05)] sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold tracking-tight text-[#0E2748] sm:text-2xl">
              Нужны документы для проверки подрядчика?
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#0E2748]/62 sm:text-base">
              Оставьте заявку — подготовим смету и подскажем, какие документы
              можно предоставить для согласования.
            </p>
          </div>

          <CtaButton
            variant="primary"
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-estimate-modal"))
            }
            className="mt-5 w-full shrink-0 sm:mt-0 sm:w-auto"
          >
            Получить смету
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
