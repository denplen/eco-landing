const stats = [
  {
    value: "20+ лет",
    label: "на рынке инженерных изысканий",
    description:
      "Понимаем требования проектировщиков, заказчиков и экспертизы",
  },
  {
    value: "10 000+",
    label: "выполненных объектов",
    description:
      "Работаем с жилыми, общественными, промышленными и линейными объектами",
  },
  {
    value: "40+",
    label: "единиц техники и оборудования",
    description:
      "Выполняем полевые работы без лишней зависимости от подрядчиков",
  },
  {
    value: "Член СРО",
    label: "работаем по договору",
    description: "Фиксируем состав работ, сроки и результат",
  },
];

const customerBenefits = [
  "Корректно определяем состав работ до заключения договора",
  "Фиксируем сроки и результат в договоре",
  "Готовим материалы для проектировщиков и экспертизы",
  "Помогаем закрывать замечания по выполненным изысканиям",
];

export function TrustStatsSection() {
  return (
    <section
      id="trust"
      className="scroll-mt-24 bg-white py-16 text-[#0E2748] sm:py-20 lg:py-22"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E2748]/60">
            <span className="size-2 rounded-full bg-[#F4A11A]" />
            Надёжный подрядчик
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            Опыт, на который можно опереться в проекте
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#0E2748]/65">
            Выполняем инженерные изыскания для застройщиков, технических
            заказчиков и проектировщиков. Берём на себя не только подготовку
            отчёта, но и сопровождение замечаний по выполненным работам.
          </p>
        </div>

        <dl className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="group relative min-h-64 overflow-hidden border border-[#0E2748]/10 bg-white p-6 shadow-[0_14px_36px_rgba(14,39,72,0.07)] transition-all duration-200 hover:-translate-y-[3px] hover:border-[#F4A11A]/70 hover:shadow-[0_22px_50px_rgba(14,39,72,0.14)]"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-[#F4A11A] opacity-70 transition-opacity duration-200 group-hover:opacity-100" />
              <dd className="text-3xl font-semibold tracking-tight text-[#0E2748] sm:text-4xl">
                {stat.value}
              </dd>
              <dt className="mt-5 max-w-[15rem] text-base font-semibold leading-6 text-[#0E2748]">
                {stat.label}
              </dt>
              <p className="mt-4 text-sm leading-6 text-[#0E2748]/58">
                {stat.description}
              </p>
            </div>
          ))}
        </dl>

        <div className="relative mt-12 overflow-hidden border border-[#0E2748]/10 bg-[#F7F9FC] p-6 shadow-[0_16px_42px_rgba(14,39,72,0.06)] sm:p-8 lg:mt-12 lg:grid lg:grid-cols-[0.86fr_1.14fr] lg:gap-14 lg:p-10">
          <div className="absolute inset-y-0 left-0 w-1 bg-[#F4A11A]" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F4A11A]">
              Экспертный подход
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#0E2748]">
              Почему это важно для заказчика
            </h3>
            <p className="mt-4 max-w-md text-sm leading-6 text-[#0E2748]/65 sm:text-base">
              Ошибки в составе изысканий приводят к доработкам, замечаниям
              экспертизы и сдвигу сроков проектирования. Поэтому мы заранее
              проверяем исходные данные и фиксируем результат в договоре.
            </p>

            <div className="mt-6 border border-[#F4A11A]/35 bg-white px-4 py-3">
              <p className="text-sm font-semibold leading-6 text-[#0E2748]">
                Сопровождаем замечания экспертизы по выполненным работам
              </p>
            </div>
          </div>

          <div className="mt-8 lg:mt-0">
            <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {customerBenefits.map((benefit) => (
                <li
                  key={benefit}
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
                  {benefit}
                </li>
              ))}
            </ul>

            <p className="mt-7 border-t border-[#0E2748]/10 pt-5 text-sm leading-6 text-[#0E2748]/62">
              Состав работ уточняется до договора, чтобы заказчик понимал
              объём изысканий, сроки и ожидаемый результат.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
