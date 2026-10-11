import type { MetadataRoute } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { getAllGames, getCategories } from "@/lib/games";
import { FEATURED_SLUGS } from "@/data/game-content";
import { SITE_URL } from "@/lib/seo";

/**
 * Index of sitemap files. The actual URLs live in sitemap-<locale>.xml.
 *
 * WHY A SITEMAP INDEX
 * One combined sitemap expanded every URL with 6 xhtml:link hreflang entries:
 * 12,870 URLs → 141,573 lines → 8.7 MB. Past the size where crawlers reliably
 * fetch the whole file, and oversized sitemaps cannot be processed
 * incrementally — the fetch either succeeds entirely or fails entirely. A
 * sitemap that times out is functionally no sitemap.
 *
 * Per locale it is ~2,574 URLs / ~1.7 MB, which is comfortably fetchable and
 * lets Google process languages independently instead of re-reading one giant
 * file every time a single game is added.
 *
 * hreflang is kept because it is what stops the 5 language versions competing
 * with each other, and x-default points at the default locale.
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routing.locales.map((locale) => ({
    url: `${SITE_URL}/sitemap-${locale}`,
    lastModified,
    changeFrequency: "daily" as const,
    priority: locale === routing.defaultLocale ? 1 : 0.9,
  }));
}

/**
 * Shared builder used by app/sitemap-[locale]/route.ts. Exported from here so
 * the index and the per-locale files cannot drift apart.
 */
export function buildLocaleSitemap(locale: Locale): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];
  const lastModified = new Date();
  const featured = new Set(FEATURED_SLUGS);

  const alts = (path: string) => ({
    languages: {
      ...Object.fromEntries(
        routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`])
      ),
      "x-default": `${SITE_URL}/${routing.defaultLocale}${path}`,
    },
  });

  urls.push({
    url: `${SITE_URL}/${locale}`,
    lastModified,
    changeFrequency: "daily",
    priority: 1,
    alternates: alts(""),
  });

  urls.push({
    url: `${SITE_URL}/${locale}/categories`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
    alternates: alts("/categories"),
  });

  // /search stays out: the page is noindex, and every ?q= variant would
  // otherwise be submitted here.

  for (const c of getCategories()) {
    urls.push({
      url: `${SITE_URL}/${locale}/category/${c.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: alts(`/category/${c.slug}`),
    });
  }

  for (const g of getAllGames()) {
    const isFeatured = featured.has(g.slug);
    urls.push({
      url: `${SITE_URL}/${locale}/game/${g.slug}`,
      lastModified,
      changeFrequency: isFeatured ? "weekly" : "monthly",
      // Curated tiles get crawl priority; the scraped long tail stays lower so
      // crawl budget flows to pages we actually stand behind.
      priority: isFeatured ? 0.9 : 0.6,
      alternates: alts(`/game/${g.slug}`),
    });
  }

  return urls;
}
