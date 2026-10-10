import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getAllGames, getCategories } from "@/lib/games";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    const alternates = {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${SITE_URL}/${l}`])
      ),
    };

    urls.push({
      url: `${SITE_URL}/${locale}`,
      changeFrequency: "daily",
      priority: 1,
      alternates,
    });
    urls.push({
      url: `${SITE_URL}/${locale}/categories`,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: Object.fromEntries(routing.locales.map(l => [l, `${SITE_URL}/${l}/categories`])) },
    });

    // /search is intentionally excluded: the page is noindex and every ?q=
    // variant would otherwise be submitted here.

    for (const c of getCategories()) {
      urls.push({
        url: `${SITE_URL}/${locale}/category/${c.slug}`,
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
      urls.push({
        url: `${SITE_URL}/${locale}/game/${g.slug}`,
        changeFrequency: "monthly",
        priority: 0.6,
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
