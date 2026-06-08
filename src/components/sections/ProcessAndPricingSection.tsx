"use client";

import { CtaButton } from "@/components/ui/CtaButton";
import {
  CornerMarkers,
  EngineeringGrid,
} from "@/components/ui/EngineeringDecor";

const processSteps = [
  {
    number: "01",
    title: "Заявка и исходные данные",
    description:
      "Вы отправляете параметры объекта, ТЗ, схему участка или краткое описание задачи.",
  },
  {
    number: "02",
    title: "Анализ задачи",
    description:
      "Специалист уточняет назначение объекта, стадию проекта, район работ и требования к отчёту.",
  },
  {
    number: "03",
    title: "Расчёт сметы",
    description:
      "Определяем состав исследований, объём работ, сроки и стоимость.",
  },
  {
    number: "04",
    title: "Договор и выполнение работ",
    description:
      "Фиксируем условия в договоре, выполняем полевые, лабораторные и камеральные работы.",
  },
  {
    number: "05",
    title: "Отчёт и сопровождение",
    description:
      "Передаём технический отчёт и помогаем закрывать вопросы по выполненным изысканиям.",
  },
];

const mobileProcessSteps = [
  "Отправляете параметры объекта",
  "Уточняем состав работ и смету",
  "Выполняем изыскания и передаём отчёт",
];

const pricingFactors = [
  "Тип и назначение объекта",
  "Площадь участка или протяжённость трассы",
  "Район проведения работ",
  "Состав необходимых исследований",
  "Наличие исходных данных и ТЗ",
  "Срочность и требования экспертизы",
  "Необходимость смежных изысканий: геология, геодезия, комплекс под ключ",
];

export function ProcessAndPricingSection() {
  return (
    <section
      id="process"
      className="relative scroll-mt-24 overflow-hidden bg-[#F7F9FC] py-16 text-[#0E2748] sm:py-20 lg:py-24"
    >
      <EngineeringGrid className="right-8 top-12 hidden h-44 w-80 opacity-65 lg:block" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E2748]/60">
            <span className="size-2 rounded-full bg-[#F4A11A]" />
            Процесс и стоимость
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            Как проходит работа и формируется смета
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#0E2748]/65">
            Сначала уточняем задачу, объект и исходные данные. После этого
            рассчитываем состав работ, сроки и стоимость
            инженерно-экологических изысканий.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold tracking-tight text-[#0E2748]">
            Как проходит работа
          </h3>

          <ol className="mt-7 grid gap-4 md:hidden">
            {mobileProcessSteps.map((step, index) => (
              <li
                key={step}
                className="border border-[#0E2748]/10 bg-white p-5 shadow-[0_12px_30px_rgba(14,39,72,0.05)]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F4A11A]">
                  0{index + 1}
                </span>
                <h4 className="mt-3 text-base font-semibold leading-6 text-[#0E2748]">
                  {step}
                </h4>
              </li>
            ))}
          </ol>

          <ol className="mt-7 hidden gap-4 md:grid sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <li
                key={step.number}
                className="group relative min-h-56 border border-[#0E2748]/10 bg-white p-5 shadow-[0_12px_30px_rgba(14,39,72,0.05)] transition-all duration-200 hover:-translate-y-[2px] hover:border-[#F4A11A]/50 hover:shadow-[0_18px_38px_rgba(14,39,72,0.09)]"
              >
                <CornerMarkers className="opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                {index < processSteps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-[calc(100%+0.25rem)] top-9 hidden h-px w-3 bg-[#F4A11A]/55 lg:block"
                  />
                ) : null}
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F4A11A]">
                  Шаг {step.number}
                </span>
                <h4 className="mt-4 text-base font-semibold leading-6 text-[#0E2748]">
                  {step.title}
                </h4>
                <p className="mt-3 text-sm leading-6 text-[#0E2748]/60">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <details className="group mt-10 border border-[#0E2748]/10 bg-white p-5 shadow-[0_16px_42px_rgba(14,39,72,0.06)] md:hidden">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-xl font-semibold tracking-tight text-[#0E2748]">
            <span>Что влияет на стоимость</span>
            <span
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-xl leading-5 text-[#F4A11A] transition-transform duration-200 group-hover:translate-x-0.5 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <ul className="mt-5 grid gap-y-3">
            {pricingFactors.map((factor) => (
              <li
                key={factor}
                className="flex items-start gap-3 border-t border-[#0E2748]/8 pt-3 text-sm leading-6 text-[#0E2748]/68"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#F4A11A]" />
                {factor}
              </li>
            ))}
          </ul>
        </details>

        <div className="relative mt-10 hidden border border-[#0E2748]/10 bg-white p-6 shadow-[0_16px_42px_rgba(14,39,72,0.06)] md:block sm:p-8 lg:grid lg:grid-cols-[1.18fr_0.82fr] lg:gap-10">
          <CornerMarkers className="opacity-55" />
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-[#0E2748]">
              Что влияет на стоимость
            </h3>
            <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {pricingFactors.map((factor) => (
                <li
                  key={factor}
                  className="flex items-start gap-3 border-t border-[#0E2748]/8 pt-3 text-sm leading-6 text-[#0E2748]/68 sm:text-base"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#F4A11A]" />
                  {factor}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border border-[#F4A11A]/35 border-l-3 bg-[#F7F9FC] p-6 lg:mt-0 lg:flex lg:h-full lg:flex-col lg:justify-between lg:self-stretch lg:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F4A11A]">
                Корректная смета
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#0E2748]">
                Не называем стоимость с потолка
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#0E2748]/65">
                Чтобы смета была корректной, специалист сначала смотрит объект,
                задачу и исходные данные. Так заказчик заранее понимает состав
                работ, сроки и результат, а не получает заниженную цену с
                последующими доплатами.
              </p>
            </div>
            <div className="mt-6 h-px w-16 bg-[#F4A11A]/60" />
          </div>
        </div>

        <div className="relative mt-10 border border-[#0E2748]/10 bg-white p-6 shadow-[0_14px_36px_rgba(14,39,72,0.05)] sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
          <CornerMarkers className="hidden opacity-55 sm:block" />
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold tracking-tight text-[#0E2748] sm:text-2xl">
              Получите смету после анализа параметров объекта
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#0E2748]/62 sm:text-base">
              Заполните форму или приложите ТЗ — специалист подготовит
              предложение по составу, срокам и стоимости работ.
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

