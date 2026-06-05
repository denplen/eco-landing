const yandexMapUrl =
  "https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=132077742495";

const credentials = [
  {
    number: "01",
    title: "Член СРО",
    description:
      "Состоим в СРО и выполняем инженерные изыскания для объектов любого уровня сложности.",
    action: "Проверить в реестре НОПРИЗ",
    href: "https://www.nopriz.ru/nreesters/elektronnyy-reestr/",
    isExternal: true,
  },
  {
    number: "02",
    title: "Выполненные объекты",
    description: "Посмотрите реальные объекты, выполненные нашей компанией.",
    action: "Смотреть объекты",
    href: "https://glavgeocom.ru/nashi-obekty/",
    isExternal: true,
  },
];

const companyDetails = [
  ["Юридическое лицо", "ООО «Главгеоком»"],
  ["ИНН / КПП", "7726703422 / 772601001"],
  ["ОГРН", "1127746649370"],
  ["Юридический адрес", "117105, г. Москва, Варшавское ш., д. 17, стр. 5"],
  ["Адрес офиса", "Московская область, Мытищи, улица Колпакова, 5, стр. 2"],
  ["Расчётный счёт", "40702810800030004536"],
  ["Банк", "ПАО АКБ «АВАНГАРД», г. Москва"],
  ["БИК", "044525201"],
  ["Корр. счёт", "30101810000000000201"],
];

const secondaryActionClassName =
  "mt-5 inline-flex min-h-10 items-center justify-center rounded-sm border border-[#0E2748]/25 bg-white px-4 py-2.5 text-sm font-semibold text-[#0E2748] transition-colors duration-200 hover:border-[#F4A11A] hover:bg-[#F4A11A]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A11A]";

export function CredentialsSection() {
  return (
    <section
      id="credentials"
      className="relative scroll-mt-24 overflow-hidden bg-white py-16 text-[#0E2748] sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-14 hidden h-40 w-72 bg-[linear-gradient(rgba(14,39,72,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(14,39,72,0.07)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40 lg:block"
      />
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
            Документы, реквизиты, отзывы и реальные объекты — всё, что нужно
            для проверки подрядчика перед договором.
          </p>
        </div>

        <div
          id="yandex-map"
          className="mt-12 scroll-mt-28 border border-[#0E2748]/10 bg-[#F7F9FC] p-6 shadow-[0_14px_36px_rgba(14,39,72,0.05)] sm:p-8 lg:grid lg:grid-cols-[0.62fr_1.38fr] lg:items-center lg:gap-8"
        >
          <div className="max-w-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F4A11A]">
              Отзывы
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#0E2748]">
              Рейтинг 5,0 на Яндекс Картах
            </h3>
            <p className="mt-4 text-sm leading-6 text-[#0E2748]/65 sm:text-base">
              Посмотрите отзывы клиентов на Яндекс Картах.
            </p>
            <a
              href={yandexMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryActionClassName}
            >
              Открыть на Яндекс Картах
            </a>
          </div>

          <div className="mt-6 border border-[#0E2748]/10 bg-white p-1.5 shadow-[0_18px_44px_rgba(14,39,72,0.08)] lg:mt-0 lg:p-2">
            <iframe
              src={yandexMapUrl}
              title="Главгеоком на Яндекс Картах"
              width="100%"
              height="440"
              frameBorder="0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[440px] w-full md:h-[400px]"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {credentials.map((credential) => (
            <article
              key={credential.number}
              className="group flex min-h-64 flex-col border border-[#0E2748]/10 bg-[#F7F9FC] p-6 shadow-[0_12px_32px_rgba(14,39,72,0.05)] transition-all duration-200 hover:-translate-y-[2px] hover:border-[#F4A11A]/50 hover:shadow-[0_18px_40px_rgba(14,39,72,0.09)]"
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
                {credential.href ? (
                  <a
                    href={credential.href}
                    target={credential.isExternal ? "_blank" : undefined}
                    rel={
                      credential.isExternal ? "noopener noreferrer" : undefined
                    }
                    className={secondaryActionClassName}
                  >
                    {credential.action}
                  </a>
                ) : (
                  // TODO: Add verified document links when the files are available.
                  <button type="button" className={secondaryActionClassName}>
                    {credential.action}
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>

        <details className="mt-10 border border-[#0E2748]/10 bg-[#F7F9FC] p-5 shadow-[0_14px_36px_rgba(14,39,72,0.05)] md:hidden">
          <summary className="cursor-pointer list-none text-xl font-semibold tracking-tight text-[#0E2748]">
            Реквизиты для договора
            <span className="float-right text-[#F4A11A]">+</span>
          </summary>
          <p className="mt-3 text-sm leading-6 text-[#0E2748]/65">
            Данные компании для проверки и подготовки договора.
          </p>

          <dl className="mt-5 grid gap-3">
            {companyDetails.map(([label, value]) => (
              <div
                key={label}
                className="border border-[#0E2748]/8 bg-white/70 px-4 py-3.5 shadow-[0_8px_20px_rgba(14,39,72,0.025)]"
              >
                <dt className="text-sm font-medium leading-6 text-[#0E2748]/58">
                  {label}
                </dt>
                <dd className="mt-1 text-sm font-semibold leading-6 text-[#0E2748]">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </details>

        <div className="mt-10 hidden border border-[#0E2748]/10 bg-[#F7F9FC] p-6 shadow-[0_14px_36px_rgba(14,39,72,0.05)] md:block sm:p-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold tracking-tight text-[#0E2748]">
              Реквизиты для договора
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#0E2748]/65 sm:text-base">
              Данные компании для проверки и подготовки договора.
            </p>
          </div>

          <dl className="mt-6 grid gap-3 md:grid-cols-2">
            {companyDetails.map(([label, value]) => (
              <div
                key={label}
                className="border border-[#0E2748]/8 bg-white/70 px-4 py-3.5 shadow-[0_8px_20px_rgba(14,39,72,0.025)] sm:grid sm:grid-cols-[0.34fr_0.66fr] sm:gap-5"
              >
                <dt className="text-sm font-medium leading-6 text-[#0E2748]/58">
                  {label}
                </dt>
                <dd className="mt-1 text-sm font-semibold leading-6 text-[#0E2748] sm:mt-0">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

