"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type MouseEvent } from "react";
import { CtaButton } from "@/components/ui/CtaButton";

const navItems = [
  { label: "Опыт", href: "#experience" },
  { label: "Как работаем", href: "#services" },
  { label: "Экспертиза", href: "#expertise" },
  { label: "Смета", href: "#process" },
  { label: "Реквизиты", href: "#credentials" },
  { label: "Контакты", href: "#contacts" },
];

const objectTypes = [
  "Жилое здание",
  "Социальный объект",
  "Промышленный объект",
  "Площадной объект",
  "Линейный объект",
  "Другое",
];

const projectStages = [
  "Подготовка к проектированию",
  "Прохождение экспертизы",
  "Есть замечания экспертизы",
  "Нужно КП для тендера",
  "Реконструкция объекта",
  "Не знаю, нужна консультация",
];

const surveyTypes = [
  "Инженерно-экологические",
  "Инженерно-геологические",
  "Инженерно-геодезические",
  "Нужен комплекс под ключ",
  "Не знаю, нужна консультация",
];

const workAreas = [
  "Москва ЦАО",
  "Москва САО",
  "Москва СВАО",
  "Москва ВАО",
  "Москва ЮВАО",
  "Москва ЮАО",
  "Москва ЮЗАО",
  "Москва ЗАО",
  "Москва СЗАО",
  "Зеленоград",
  "Новая Москва",
  "Балашиха",
  "Бронницы",
  "Воскресенский район",
  "Дмитровский район",
  "Долгопрудный",
  "Домодедово",
  "Жуковский",
  "Звенигород",
  "Истринский район",
  "Клинский район",
  "Королев",
  "Котельники",
  "Красногорский район",
  "Ленинский район",
  "Лыткарино",
  "Люберецкий район",
  "Мытищинский район",
  "Наро-Фоминский район",
  "Ногинский район",
  "Одинцовский район",
  "Павлово-Посадский район",
  "Подольский район",
  "Пушкинский район",
  "Раменский район",
  "Реутов",
  "Рузский район",
  "Сергиево-Посадский район",
  "Солнечногорский район",
  "Химки",
  "Чеховский район",
  "Щёлковский район",
  "Электросталь",
  "Другое",
];

const fieldClassName =
  "min-h-11 w-full rounded-sm border border-[#0E2748]/15 bg-white px-3 text-sm text-[#0E2748] outline-none transition-colors placeholder:text-[#0E2748]/35 focus:border-[#F4A11A] focus:shadow-[0_0_0_3px_rgba(244,161,26,0.10)] sm:min-h-12 sm:px-4";

type EstimateFormProps = {
  id?: string;
  compact?: boolean;
};

