/**
 * One place that answers "should this URL be indexed?".
 *
 * Why this file exists: `generateMetadata` (what the page tells crawlers) and
 * `lib/sitemap-data.ts` (what we submit) used to carry two hand-copied versions
 * of the same rule. They drifted, and the sitemap ended up submitting ~12,000
 * URLs of which ~88% were noindex. AdSense reviewers read that as a catalogue
 * of empty pages, and Google wasted crawl budget re-fetching them.
 *
 * Rules, by URL type:
 * - Game: needs VioraPlay's own copy. English needs a `GAME_CONTENT` entry;
 *   a non-English locale also needs its own localized entry, because English
 *   text under `/pt/...` is duplicate content, not a Portuguese page.
 * - Category: needs at least MIN_INDEXABLE_GAMES games. The three new locales
 *   (es/pl/ar) are still rolling out, so only the puzzle landing page is live.
 * - Guide: English only (see lib/guides.ts).
 */
import { GAME_CONTENT } from "@/data/game-content";
import { REGIONAL_GAME_CONTENT } from "@/data/regional-game-content";
import { isNewLocale } from "@/data/regional-seo";

/** Kept in sync with the category page; below this a category is a thin stub. */
export const MIN_INDEXABLE_GAMES = 10;

/**
 * Escape hatch: set to true to index English fallback copy on non-English
 * locales again. Default false — one well-written page beats nine copies of it,
 * and AdSense's "low value content" flag is the risk we are removing.
 */
export const LOCALE_FALLBACK_INDEXABLE = false;

export function isGameIndexable(locale: string, slug: string): boolean {
  // A localized entry alone is not enough: the shared EN base is the source of
  // truth for gameplay facts, so we require both.
  if (!GAME_CONTENT[slug]) return false;
  if (isNewLocale(locale)) return Boolean(REGIONAL_GAME_CONTENT[locale]?.[slug]);
  if (locale === "en") return true;
  return LOCALE_FALLBACK_INDEXABLE || Boolean(REGIONAL_GAME_CONTENT[locale]?.[slug]);
}

export function isCategoryIndexable(locale: string, slug: string, count: number): boolean {
  // "Other" is Playgama's unclassified bucket, not a genre. A page of 63
  // unrelated games reads as a broken category to a reviewer and to Google.
  if (slug === "other") return false;
  if (count < MIN_INDEXABLE_GAMES) return false;
  if (isNewLocale(locale)) return slug === "puzzle";
  return true;
}

/** Locales whose game page for `slug` may be listed as an alternate of the EN page. */
export function indexableGameLocales<T extends string>(locales: readonly T[], slug: string): T[] {
  return locales.filter((l) => isGameIndexable(l, slug));
}
