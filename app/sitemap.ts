import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getAllGames, getCategories } from "@/lib/games";
import { FEATURED_SLUGS } from "@/data/game-content";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];
  const lastModified = new Date();
  const featured = new Set(FEATURED_SLUGS);

  for (const locale of routing.locales) {
    const alternates = {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${SITE_URL}/${l}`])
      ),
    };

    urls.push({
      url: `${SITE_URL}/${locale}`,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
      alternates,
    });
    urls.push({
      url: `${SITE_URL}/${locale}/categories`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: Object.fromEntries(routing.locales.map(l => [l, `${SITE_URL}/${l}/categories`])) },
    });

    // /search is intentionally excluded: the page is noindex and every ?q=
    // variant would otherwise be submitted here.

    for (const c of getCategories()) {
      urls.push({
        url: `${SITE_URL}/${locale}/category/${c.slug}`,
        lastModified,
        changeFrequency: "weekly",
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [
              l,
              `${SITE_URL}/${l}/category/${c.slug}`,
            ])
          ),
        },
      });
    }

    for (const g of getAllGames()) {
      // Hand-curated tiles get crawl priority; the long tail stays at 0.6.
      const isFeatured = featured.has(g.slug);
      urls.push({
        url: `${SITE_URL}/${locale}/game/${g.slug}`,
        lastModified,
        changeFrequency: isFeatured ? "weekly" : "monthly",
        priority: isFeatured ? 0.9 : 0.6,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [
              l,
              `${SITE_URL}/${l}/game/${g.slug}`,
            ])
          ),
        },
      });
    }
  }

  return urls;
}
