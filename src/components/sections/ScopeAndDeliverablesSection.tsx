"use client";

import { CtaButton } from "@/components/ui/CtaButton";
import {
  CornerMarkers,
  EngineeringGrid,
  TopoLines,
} from "@/components/ui/EngineeringDecor";

const workStages = [
  {
    number: "01",
    title: "Подготовка",
    points: ["Анализ исходных данных", "Разработка программы изысканий"],
    mobileDescription: "Анализ исходных данных.",
  },
  {
    number: "02",
    title: "Полевые работы",
    points: [
      "Обследование территории",
      "Отбор проб",
      "Фиксация фактических условий",
    ],
    mobileDescription: "Обследование территории.",
  },
  {
    number: "03",
    title: "Исследования и обработка",
    points: [
      "Лабораторные исследования",
      "Оценка экологических ограничений",
      "Камеральная обработка материалов",
    ],
    mobileDescription: "Лаборатория и камеральная обработка.",
  },
  {
    number: "04",
    title: "Технический отчёт",
    points: [
      "Итоговый комплект материалов",
      "Текстовые и графические приложения",
      "Ответы на замечания по выполненным работам",
    ],
    mobileDescription: "Передаём комплект материалов.",
  },
];

const deliverables = [
  "Программа инженерно-экологических изысканий",
  "Протоколы полевых и лабораторных исследований",
  "Оценка экологического состояния территории",
  "Сведения об ограничениях и зонах с особыми условиями использования",
  "Прогноз возможного воздействия",
  "Рекомендации по экологическому мониторингу",
  "Технический отчёт с текстовыми и графическими приложениями",
  "Ответы на замечания по выполненным работам",
];

const turnkeySurveys = [
  {
    title: "Инженерно-экологические изыскания",
    description: "Для проектирования, раздела ООС и прохождения экспертизы.",
    primary: true,
  },
  {
    title: "Инженерно-геологические изыскания",
    description: "Данные по грунтам, подземным водам и условиям строительства.",
  },
  {
    title: "Инженерно-геодезические изыскания",
    description: "Топосъёмка и материалы для проектных решений.",
  },
  {
    title: "Комплекс под ключ",
    description: "Единая координация, договор, сроки и комплект материалов.",
  },
];

