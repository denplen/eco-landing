"use client";

import Image from "next/image";
import { CtaButton } from "@/components/ui/CtaButton";
import {
  CornerMarkers,
  EngineeringGrid,
} from "@/components/ui/EngineeringDecor";

const faqItems = [
  {
    question: "Что нужно для расчёта сметы?",
    answer:
      "Достаточно указать тип объекта, район работ и приложить ТЗ, схему участка или краткое описание задачи. Если исходных данных не хватает, специалист уточнит их перед расчётом.",
  },
  {
    question: "Можно ли заказать комплекс изысканий?",
    answer:
      "Да. Кроме инженерно-экологических изысканий можем выполнить геологию, геодезию и комплекс инженерных изысканий под ключ.",
  },
  {
    question: "Вы сопровождаете замечания экспертизы?",
    answer:
      "Да, отвечаем на вопросы и замечания по выполненным нами работам в зоне нашей ответственности.",
  },
  {
    question: "Почему нельзя сразу назвать точную стоимость?",
    answer:
      "Стоимость зависит от типа объекта, площади или протяжённости, района работ, состава исследований и требований к отчёту. Поэтому смету готовим после анализа исходных данных.",
  },
  {
    question: "В каких регионах выполняете работы?",
    answer:
      "Основной регион — Москва и Московская область. Возможность работ в других регионах уточняется по задаче и составу изысканий.",
  },
];

const contacts = [
  {
    label: "Телефон",
    value: "+7 (499) 380-81-04",
    href: "tel:+74993808104",
  },
  {
    label: "Email",
    value: "info@glavgeocom.ru",
    href: "mailto:info@glavgeocom.ru",
  },
  {
    label: "Telegram",
    value: "Написать в Telegram",
    href: null,
  },
  {
    label: "MAX",
    value: "Написать в MAX",
    href: null,
  },
];

const contactCardClassName =
  "border border-white/10 bg-white/[0.04] p-5 text-left transition-colors duration-200 hover:border-[#F4A11A]/65 hover:bg-white/[0.08]";

export function FaqContactSection() {
  return (
    <section
      className="relative scroll-mt-24 overflow-hidden bg-[#0E2748] pb-28 pt-16 text-white sm:py-20 lg:py-24"
    >
      <EngineeringGrid className="right-8 top-12 hidden h-52 w-96 opacity-30 lg:block" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div id="faq" className="scroll-mt-24">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-white/65">
            <span className="size-2 rounded-full bg-[#F4A11A]" />
            FAQ
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            Частые вопросы по изысканиям и смете
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
            Собрали ответы на вопросы, которые чаще всего возникают перед
            расчётом стоимости и заключением договора.
          </p>

          <div className="mt-8 grid gap-3 lg:grid-cols-2">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                open={index === 0}
                className="group border border-white/10 bg-white/[0.04] p-4 transition-colors duration-200 open:border-[#F4A11A]/55 open:bg-white/[0.07] hover:border-[#F4A11A]/40"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold leading-6 text-white">
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="mt-0.5 text-xl leading-5 text-[#F4A11A] transition-transform duration-200 group-hover:translate-x-0.5 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-white/66">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        <div
          id="contacts"
          className="relative mt-12 scroll-mt-24 border border-white/12 bg-white/[0.06] p-7 shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-10 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:gap-12"
        >
          <CornerMarkers className="hidden lg:block" />
          <div>
            <Image
              src="/images/logo_horizont_dark_bg.svg"
              alt="Главгеоком"
              width={230}
              height={62}
              className="h-auto w-[200px] sm:w-[230px]"
            />
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Остались вопросы?
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-6 text-white/66 sm:text-base">
              Напишите нам — уточним задачу, состав работ и подготовим смету.
            </p>

            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="max-w-lg text-sm leading-6 text-white/62">
                Заполните короткую форму — специалист уточнит задачу, состав
                работ и подготовит смету.
              </p>
              <CtaButton
                variant="primary"
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("open-estimate-modal"))
                }
                className="mt-5 w-full shrink-0 sm:w-auto"
              >
                Получить смету
              </CtaButton>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:self-center">
            <div className="grid gap-4 sm:grid-cols-2">
              {contacts.map((contact) =>
                contact.href ? (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className={contactCardClassName}
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F4A11A]">
                      {contact.label}
                    </span>
                    <span className="mt-2 block text-base font-medium leading-6 text-white/86">
                      {contact.value}
                    </span>
                  </a>
                ) : (
                  <button
                    key={contact.label}
                    type="button"
                    className={contactCardClassName}
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F4A11A]">
                      {contact.label}
                    </span>
                    <span className="mt-2 block text-base font-medium leading-6 text-white/86">
                      {contact.value}
                    </span>
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
