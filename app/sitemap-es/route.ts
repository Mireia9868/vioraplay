import { assertLocale, renderSitemap } from "@/lib/sitemap-render";

export const dynamic = "force-static";

/** Per-locale sitemap. See lib/sitemap-render.ts for why this is split. */
export async function GET() {
  const locale = assertLocale("es");
  if (!locale) return new Response("Not found", { status: 404 });
  return renderSitemap(locale);
}
