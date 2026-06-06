export function normalizePhoneDigits(value: string) {
  const digits = value.replace(/\D/g, "");
  let phoneDigits = digits;

  if (
    phoneDigits.length > 11 &&
    phoneDigits.startsWith("7") &&
    (phoneDigits[1] === "7" || phoneDigits[1] === "8")
  ) {
    phoneDigits = phoneDigits.slice(1);
  }

  if (phoneDigits.startsWith("8")) {
    phoneDigits = `7${phoneDigits.slice(1)}`;
  }

  if (phoneDigits.startsWith("7")) {
    phoneDigits = phoneDigits.slice(1);
  }

  return phoneDigits.slice(0, 10);
}

export function formatRussianPhone(value: string) {
  const digits = normalizePhoneDigits(value);
  const area = digits.slice(0, 3);
  const prefix = digits.slice(3, 6);
  const firstPair = digits.slice(6, 8);
  const secondPair = digits.slice(8, 10);

  if (!digits) {
    return "+7 ";
  }

  let formatted = `+7 (${area}`;

  if (area.length === 3) {
    formatted += ")";
  }

  if (prefix) {
    formatted += ` ${prefix}`;
  }

  if (firstPair) {
    formatted += `-${firstPair}`;
  }

  if (secondPair) {
    formatted += `-${secondPair}`;
  }

  return formatted;
}

export function isRussianPhoneComplete(value: string) {
  return normalizePhoneDigits(value).length === 10;
}
