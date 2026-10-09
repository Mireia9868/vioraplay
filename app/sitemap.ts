import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getAllGames, getCategories } from "@/lib/games";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vioraplay.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    urls.push({ url: `${BASE}/${locale}` });
    urls.push({ url: `${BASE}/${locale}/categories` });
    urls.push({ url: `${BASE}/${locale}/search` });

    for (const c of getCategories()) {
      urls.push({ url: `${BASE}/${locale}/category/${c.slug}` });
    }
    for (const g of getAllGames()) {
      urls.push({ url: `${BASE}/${locale}/game/${g.slug}` });
    }
  }

  return urls;
}
