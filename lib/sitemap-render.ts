import { routing, type Locale } from "@/i18n/routing";
import { buildLocaleSitemap } from "@/app/sitemap";

/**
 * Shared renderer for the per-locale sitemaps.
 *
 * WHY ONE FILE PER LOCALE, NOT app/sitemap-[locale]/route.ts
 * A folder literally named `sitemap-[locale]` collides with the sibling
 * `app/sitemap.ts`: Next resolves both to /sitemap, and its generated
 * route-type validator then fails to infer the dynamic param. Explicit
 * `sitemap-en/route.ts` files avoid that entirely — no collision, no regex
 * rewrite, and each locale is statically analyzable.
 *
 * URLs therefore live at /sitemap-en.xml etc. via the sibling route files.
 * Split rationale and sizing are documented in app/sitemap.ts.
 */

export function xmlEscape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function assertLocale(locale: string): Locale | null {
  return routing.locales.includes(locale as Locale) ? (locale as Locale) : null;
}

export function renderSitemap(locale: Locale): Response {
  const entries = buildLocaleSitemap(locale);

  const urls = entries
    .map((entry) => {
      const links = Object.entries(entry.alternates?.languages ?? {})
        .map(
          ([lang, href]) =>
            `    <xhtml:link rel="alternate" hreflang="${xmlEscape(lang)}" href="${xmlEscape(
              String(href)
            )}"/>`
        )
        .join("\n");

      const lastModified = entry.lastModified
        ? new Date(entry.lastModified).toISOString()
        : new Date().toISOString();

      return [
        "  <url>",
        `    <loc>${xmlEscape(entry.url)}</loc>`,
        links,
        `    <lastmod>${lastModified}</lastmod>`,
        `    <changefreq>${entry.changeFrequency}</changefreq>`,
        `    <priority>${entry.priority}</priority>`,
        "  </url>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
