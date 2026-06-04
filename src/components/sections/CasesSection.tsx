"use client";

import { CtaButton } from "@/components/ui/CtaButton";

type CaseItem = {
  number: string;
  title: string;
  badge: string;
  task: string;
  works: string[];
  result: string;
  optionalClientName?: string;
  optionalLocation?: string;
  optionalImage?: string;
};

const cases: CaseItem[] = [
  {
    number: "01",
    title: "Жилой комплекс",
    badge: "Новое строительство",
    task: "Подготовить материалы инженерно-экологических изысканий для проектирования и прохождения экспертизы.",
    works: [
      "Обследование территории",
      "Отбор проб",
      "Лабораторные исследования",
      "Технический отчёт",
    ],
    result:
      "Материалы переданы для проектирования и экспертного сопровождения.",
  },
  {
    number: "02",
    title: "Промышленный объект",
    badge: "Строительство и реконструкция",
    task: "Оценить экологическое состояние территории перед строительством или реконструкцией.",
    works: [
      "Анализ исходных данных",
      "Полевые исследования",
      "Оценка ограничений",
      "Рекомендации по мониторингу",
    ],
    result:
      "Заказчик получил данные для проектных решений и оценки экологических рисков.",
  },
  {
    number: "03",
    title: "Социальный объект",
    badge: "Проектная документация",
    task: "Подготовить комплект материалов для проектной документации и раздела ООС.",
    works: [
      "Рекогносцировочное обследование",
      "Лабораторные исследования",
      "Камеральная обработка",
      "Подготовка технического отчёта",
    ],
    result:
      "Проектировщики получили исходные данные для разработки проектной документации.",
  },
  {
    number: "04",
    title: "Комплексный объект",
    badge: "Экология + геология + геодезия",
    task: "Выполнить комплекс инженерных изысканий для подготовки проектной документации и прохождения экспертизы.",
    works: [
      "Инженерно-экологические изыскания",
      "Инженерно-геологические изыскания",
      "Инженерно-геодезические изыскания",
      "Подготовка комплекта материалов для проектировщиков",
    ],
    result:
      "Заказчик получил единый комплект материалов по нескольким видам изысканий без координации нескольких подрядчиков.",
  },
];

export function CasesSection() {
  return (
    <section
      id="cases"
      className="scroll-mt-24 bg-[#F7F9FC] py-16 text-[#0E2748] sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E2748]/60">
            <span className="size-2 rounded-full bg-[#F4A11A]" />
            Объекты
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            Работаем с жилыми, промышленными и инфраструктурными объектами
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#0E2748]/65">
            Выполняем инженерно-экологические изыскания для нового
            строительства, реконструкции и подготовки проектной документации.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {cases.map((item) => (
            <article
              key={item.number}
              className="group relative overflow-hidden border border-[#0E2748]/10 bg-white p-6 shadow-[0_14px_36px_rgba(14,39,72,0.05)] transition-all duration-200 hover:-translate-y-[3px] hover:border-[#F4A11A]/55 hover:shadow-[0_20px_46px_rgba(14,39,72,0.10)] sm:p-7"
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-[#F4A11A]/75 transition-colors duration-200 group-hover:bg-[#F4A11A]" />

              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F4A11A]">
                  Объект {item.number}
                </span>
                <span className="rounded-full border border-[#0E2748]/10 bg-[#F7F9FC] px-3 py-1 text-xs font-medium text-[#0E2748]/55">
                  {item.badge}
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[#0E2748]">
                {item.title}
              </h3>

              <div className="mt-5 border-t border-[#0E2748]/10 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0E2748]/45">
                  Задача
                </p>
                <p className="mt-2 text-sm leading-6 text-[#0E2748]/68 sm:text-base">
                  {item.task}
                </p>
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0E2748]/45">
                  Что выполняли
                </p>
                <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {item.works.map((work) => (
                    <li
                      key={work}
                      className="flex items-start gap-2.5 text-sm leading-6 text-[#0E2748]/65"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#F4A11A]" />
                      {work}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border border-[#F4A11A]/30 bg-[#F7F9FC] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F4A11A]">
                  Результат
                </p>
                <p className="mt-2 text-sm leading-6 text-[#0E2748]/70">
                  {item.result}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[#0E2748]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <h3 className="text-lg font-semibold tracking-tight text-[#0E2748] sm:text-xl">
              Есть похожий объект?
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-[#0E2748]/62">
              Опишите задачу — подскажем, какие изыскания потребуются и какие
              материалы понадобятся проектировщикам.
            </p>
          </div>

          <CtaButton
            variant="primary"
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-estimate-modal"))
            }
            className="w-full shrink-0 sm:w-auto"
          >
            Получить смету
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
