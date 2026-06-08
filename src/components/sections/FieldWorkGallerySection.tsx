"use client";

import Image from "next/image";
import {
  CornerMarkers,
  EngineeringGrid,
} from "@/components/ui/EngineeringDecor";
import { reachYandexGoal } from "@/lib/analytics/yandexMetrika";

const reportExampleUrl =
  "https://glavgeocom.ru/netcat_files/4/22/TO_Ekologicheskie_izyskaniya_primer_.pdf";

const photos = [
  {
    src: "/images/WhatsApp Image 2025-04-10 at 17.17.48 (4).jpeg",
    alt: "Вид сверху на буровую установку",
    title: "Полевые работы на объекте",
  },
  {
    src: "/images/WhatsApp Image 2025-04-10 at 17.17.52.jpeg",
    alt: "Керны и образцы грунта",
    title: "Отбор и анализ материалов",
  },
  {
    src: "/images/WhatsApp Image 2025-04-10 at 17.17.46.jpeg",
    alt: "Зимние полевые работы",
    title: "Работы в разные сезоны",
  },
  {
    src: "/images/WhatsApp Image 2025-04-10 at 17.17.49.jpeg",
    alt: "Буровая установка и специалисты на объекте",
    title: "Съёмка и контроль работ",
  },
];

function PhotoCard({
  photo,
  className = "",
  sizes,
}: {
  photo: (typeof photos)[number];
  className?: string;
  sizes: string;
}) {
  return (
    <figure
      className={`group relative overflow-hidden border border-[#0E2748]/10 bg-white shadow-[0_14px_36px_rgba(14,39,72,0.08)] ${className}`}
    >
      <CornerMarkers className="z-10 hidden opacity-80 sm:block" />
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0E2748]/88 via-[#0E2748]/45 to-transparent px-4 pb-4 pt-16">
        <figcaption className="text-sm font-semibold text-white">
          {photo.title}
        </figcaption>
      </div>
    </figure>
  );
}

export function FieldWorkGallerySection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F9FC] py-12 text-[#0E2748] sm:py-18 lg:py-20">
      <EngineeringGrid className="left-8 top-16 hidden h-40 w-80 opacity-65 lg:block" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E2748]/60">
            <span className="size-2 rounded-full bg-[#F4A11A]" />
            Полевые работы
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            От изысканий на объекте к готовому отчёту
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#0E2748]/65">
            Бурение, отбор материалов и подготовка данных, которые используются
            в проектной документации и экспертизе.
          </p>
        </div>

        <div className="relative mt-8 grid gap-4 lg:mt-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-5">
          <CornerMarkers className="-inset-3 hidden lg:block" />
          <PhotoCard
            photo={photos[0]}
            className="min-h-[280px] sm:min-h-[420px] lg:min-h-[620px]"
            sizes="(min-width: 1024px) 56vw, 100vw"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:gap-5">
            <PhotoCard
              photo={photos[1]}
              className="min-h-[150px] sm:min-h-[220px] lg:min-h-[300px]"
              sizes="(min-width: 1024px) 22vw, 50vw"
            />
            <PhotoCard
              photo={photos[2]}
              className="hidden min-h-[220px] md:block lg:min-h-[300px]"
              sizes="(min-width: 1024px) 22vw, 50vw"
            />
            <PhotoCard
              photo={photos[3]}
              className="hidden min-h-[300px] md:block"
              sizes="(min-width: 1024px) 22vw, 50vw"
            />

            <div className="relative border border-[#0E2748]/10 bg-white p-5 shadow-[0_14px_36px_rgba(14,39,72,0.06)] sm:p-6 lg:min-h-[300px]">
              <CornerMarkers className="opacity-80" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F4A11A]">
                Результат
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#0E2748]">
                От полевых данных к техническому отчёту
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#0E2748]/65">
                По результатам работ передаём технический отчёт, протоколы
                исследований и материалы, которые можно использовать для
                проектирования и экспертизы.
              </p>
              <a
                href={reportExampleUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => reachYandexGoal("report_click")}
                className="mt-5 inline-flex min-h-10 items-center justify-center rounded-sm border border-[#0E2748]/30 bg-white px-4 py-2.5 text-sm font-semibold text-[#0E2748] transition-colors duration-200 hover:border-[#F4A11A] hover:bg-[#F4A11A]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A11A]"
              >
                Посмотреть пример отчёта
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
