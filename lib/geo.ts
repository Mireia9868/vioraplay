/**
 * Which visitors must be treated under EEA/UK consent rules.
 *
 * Why a separate list instead of "EU only": Google's certified CMP covers the
 * EEA (EU 27 + Iceland, Liechtenstein, Norway) plus the UK, because UK GDPR
 * mirrors the same requirements. Switzerland is intentionally excluded — it has
 * its own law and Google does not serve its CMP message there.
 */
const EEA_UK = [
  // EU 27
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR",
  "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL",
  "PL", "PT", "RO", "SK", "SI", "ES", "SE",
  // EEA (non-EU)
  "IS", "LI", "NO",
  // UK
  "GB",
] as const;

const EEA_SET = new Set<string>(EEA_UK);

/**
 * `cf-ipcountry` is added by Cloudflare in front of every request and reaches
 * the app through the Worker proxy. Unknown/absent values ("", "XX", "T1")
 * fall back to non-EEA, which keeps the analytics banner (the stricter path)
 * rather than silently dropping it.
 */
export function isEeaCountry(country: string | null | undefined): boolean {
  if (!country) return false;
  return EEA_SET.has(country.trim().toUpperCase());
}

export const EEA_COUNTRY_COUNT = EEA_UK.length;
