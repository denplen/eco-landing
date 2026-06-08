type YandexMetrikaFunction = (
  counterId: number,
  method: "reachGoal",
  goal: string,
  params?: Record<string, unknown>,
) => void;

declare global {
  interface Window {
    ym?: YandexMetrikaFunction;
  }
}

const fallbackCounterId = "109080851";

export function reachYandexGoal(
  goal: string,
  params?: Record<string, unknown>,
) {
  if (typeof window === "undefined") return;

  const counterId = Number(
    process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID || fallbackCounterId,
  );

  if (!Number.isFinite(counterId) || !window.ym) return;

  try {
    window.ym(counterId, "reachGoal", goal, params);
  } catch {
    // Analytics must not break user actions.
  }
}
