import {
  CornerMarkers,
  EngineeringGrid,
} from "@/components/ui/EngineeringDecor";

const audiences = [
  {
    number: "01",
    title: "Застройщикам",
    description:
      "Помогаем снизить риск задержки проекта, получить прогнозируемый бюджет и подготовить материалы для прохождения экспертизы.",
    points: [
      "Соблюдать сроки проекта",
      "Получить прогнозируемый бюджет",
      "Снизить риск замечаний экспертизы",
      "Снизить риск задержек из-за доработок",
    ],
  },
  {
    number: "02",
    title: "Техническим заказчикам",
    description:
      "Берём на себя организацию ИЭИ, подготовку отчёта и сопровождение замечаний по выполненным работам.",
    points: [
      "Проверить полноту исходных данных",
      "Организовать выполнение ИЭИ",
      "Получить комплект документации",
      "Координировать работу с проектировщиками",
    ],
  },
  {
    number: "03",
    title: "Проектировщикам",
    description:
      "Передаём исходные данные для проектных решений, раздела ООС и ответов на замечания экспертизы.",
    points: [
      "Получить достоверные исходные данные",
      "Использовать результаты в проектных решениях",
      "Подготовить раздел ООС",
      "Получить пояснения по отчёту",
    ],
  },
];

export function AudienceSolutionsSection() {
  return (
    <section
      id="audience"
      className="relative scroll-mt-24 overflow-hidden bg-[#F7F9FC] py-10 text-[#0E2748] sm:py-20 lg:py-24"
    >
      <EngineeringGrid className="right-10 top-16 hidden h-44 w-80 opacity-45 lg:block" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E2748]/60">
            <span className="size-2 rounded-full bg-[#F4A11A]" />
            Для кого
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            Понимаем задачи каждого участника проекта
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#0E2748]/65">
            Организуем инженерно-экологические изыскания так, чтобы результат
            был полезен заказчику, проектировщику и экспертной организации.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-3">
          {audiences.map((audience) => (
            <article
              key={audience.number}
              className="group relative flex min-h-full flex-col overflow-hidden border border-[#0E2748]/10 bg-white p-3.5 shadow-[0_12px_32px_rgba(14,39,72,0.05)] transition-all duration-200 hover:-translate-y-[3px] hover:border-[#F4A11A]/55 hover:shadow-[0_20px_46px_rgba(14,39,72,0.10)] sm:p-7"
            >
              <CornerMarkers className="hidden opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:block" />
              <div className="absolute inset-x-0 top-0 h-0.5 bg-[#F4A11A]/85 transition-colors duration-200 group-hover:bg-[#F4A11A] sm:h-1" />

              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F4A11A]">
                  {audience.number}
                </span>
                <span className="h-px flex-1 bg-[#0E2748]/16" />
              </div>

              <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#0E2748] sm:mt-6 sm:text-2xl">
                {audience.title}
              </h3>
              <p className="mt-1.5 text-sm leading-5 text-[#0E2748]/62 sm:mt-4 sm:text-base sm:leading-6">
                {audience.description}
              </p>

              <ul className="mt-7 hidden space-y-4 border-t border-[#0E2748]/10 pt-6 md:block">
                {audience.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-6 text-[#0E2748]/72"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#F4A11A]" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-7 hidden border-t border-[#0E2748]/10 pt-4 text-sm leading-6 text-[#0E2748]/62 sm:mt-10 sm:block sm:pt-5">
          Расскажите, на каком этапе ваш проект — это поможет точнее
          рассчитать смету и подготовить материалы для вашей роли в проекте.
        </p>
      </div>
    </section>
  );
}
