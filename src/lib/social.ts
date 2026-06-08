export function hasUrl(url?: string) {
  return Boolean(url?.trim());
}

/** Digits only — e.g. 919746807689 for India (+91 9746807689) */
export function getWhatsAppUrl(number?: string) {
  if (!hasUrl(number)) return null;
  const digits = number!.replace(/\D/g, "");
  return `https://wa.me/${digits}`;
}
