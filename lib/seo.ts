import { routing, type Locale } from "@/i18n/routing";

/**
 * Canonical site origin. Set NEXT_PUBLIC_SITE_URL in Vercel; the fallback keeps
 * local dev and the robots/sitemap route working before the env var exists.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vioraplay.com"
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
  pathFor: (locale: Locale) => string,
  locales: readonly Locale[] = routing.locales
): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
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

/**
 * The opening paragraph of a Playgama blurb, rendered in full on game pages.
 *
 * The raw strings are ~600 chars of opening copy followed by "Controls:",
 * "Key Features:", "Levels / Maps / Worlds:" and a long Q&A. Only the opening
 * is a genuine description; the rest either duplicates the upstream page
 * (already visible inside the iframe on the same screen) or is scannable QA
 * noise. Rendering the tail as page copy reads as keyword stuffing to a human
 * reviewer, and we never invent extra prose — the Google scaled-content-abuse
 * policy specifically covers text spun or generated to add value that isn't
 * there.
 *
 * Median opening is 437 chars across the 2,407-game catalog; 100% of entries
 * have one.
 */
const SECTION_SPLIT =
  /\s*(?=Controls:|Key Features:|Features:|Levels\s*\/\s*Maps|Story\s*\/\s*Setting:|Core Gameplay)/i;

export function supplierIntro(text: string | undefined, max = 900): string {
  const raw = (text ?? "").replace(/\s+/g, " ").trim();
  if (!raw) return "";

  const [first] = raw.split(SECTION_SPLIT);
  const intro = (first ?? "").replace(/\s+/g, " ").trim();
  if (!intro) return "";

  if (intro.length <= max) return intro;
  const clipped = intro.slice(0, max);
  const lastSpace = clipped.lastIndexOf(" ");
  const body = lastSpace > 120 ? clipped.slice(0, lastSpace) : clipped;
  return `${body.replace(/[\s,.;:—–-]+$/, "")}…`;
}
