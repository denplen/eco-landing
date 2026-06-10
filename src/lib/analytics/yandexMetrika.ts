type YandexMetrikaFunction = (
  counterId: number,
  method: "reachGoal",
  goal: string,
  params?: Record<string, unknown>,
  callback?: () => void,
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

export function reachYandexGoalAsync(
  goal: string,
  params?: Record<string, unknown>,
  timeoutMs = 700,
) {
  return new Promise<void>((resolve) => {
    if (typeof window === "undefined") {
      resolve();
      return;
    }

    const counterId = Number(
      process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID || fallbackCounterId,
    );

    if (!Number.isFinite(counterId) || !window.ym) {
      resolve();
      return;
    }

    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeoutId);
      resolve();
    };
    const timeoutId = window.setTimeout(finish, timeoutMs);

    try {
      window.ym(counterId, "reachGoal", goal, params, finish);
    } catch {
      finish();
    }
  });
}
