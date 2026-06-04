"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type MouseEvent } from "react";
import { CtaButton } from "@/components/ui/CtaButton";

const navItems = [
  { label: "Услуги", href: "#services" },
  { label: "Объекты", href: "#cases" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Процесс", href: "#process" },
  { label: "FAQ", href: "#faq" },
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
  "min-h-12 w-full rounded-sm border border-[#0E2748]/15 bg-white px-4 text-sm text-[#0E2748] outline-none transition-colors placeholder:text-[#0E2748]/35 focus:border-[#F4A11A] focus:shadow-[0_0_0_3px_rgba(244,161,26,0.10)]";

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
          ? "border border-[#0E2748]/10 p-6 shadow-[0_28px_75px_rgba(14,39,72,0.16)] ring-1 ring-white/80 sm:p-9"
          : "p-7 sm:p-10"
      }`}
    >
      <div className="border-l-3 border-[#F4A11A] pl-4 sm:pl-5">
        <h2 className="text-xl font-semibold leading-tight tracking-tight sm:text-[1.65rem]">
          Получите смету по вашему объекту
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-6 text-[#0E2748]/58">
          Укажите параметры объекта и нужные виды изысканий — специалист
          подготовит предложение по составу, срокам и стоимости работ.
        </p>
      </div>

      <fieldset className="mt-6">
        <legend className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0E2748]/45">
          Параметры объекта
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
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
            <div className="mt-2 grid gap-2 rounded-sm border border-[#0E2748]/10 bg-[#F7F9FC] p-3 sm:grid-cols-2">
              {surveyTypes.map((surveyType, index) => (
                <label
                  key={surveyType}
                  className="flex cursor-pointer items-start gap-2.5 text-sm leading-5 text-[#0E2748]/70"
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

      <fieldset className="mt-6">
        <legend className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0E2748]/45">
          Контакты
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
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

      <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
        <CtaButton
          type="submit"
          variant="primary"
        >
          Получить смету
        </CtaButton>
        <label className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-sm border-2 border-[#0E2748]/55 bg-white px-5 py-3 text-sm font-semibold text-[#0E2748] transition-all duration-200 hover:border-[#F4A11A] hover:bg-[#F4A11A]/8 hover:shadow-sm focus-within:border-[#F4A11A] focus-within:bg-[#F4A11A]/8">
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
      </div>

      <p className="mt-4 text-xs leading-5 text-[#0E2748]/42">
        Ваши данные нужны только для подготовки коммерческого предложения. Мы не
        рассылаем рекламные сообщения.
      </p>
    </form>
  );
}

export function HeroSection() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [isEstimateModalVisible, setIsEstimateModalVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeNavHref, setActiveNavHref] = useState("");

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
          <Image
            src="/images/logo_horizont.svg"
            alt="Главгеоком"
            width={210}
            height={60}
            priority
            className="h-auto w-32 shrink-0 sm:w-40"
          />

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
              href="#contact"
              aria-label="Связаться в Telegram"
              className="hidden size-8 items-center justify-center rounded-full border border-[#0E2748]/15 text-[10px] font-bold text-[#0E2748] transition-colors hover:border-[#F4A11A] hover:text-[#F4A11A] sm:inline-flex"
            >
              TG
            </a>
            <a
              href="#contact"
              aria-label="Связаться в MAX"
              className="hidden size-8 items-center justify-center rounded-full border border-[#0E2748]/15 text-[10px] font-bold text-[#0E2748] transition-colors hover:border-[#F4A11A] hover:text-[#F4A11A] sm:inline-flex"
            >
              MAX
            </a>
            <CtaButton
              onClick={openEstimateModal}
              variant="primary"
              className="min-h-9 gap-1.5 px-3 py-2 text-xs shadow-none hover:shadow-sm sm:px-4 sm:text-sm"
            >
              Получить смету
            </CtaButton>
          </div>
        </div>
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
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
            <div className="absolute -inset-6 hidden border border-[#0E2748]/8 bg-white/25 backdrop-blur-[2px] lg:block" />
            <div className="absolute -bottom-5 -right-5 hidden size-28 border-b-2 border-r-2 border-[#F4A11A]/55 lg:block" />
            <div className="relative">
              <EstimateForm id="hero-estimate-form" compact />
            </div>
          </div>
        </div>
      </section>

      {isEstimateModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Получить смету"
          className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0E2748]/74 p-3 backdrop-blur-[6px] transition-opacity duration-200 sm:p-6 ${
            isEstimateModalVisible ? "opacity-100" : "opacity-0"
          }`}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) {
              closeEstimateModal();
            }
          }}
        >
          <div
            className={`relative max-h-[calc(100vh-1.5rem)] w-full max-w-3xl overflow-y-auto border border-[#F4A11A]/35 bg-white shadow-[0_40px_120px_rgba(0,0,0,0.42)] ring-1 ring-white/60 transition-all duration-200 sm:max-h-[calc(100vh-3rem)] ${
              isEstimateModalVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-2 scale-[0.985] opacity-0"
            }`}
          >
            <button
              type="button"
              aria-label="Закрыть окно"
              onClick={closeEstimateModal}
              className="absolute right-3 top-3 z-10 inline-flex size-9 items-center justify-center rounded-full border border-[#0E2748]/12 bg-white text-xl leading-none text-[#0E2748]/60 transition-all duration-200 hover:border-[#F4A11A] hover:text-[#0E2748] hover:shadow-sm"
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
