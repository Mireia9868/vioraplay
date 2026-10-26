import type { MetadataRoute } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { getAllGames, getCategories } from "@/lib/games";
import { FEATURED_SLUGS } from "@/data/game-content";
import { SITE_URL } from "@/lib/seo";
import { isCategoryIndexable, isGameIndexable, indexableGameLocales } from "@/lib/indexability";
import { GUIDES, isGuideIndexable } from "@/lib/guides";

/**
 * Per-language URL sets; the sitemap index is served by app/sitemap.xml/route.ts.
 *
 * Hard rule: this file may only submit URLs that serve `index, follow`.
 * `isGameIndexable` / `isCategoryIndexable` / `isGuideIndexable` are the same
 * predicates the pages use in `generateMetadata`, so the two cannot drift again.
 * Before this change the file submitted every game in the catalog (~12,350 URLs)
 * while ~88% of those pages answered `noindex` — a self-contradicting sitemap.
 */
export function buildLocaleSitemap(locale: Locale): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];
  const featured = new Set(FEATURED_SLUGS);

  const alts = (path: string, available: readonly Locale[] = routing.locales) => ({
    languages: {
      ...Object.fromEntries(
        available.map((l) => [l, `${SITE_URL}/${l}${path}`])
      ),
      "x-default": `${SITE_URL}/${routing.defaultLocale}${path}`,
    },
  });

  urls.push({
    url: `${SITE_URL}/${locale}`,
    changeFrequency: "daily",
    priority: 1,
    alternates: alts(""),
  });

  urls.push({
    url: `${SITE_URL}/${locale}/categories`,
    changeFrequency: "weekly",
    priority: 0.8,
    alternates: alts("/categories"),
  });

  // Trust pages: indexable, linked from the footer, and the first URLs an
  // AdSense reviewer opens. Submit them so Search Console reports match.
  for (const info of ["about", "contact", "privacy", "terms"] as const) {
    urls.push({
      url: `${SITE_URL}/${locale}/${info}`,
      changeFrequency: "yearly",
      priority: 0.4,
      alternates: alts(`/${info}`),
    });
  }

  // /search stays out: the page is noindex, and every ?q= variant would
  // otherwise be submitted here.
  // Data study: a linkable asset, English only.
  if (locale === "en") {
    urls.push({
      url: `${SITE_URL}/en/research/browser-games-2026`,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  if (locale === "en") {
    urls.push({
      url: `${SITE_URL}/en/press`,
      changeFrequency: "yearly",
      priority: 0.4,
    });
  }

  if (isGuideIndexable(locale)) {
    urls.push({
      url: `${SITE_URL}/${locale}/guides`,
      changeFrequency: "monthly",
      priority: 0.7,
    });
    for (const guide of GUIDES) {
      urls.push({
        url: `${SITE_URL}/${locale}/guides/${guide.slug}`,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  /**
   * Thin categories are excluded, matching the noindex on the category page.
   * Submitting noindex URLs wastes crawl budget and contradicts the directive
   * we serve. See isCategoryIndexable in lib/indexability.ts.
   */
  for (const c of getCategories()) {
    if (!isCategoryIndexable(locale, c.slug, c.count)) continue;
    urls.push({
      url: `${SITE_URL}/${locale}/category/${c.slug}`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: alts(
        `/category/${c.slug}`,
        routing.locales.filter((l) => isCategoryIndexable(l, c.slug, c.count))
      ),
    });
  }

  for (const g of getAllGames()) {
    if (!isGameIndexable(locale, g.slug)) continue;
    const isFeatured = featured.has(g.slug);
    urls.push({
      url: `${SITE_URL}/${locale}/game/${g.slug}`,
      changeFrequency: isFeatured ? "weekly" : "monthly",
      // Curated tiles get crawl priority; the scraped long tail stays lower so
      // crawl budget flows to pages we actually stand behind.
      priority: isFeatured ? 0.9 : 0.6,
      alternates: alts(`/game/${g.slug}`, indexableGameLocales(routing.locales, g.slug)),
    });
  }

  return urls;
}
