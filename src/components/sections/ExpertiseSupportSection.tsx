"use client";

import { CtaButton } from "@/components/ui/CtaButton";

const supportPoints = [
  {
    number: "01",
    title: "Проверяем исходные данные",
    description:
      "До начала работ уточняем назначение объекта, участок, требования проектирования и доступные материалы.",
  },
  {
    number: "02",
    title: "Согласуем состав исследований",
    description:
      "Подбираем состав работ под объект и требования технического задания.",
  },
  {
    number: "03",
    title: "Фиксируем результат в договоре",
    description:
      "Заказчик понимает, какие материалы будут подготовлены и переданы после завершения работ.",
  },
  {
    number: "04",
    title: "Готовим отчёт для проектировщиков",
    description:
      "Структурируем материалы так, чтобы их можно было использовать в проектной документации и разделе ООС.",
  },
];

const processSteps = [
  "Анализируем ТЗ и исходные данные",
  "Выполняем изыскания",
  "Передаём технический отчёт",
  "Помогаем закрывать замечания",
];

export function ExpertiseSupportSection() {
  return (
    <section
      id="expertise"
      className="scroll-mt-24 bg-white py-16 text-[#0E2748] sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E2748]/60">
            <span className="size-2 rounded-full bg-[#F4A11A]" />
            Экспертиза и замечания
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            Сопровождаем отчёт при прохождении экспертизы
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#0E2748]/65">
            Готовим технический отчёт так, чтобы его можно было использовать в
            проектной документации, а при появлении вопросов помогаем закрывать
            замечания по выполненным инженерно-экологическим изысканиям.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch lg:gap-10">
          <div className="flex h-full flex-col border border-[#0E2748]/10 bg-[#F7F9FC] p-6 shadow-[0_14px_36px_rgba(14,39,72,0.05)] sm:p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-[#0E2748]">
              Что происходит после выдачи отчёта
            </h3>
            <p className="mt-5 text-sm leading-7 text-[#0E2748]/68 sm:text-base">
              После передачи материалов у проектировщиков или экспертной
              организации могут возникнуть вопросы по составу работ, исходным
              данным, результатам исследований или выводам. Мы остаёмся на
              связи и готовим ответы по выполненным изысканиям в зоне нашей
              ответственности.
            </p>

            <div className="mt-8 border border-[#F4A11A]/35 border-l-3 bg-white p-5 lg:mt-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F4A11A]">
                Без опасных обещаний
              </p>
              <p className="mt-2 text-sm leading-6 text-[#0E2748]/65">
                Мы не обещаем автоматическое прохождение экспертизы, но
                готовим материалы в соответствии с задачей, нормативными
                требованиями и сопровождаем вопросы по выполненным работам.
              </p>
            </div>
          </div>

          <div className="flex h-full flex-col">
            <h3 className="text-2xl font-semibold tracking-tight text-[#0E2748]">
              Как мы снижаем риск замечаний
            </h3>
            <div className="mt-6 grid flex-1 gap-4 sm:grid-cols-2 sm:items-stretch">
              {supportPoints.map((point) => (
                <article
                  key={point.number}
                  className="group h-full border border-[#0E2748]/10 bg-white p-5 shadow-[0_10px_28px_rgba(14,39,72,0.04)] transition-all duration-200 hover:-translate-y-[2px] hover:border-[#F4A11A]/50 hover:shadow-[0_16px_34px_rgba(14,39,72,0.08)]"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F4A11A]">
                    {point.number}
                  </span>
                  <h4 className="mt-3 text-base font-semibold leading-6 text-[#0E2748]">
                    {point.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-[#0E2748]/60">
                    {point.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border border-[#F4A11A]/35 border-l-3 bg-[#F7F9FC] p-5 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-6">
          <div className="max-w-3xl">
            <h3 className="text-xl font-semibold tracking-tight text-[#0E2748]">
              Отвечаем на замечания по выполненным работам
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#0E2748]/65 sm:text-base">
              Если у проектировщиков или экспертизы появляются вопросы по
              результатам инженерно-экологических изысканий, готовим пояснения
              и корректировки в зоне нашей ответственности.
            </p>
          </div>
        </div>

        <div className="mt-8 border border-[#0E2748]/10 bg-white p-6 shadow-[0_12px_32px_rgba(14,39,72,0.04)]">
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <li
                key={step}
                className="flex min-h-20 items-start gap-3 border border-[#0E2748]/8 bg-[#F7F9FC] p-4"
              >
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-[#F4A11A]/45 bg-[#F4A11A]/8 text-xs font-semibold text-[#F4A11A]">
                  {index + 1}
                </span>
                <span className="pt-1 text-sm font-medium leading-6 text-[#0E2748]/72">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 border border-[#0E2748]/10 bg-[#F7F9FC] p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold tracking-tight text-[#0E2748] sm:text-2xl">
              Хотите снизить риск замечаний по отчёту?
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#0E2748]/62 sm:text-base">
              Отправьте параметры объекта или ТЗ — специалист подскажет, какие
              материалы потребуются для проектирования и экспертизы.
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
