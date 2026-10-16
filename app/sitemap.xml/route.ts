import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/seo";
import { xmlEscape } from "@/lib/sitemap-render";

export const dynamic = "force-static";

export function GET() {
  const children = routing.locales.map(locale =>
    `  <sitemap><loc>${xmlEscape(`${SITE_URL}/sitemap-${locale}`)}</loc></sitemap>`
  ).join("\n");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${children}
</sitemapindex>\n`, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
