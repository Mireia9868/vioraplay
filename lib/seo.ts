import { routing, type Locale } from "@/i18n/routing";

/**
 * Canonical site origin. Set NEXT_PUBLIC_SITE_URL in Vercel; the fallback keeps
 * local dev and the robots/sitemap route working before the env var exists.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vioraplay.com"
).replace(/\/+$/, "");

/**
 * Without this, Next.js resolves relative canonical/OG URLs against the
 * deployment URL (*.vercel.app), which would point hreflang at the wrong host.
 */
export const metadataBase = new URL(SITE_URL);

export function absUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Builds an hreflang map for one logical page across every locale, plus
 * x-default so Google knows which page to serve when no language matches.
 */
export function buildLanguageAlternates(
  pathFor: (locale: Locale) => string
): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = pathFor(locale);
  }
  languages["x-default"] = pathFor(routing.defaultLocale);
  return languages;
}

/**
 * Game descriptions in data/games.json are scraped, multi-paragraph blurbs
 * (median 485 chars, 95.6% over the ~155 char snippet budget). Google truncates
 * hard, so a long description wastes the whole snippet on a truncated,
 * mid-sentence fragment. Keep only the first block, then cut on a word boundary.
 */
export function truncateDescription(text: string | undefined, max = 155): string {
  const raw = (text ?? "").replace(/\s+/g, " ").trim();
  if (!raw) return "";

  // Drop the boilerplate tail ("Controls: Desktop: ... Mobile: ...").
  const withoutControls = raw.split(/\s*Controls:\s*/i)[0].trim() || raw;

  if (withoutControls.length <= max) return withoutControls;

  const clipped = withoutControls.slice(0, max);
  const lastSpace = clipped.lastIndexOf(" ");
  const body = lastSpace > 60 ? clipped.slice(0, lastSpace) : clipped;

  return `${body.replace(/[\s,.;:—–-]+$/, "")}…`;
}