import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Crawling stays open so search and paginated URLs can surface their
        // own noindex. Blocking these would hide the directive from the crawler
        // that needs to read it.
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

/**
 * Sitemaps live at /sitemap.xml (index) plus one file per locale.
 * Listed here as well because some crawlers read robots.txt before touching
 * the index.
 */
export function sitemapIndexUrls(): string[] {
  return [
    `${SITE_URL}/sitemap.xml`,
    ...routing.locales.map((l) => `${SITE_URL}/sitemap-${l}.xml`),
  ];
}