function EstimateForm({ id, compact = false }: EstimateFormProps) {
  return (
    <form
      id={id}
      className={`bg-white text-[#0E2748] ${
        compact
          ? "border border-[#0E2748]/10 p-4 shadow-[0_28px_75px_rgba(14,39,72,0.16)] ring-1 ring-white/80 sm:p-9"
          : "flex h-full flex-col overflow-hidden md:block md:h-auto md:overflow-visible"
      }`}
    >
      <div
        className={
          compact
            ? ""
            : "min-h-0 flex-1 overflow-y-auto p-4 pb-3 sm:p-10 md:overflow-visible"
        }
      >
      <div className="border-l-3 border-[#F4A11A] pl-4 sm:pl-5">
        <h2 className="text-xl font-semibold leading-tight tracking-tight sm:text-[1.65rem]">
          <span className="sm:hidden">Получить смету</span>
          <span className="hidden sm:inline">
            Получите смету по вашему объекту
          </span>
        </h2>
        <p className="mt-2 hidden max-w-xl text-sm leading-6 text-[#0E2748]/58 sm:block">
          Укажите параметры объекта и нужные виды изысканий — специалист
          подготовит предложение по составу, срокам и стоимости работ.
        </p>
      </div>

      <fieldset className="mt-4 sm:mt-6">
        <legend className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0E2748]/45">
          Параметры объекта
        </legend>
        <div className="mt-3 grid gap-2.5 sm:grid-cols-2 sm:gap-3">
          <label>
            <span className="sr-only">Тип объекта</span>
            <select name="objectType" defaultValue="" className={fieldClassName}>
              <option value="" disabled>
                Тип объекта
              </option>
              {objectTypes.map((objectType) => (
                <option key={objectType} value={objectType}>
                  {objectType}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span className="sr-only">Задача / этап проекта</span>
            <select name="projectStage" defaultValue="" className={fieldClassName}>
              <option value="" disabled>
                Задача / этап проекта
              </option>
              {projectStages.map((stage) => (
                <option key={stage} value={stage}>
                  {stage}
                </option>
              ))}
            </select>
          </label>

          <fieldset className="sm:col-span-2">
            <legend className="text-xs font-semibold text-[#0E2748]/55">
              Какие изыскания нужны?
            </legend>
            <div className="mt-2 grid gap-1.5 rounded-sm border border-[#0E2748]/10 bg-[#F7F9FC] p-2.5 sm:grid-cols-2 sm:gap-2 sm:p-3">
              {surveyTypes.map((surveyType, index) => (
                <label
                  key={surveyType}
                  className="flex cursor-pointer items-start gap-2 text-xs leading-5 text-[#0E2748]/70 sm:gap-2.5 sm:text-sm"
                >
                  <input
                    type="checkbox"
                    name="surveyTypes"
                    value={surveyType}
                    defaultChecked={index === 0}
                    className="mt-0.5 size-4 shrink-0 accent-[#F4A11A]"
                  />
                  {surveyType}
                </label>
              ))}
            </div>
          </fieldset>

          <label>
            <span className="sr-only">Район проведения работ</span>
            <select name="workArea" defaultValue="" className={fieldClassName}>
              <option value="" disabled>
                Район проведения работ
              </option>
              {workAreas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span className="sr-only">Приблизительный объём работ</span>
            <input
              type="text"
              name="workVolume"
              placeholder="Площадь, протяжённость или описание"
              className={fieldClassName}
            />
          </label>

          <label>
            <span className="sr-only">Кадастровый номер объекта</span>
            <input
              type="text"
              name="cadastralNumber"
              placeholder="Кадастровый номер, если есть"
              className={fieldClassName}
            />
          </label>
        </div>
      </fieldset>

      <fieldset className="mt-4 sm:mt-6">
        <legend className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0E2748]/45">
          Контакты
        </legend>
        <div className="mt-3 grid gap-2.5 sm:grid-cols-3 sm:gap-3">
          <label>
            <span className="sr-only">Имя</span>
            <input
              type="text"
              name="name"
              placeholder="Имя"
              className={fieldClassName}
            />
          </label>
          <label>
            <span className="sr-only">Телефон</span>
            <input
              type="tel"
              name="phone"
              placeholder="Телефон"
              className={fieldClassName}
            />
          </label>
          <label>
            <span className="sr-only">Email</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={fieldClassName}
            />
          </label>
        </div>
      </fieldset>

      <p
        className={`mt-4 text-xs leading-5 text-[#0E2748]/42 ${
          compact ? "hidden" : ""
        }`}
      >
        Ваши данные нужны только для подготовки коммерческого предложения. Мы не
        рассылаем рекламные сообщения.
      </p>

      {!compact && (
        <div className="mt-6 hidden w-full grid-cols-2 gap-4 md:grid">
          <label className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-sm border-2 border-[#0E2748]/55 bg-white px-5 py-3 text-sm font-semibold text-[#0E2748] transition-all duration-200 hover:border-[#F4A11A] hover:bg-[#F4A11A]/8 hover:shadow-sm focus-within:border-[#F4A11A] focus-within:bg-[#F4A11A]/8">
            <input type="file" name="brief" className="sr-only" />
            <svg
              aria-hidden="true"
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94a3 3 0 0 1 4.243 4.243L8.552 18.32a1.5 1.5 0 0 1-2.121-2.121l7.693-7.693"
              />
            </svg>
            Прикрепить ТЗ / схему
          </label>
          <CtaButton
            type="submit"
            variant="primary"
            className="w-full px-8"
          >
            Получить смету
          </CtaButton>
        </div>
      )}

      </div>

      <div
        className={
          compact
            ? "mt-4 grid gap-2.5 sm:mt-6 sm:grid-cols-[1fr_auto] sm:gap-3"
            : "sticky bottom-0 z-10 grid shrink-0 grid-cols-2 gap-2 border-t border-[#0E2748]/10 bg-white p-3 shadow-[0_-10px_24px_rgba(14,39,72,0.08)] md:hidden"
        }
      >
        <CtaButton
          type="submit"
          variant="primary"
          className={
            compact
              ? "w-full sm:w-auto"
              : "order-2 min-h-11 w-full px-3 py-2.5 text-sm md:order-2 md:w-auto md:min-w-[220px] md:px-8 md:py-3 md:text-base"
          }
        >
          Получить смету
        </CtaButton>
        <label
          className={
            compact
              ? "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-sm border-2 border-[#0E2748]/55 bg-white px-4 py-2.5 text-sm font-semibold text-[#0E2748] transition-all duration-200 hover:border-[#F4A11A] hover:bg-[#F4A11A]/8 hover:shadow-sm focus-within:border-[#F4A11A] focus-within:bg-[#F4A11A]/8 sm:min-h-12 sm:px-5 sm:py-3"
              : "order-1 inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-1.5 rounded-sm border border-[#0E2748]/25 bg-white px-3 py-2.5 text-sm font-semibold text-[#0E2748] transition-all duration-200 hover:border-[#F4A11A] hover:bg-[#F4A11A]/8 hover:shadow-sm focus-within:border-[#F4A11A] focus-within:bg-[#F4A11A]/8 md:order-1 md:min-h-12 md:w-auto md:min-w-[220px] md:gap-2 md:border-2 md:border-[#0E2748]/55 md:px-5 md:py-3"
          }
        >
          <input type="file" name="brief" className="sr-only" />
          <svg
            aria-hidden="true"
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94a3 3 0 0 1 4.243 4.243L8.552 18.32a1.5 1.5 0 0 1-2.121-2.121l7.693-7.693"
            />
          </svg>
          {compact ? (
            "Прикрепить ТЗ / схему"
          ) : (
            <>
              <span className="md:hidden">Прикрепить ТЗ</span>
              <span className="hidden md:inline">Прикрепить ТЗ / схему</span>
            </>
          )}
        </label>
      </div>

      {compact && (
        <p className="mt-4 text-xs leading-5 text-[#0E2748]/42">
          Ваши данные нужны только для подготовки коммерческого предложения. Мы
          не рассылаем рекламные сообщения.
        </p>
      )}
    </form>
  );
}

export function HeroSection() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [isEstimateModalVisible, setIsEstimateModalVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeNavHref, setActiveNavHref] = useState("");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const openEstimateModal = useCallback(() => {
    setIsEstimateModalOpen(true);
    requestAnimationFrame(() => {
      setIsEstimateModalVisible(true);
    });
  }, []);

  const closeEstimateModal = () => {
    setIsEstimateModalVisible(false);
    window.setTimeout(() => {
      setIsEstimateModalOpen(false);
    }, 200);
  };

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsMobileNavOpen(false);
  };

  useEffect(() => {
    if (!isEstimateModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeEstimateModal();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isEstimateModalOpen]);

  useEffect(() => {
    window.addEventListener("open-estimate-modal", openEstimateModal);

    return () => {
      window.removeEventListener("open-estimate-modal", openEstimateModal);
    };
  }, [openEstimateModal]);

  useEffect(() => {
    const updateScrollState = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;

      setScrollProgress(Math.min(100, Math.max(0, progress)));

      const headerOffset = 112;
      let currentHref = "";
      let closestTop = Number.NEGATIVE_INFINITY;

      navItems.forEach((item) => {
        const section = document.querySelector<HTMLElement>(item.href);
        if (!section) return;

        const top = section.getBoundingClientRect().top;
        if (top <= headerOffset && top > closestTop) {
          closestTop = top;
          currentHref = item.href;
        }
      });

      setActiveNavHref(currentHref);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[#0E2748]/10 bg-white/95 shadow-[0_4px_18px_rgba(14,39,72,0.05)] backdrop-blur-sm">
        <div className="mx-auto flex min-h-[4.5rem] max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#top"
            aria-label="Перейти в начало страницы"
            onClick={(event) => handleNavClick(event, "#top")}
            className="shrink-0"
          >
            <Image
              src="/images/logo_horizont.svg"
              alt="Главгеоком"
              width={210}
              height={60}
              priority
              className="h-auto w-32 sm:w-40"
            />
          </a>

          <nav aria-label="Основная навигация" className="hidden xl:block">
            <ul className="flex items-center gap-5">
              {navItems.map((item) => (
                <li key={`${item.label}-${item.href}`}>
                  <a
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item.href)}
                    className={`group relative py-2 text-sm font-medium transition-colors duration-200 hover:text-[#F4A11A] ${
                      activeNavHref === item.href
                        ? "text-[#F4A11A]"
                        : "text-[#0E2748]/65"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-0 bottom-0 h-px origin-left bg-[#F4A11A] transition-transform duration-200 group-hover:scale-x-100 ${
                        activeNavHref === item.href
                          ? "scale-x-100"
                          : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <div className="hidden text-right lg:block">
              <a
                href="tel:+74993808104"
                className="block text-sm font-semibold text-[#0E2748] transition-colors hover:text-[#F4A11A]"
              >
                +7 (499) 380-81-04
              </a>
              <a
                href="mailto:info@glavgeocom.ru"
                className="block text-xs text-[#0E2748]/48 transition-colors hover:text-[#0E2748]"
              >
                info@glavgeocom.ru
              </a>
            </div>

            <a
              href="#contacts"
              aria-label="Связаться в Telegram"
              className="hidden size-8 items-center justify-center rounded-full border border-[#0E2748]/15 text-[10px] font-bold text-[#0E2748] transition-colors hover:border-[#F4A11A] hover:text-[#F4A11A] lg:inline-flex"
            >
              TG
            </a>
            <a
              href="#contacts"
              aria-label="Связаться в MAX"
              className="hidden size-8 items-center justify-center rounded-full border border-[#0E2748]/15 text-[10px] font-bold text-[#0E2748] transition-colors hover:border-[#F4A11A] hover:text-[#F4A11A] lg:inline-flex"
            >
              MAX
            </a>
            <div className="hidden lg:block">
              <CtaButton
                onClick={openEstimateModal}
                variant="primary"
                className="min-h-9 gap-1.5 px-3 py-2 text-xs shadow-none hover:shadow-sm sm:px-4 sm:text-sm"
              >
                Получить смету
              </CtaButton>
            </div>
            <button
              type="button"
              aria-label="Открыть меню"
              aria-expanded={isMobileNavOpen}
              onClick={() => setIsMobileNavOpen((isOpen) => !isOpen)}
              className="inline-flex size-10 items-center justify-center rounded-sm border border-[#0E2748]/15 text-[#0E2748] transition-colors hover:border-[#F4A11A] hover:text-[#F4A11A] xl:hidden"
            >
              <span className="relative block h-4 w-5" aria-hidden="true">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-200 ${
                    isMobileNavOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity duration-200 ${
                    isMobileNavOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-transform duration-200 ${
                    isMobileNavOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
        {isMobileNavOpen && (
          <nav
            aria-label="Мобильная навигация"
            className="border-t border-[#0E2748]/10 bg-white px-4 py-3 shadow-[0_12px_28px_rgba(14,39,72,0.08)] sm:px-6 xl:hidden"
          >
            <ul className="grid gap-1">
              {navItems.map((item) => (
                <li key={`${item.label}-${item.href}`}>
                  <a
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item.href)}
                    className={`block rounded-sm px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-[#F4A11A]/8 hover:text-[#F4A11A] ${
                      activeNavHref === item.href
                        ? "bg-[#F4A11A]/10 text-[#F4A11A]"
                        : "text-[#0E2748]/72"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <div className="h-0.5 w-full bg-[#0E2748]/5">
          <div
            className="h-full bg-[#F4A11A] transition-[width] duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      <section
        id="top"
        className="relative scroll-mt-24 overflow-hidden bg-[#F7F9FC] bg-cover bg-center text-[#0E2748]"
        style={{
          backgroundImage: "url('/images/hero-bg-engineering.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F9FC]/31 via-[#F7F9FC]/27 to-[#F7F9FC]/22" />
        <div className="absolute inset-0 bg-white/4" />
        <div className="absolute inset-y-0 left-0 w-[62%] bg-gradient-to-r from-white/72 via-white/35 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E2748]/72">
              <span className="size-2 rounded-full bg-[#F4A11A]" />
              Инженерные изыскания в Москве и Московской области
            </p>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3rem]">
              Инженерно-экологические изыскания с сопровождением экспертизы
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-[#0E2748]/78">
              Для застройщиков, технических заказчиков и проектировщиков.
              Подготовим технический отчёт для проектирования и поможем закрыть
              замечания экспертизы в зоне нашей ответственности.
            </p>

            <p className="mt-8 text-sm font-semibold leading-7 text-[#0E2748]/78 sm:text-base">
              20+ лет на рынке
              <span aria-hidden="true" className="mx-2 text-[#F4A11A]">
                ·
              </span>
              10 000+ объектов
              <span aria-hidden="true" className="mx-2 text-[#F4A11A]">
                ·
              </span>
              Член СРО
              <span aria-hidden="true" className="mx-2 text-[#F4A11A]">
                ·
              </span>
              Москва и МО
            </p>

            <div className="mt-7 lg:hidden">
              <CtaButton onClick={openEstimateModal} variant="primary">
                Получить смету
              </CtaButton>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-2xl lg:block lg:max-w-none">
            <div className="absolute -inset-6 hidden border border-[#0E2748]/8 bg-white/25 backdrop-blur-[2px] lg:block" />
            <div className="absolute -bottom-5 -right-5 hidden size-28 border-b-2 border-r-2 border-[#F4A11A]/55 lg:block" />
            <div className="relative">
              <EstimateForm id="hero-estimate-form" compact />
            </div>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#0E2748]/10 bg-white/95 px-3 py-2 shadow-[0_-12px_28px_rgba(14,39,72,0.12)] backdrop-blur-sm lg:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a
            href="tel:+74993808104"
            className="inline-flex min-h-11 items-center justify-center rounded-sm border border-[#0E2748]/20 bg-white px-3 text-sm font-semibold text-[#0E2748]"
          >
            Позвонить
          </a>
          <CtaButton
            onClick={openEstimateModal}
            variant="primary"
            className="min-h-11 px-3 py-2 text-sm"
          >
            Получить смету
          </CtaButton>
        </div>
      </div>

      {isEstimateModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Получить смету"
          className={`fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[#0E2748]/74 px-2 py-2 backdrop-blur-[6px] transition-opacity duration-200 sm:items-center sm:px-6 sm:py-8 ${
            isEstimateModalVisible ? "opacity-100" : "opacity-0"
          }`}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) {
              closeEstimateModal();
            }
          }}
        >
          <div
            className={`relative mx-auto my-2 flex h-[calc(100dvh-16px)] w-[calc(100vw-16px)] max-w-none flex-col overflow-hidden border border-[#F4A11A]/35 bg-white shadow-[0_40px_120px_rgba(0,0,0,0.42)] ring-1 ring-white/60 transition-all duration-200 sm:my-0 sm:h-auto sm:max-h-[calc(100vh-64px)] sm:w-full sm:max-w-3xl ${
              isEstimateModalVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-2 scale-[0.985] opacity-0"
            }`}
          >
            <button
              type="button"
              aria-label="Закрыть окно"
              onClick={closeEstimateModal}
              className="absolute right-2 top-2 z-10 inline-flex size-8 items-center justify-center rounded-full border border-[#0E2748]/12 bg-white text-lg leading-none text-[#0E2748]/60 shadow-sm transition-all duration-200 hover:border-[#F4A11A] hover:text-[#0E2748] hover:shadow-sm sm:right-3 sm:top-3 sm:size-9 sm:text-xl"
            >
              ×
            </button>
            <EstimateForm />
          </div>
        </div>
      )}
    </>
  );
}