export function ScopeAndDeliverablesSection() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden bg-white pb-8 pt-16 text-[#0E2748] sm:pb-10 sm:pt-20 lg:pb-10 lg:pt-24"
    >
      <TopoLines className="left-[-8rem] top-28 hidden h-64 w-[34rem] rotate-180 lg:block" />
      <EngineeringGrid className="right-8 top-20 hidden h-44 w-80 opacity-35 lg:block" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E2748]/60">
            <span className="size-2 rounded-full bg-[#F4A11A]" />
            Состав работ и результат
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            Что входит в инженерно-экологические изыскания
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#0E2748]/65">
            Формируем состав работ под объект, требования проектирования и
            экспертизы. На выходе заказчик получает технический отчёт и
            материалы, которые можно использовать в проектной документации.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold tracking-tight text-[#0E2748]">
            Как проходит работа
          </h3>

          <ol className="mt-5 grid gap-2.5 sm:mt-7 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {workStages.map((stage) => (
              <li
                key={stage.number}
                className="group relative min-h-0 overflow-hidden border border-[#0E2748]/10 bg-[#F7F9FC] p-3.5 shadow-[0_12px_30px_rgba(14,39,72,0.05)] transition-all duration-200 hover:-translate-y-[3px] hover:border-[#F4A11A]/55 hover:shadow-[0_18px_40px_rgba(14,39,72,0.10)] sm:min-h-60 sm:p-6"
              >
                <CornerMarkers className="hidden opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:block" />
                <div className="absolute inset-x-0 top-0 h-1 bg-[#F4A11A]/75 transition-colors duration-200 group-hover:bg-[#F4A11A]" />
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F4A11A]">
                  Этап {stage.number}
                </span>
                <h4 className="mt-2 text-base font-semibold tracking-tight text-[#0E2748] sm:mt-4 sm:text-xl">
                  {stage.title}
                </h4>
                <p className="mt-1.5 text-sm leading-5 text-[#0E2748]/65 sm:hidden">
                  {stage.mobileDescription}
                </p>
                <ul className="mt-5 hidden space-y-3 sm:block">
                  {stage.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-6 text-[#0E2748]/65"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#F4A11A]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <details className="group mt-10 border border-[#0E2748]/10 bg-white p-5 shadow-[0_18px_46px_rgba(14,39,72,0.07)] md:hidden">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-xl font-semibold tracking-tight text-[#0E2748]">
            <span>Что получает заказчик</span>
            <span
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-xl leading-5 text-[#F4A11A] transition-transform duration-200 group-hover:translate-x-0.5 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <ul className="mt-5 grid gap-y-3">
            {deliverables.map((deliverable) => (
              <li
                key={deliverable}
                className="flex items-start gap-3 border-t border-[#0E2748]/8 pt-3 text-sm leading-6 text-[#0E2748]/70"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#F4A11A]" />
                {deliverable}
              </li>
            ))}
          </ul>

          <div className="relative mt-6 border border-[#F4A11A]/50 border-l-3 bg-[#F7F9FC] p-4">
            <CornerMarkers className="opacity-60" />
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F4A11A]">
              Главный результат
            </p>
            <h4 className="mt-2 text-lg font-semibold text-[#0E2748]">
              Технический отчёт
            </h4>
            <a
              href="https://glavgeocom.ru/netcat_files/4/22/TO_Ekologicheskie_izyskaniya_primer_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-10 items-center justify-center rounded-sm border border-[#0E2748]/30 bg-white px-4 py-2.5 text-sm font-semibold text-[#0E2748] transition-colors duration-200 hover:border-[#F4A11A] hover:bg-[#F4A11A]/5"
            >
              Посмотреть пример отчёта
            </a>
          </div>
        </details>

        <div className="mt-10 hidden border border-[#0E2748]/10 bg-white p-6 shadow-[0_18px_46px_rgba(14,39,72,0.07)] md:block sm:p-8">
          <h3 className="text-2xl font-semibold tracking-tight text-[#0E2748]">
            Что получает заказчик
          </h3>
          <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {deliverables.map((deliverable) => (
              <li
                key={deliverable}
                className="flex items-start gap-3 border-t border-[#0E2748]/8 pt-4 text-sm leading-6 text-[#0E2748]/70 sm:text-base"
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
                {deliverable}
              </li>
            ))}
          </ul>

          <div className="relative mt-8 border border-[#F4A11A]/50 border-l-3 bg-[#F7F9FC] p-5 sm:flex sm:items-center sm:justify-between sm:gap-8">
            <CornerMarkers className="opacity-60" />
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F4A11A]">
                Главный результат
              </p>
              <h4 className="mt-2 text-lg font-semibold text-[#0E2748]">
                Технический отчёт
              </h4>
              <p className="mt-2 text-sm leading-6 text-[#0E2748]/62">
                Технический отчёт показывает состав выполненных работ,
                результаты исследований, выводы и материалы, которые
                используются проектировщиками и экспертизой.
              </p>
            </div>
            <a
              href="https://glavgeocom.ru/netcat_files/4/22/TO_Ekologicheskie_izyskaniya_primer_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-sm border border-[#0E2748]/30 bg-white px-4 py-2.5 text-sm font-semibold text-[#0E2748] transition-colors duration-200 hover:border-[#F4A11A] hover:bg-[#F4A11A]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A11A] sm:mt-0"
            >
              <svg
                aria-hidden="true"
                className="size-4 text-[#F4A11A]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5A3.375 3.375 0 0 0 10.125 2.25H8.25m0 12.75h7.5m-7.5 3h4.5m-6.75 3.75h12A2.25 2.25 0 0 0 20.25 19.5V8.906a2.25 2.25 0 0 0-.659-1.591l-4.906-4.906a2.25 2.25 0 0 0-1.591-.659H6A2.25 2.25 0 0 0 3.75 4v15.5A2.25 2.25 0 0 0 6 21.75Z"
                />
              </svg>
              Посмотреть пример отчёта
            </a>
          </div>
        </div>

        <div className="mt-10 border border-[#0E2748]/10 bg-[#F7F9FC] p-6 sm:p-8">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-semibold tracking-tight text-[#0E2748]">
              Можем выполнить комплекс инженерных изысканий под ключ
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#0E2748]/62 sm:text-base">
              Часто инженерно-экологические изыскания заказывают вместе с
              геологией и геодезией. Выполним смежные работы в одном договоре,
              чтобы заказчику не приходилось координировать нескольких
              подрядчиков.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {turnkeySurveys.map((survey) => (
              <article
                key={survey.title}
                className={`group relative border bg-white p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#F4A11A] hover:shadow-[0_18px_45px_rgba(14,39,72,0.12)] focus-within:-translate-y-1 focus-within:border-[#F4A11A] focus-within:shadow-[0_18px_45px_rgba(14,39,72,0.12)] ${
                  survey.primary
                    ? "border-[#F4A11A]/55 shadow-[0_10px_26px_rgba(14,39,72,0.06)]"
                    : "border-[#0E2748]/10"
                }`}
              >
                <CornerMarkers className="hidden opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:block" />
                <div
                  className={`h-1 w-10 transition-all duration-300 ease-out group-hover:w-14 group-hover:bg-[#F4A11A] group-focus-within:w-14 group-focus-within:bg-[#F4A11A] ${
                    survey.primary ? "bg-[#F4A11A]" : "bg-[#0E2748]/18"
                  }`}
                />
                <h4 className="mt-4 text-base font-semibold leading-6 text-[#0E2748] transition-colors duration-300 group-hover:text-[#0A1E38]">
                  {survey.title}
                </h4>
                <p className="mt-2 hidden text-sm leading-6 text-[#0E2748]/58 sm:block">
                  {survey.description}
                </p>
              </article>
            ))}
          </div>

        </div>

        <div className="mt-12 hidden border border-[#0E2748]/10 bg-[#F7F9FC] p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold tracking-tight text-[#0E2748] sm:text-2xl">
              Хотите понять, какие работы потребуются вашему объекту?
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#0E2748]/62 sm:text-base">
              Отправьте параметры объекта — специалист подготовит смету и
              подскажет, какой состав исследований нужен для проектирования и
              экспертизы.
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

