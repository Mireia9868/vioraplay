import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

/**
 * Locale-less paths (`/category/hidden-object`) are redirected to `/en/...`.
 *
 * next-intl issues that redirect as 307 (temporary). Search Console kept both
 * URLs — the non-prefixed one and `/en/...` — as separate pages with separate
 * clicks, so link equity never consolidated. A 308 tells Google the move is
 * permanent. Cookies set by next-intl (NEXT_LOCALE) are copied across so the
 * visitor's language choice is not lost.
 */
export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  const location = response.headers.get("location");

  if (response.status === 307 && location) {
    const redirect = NextResponse.redirect(new URL(location, request.url), 308);
    const cookies =
      typeof response.headers.getSetCookie === "function"
        ? response.headers.getSetCookie()
        : [];
    for (const cookie of cookies) redirect.headers.append("set-cookie", cookie);
    return redirect;
  }

  return response;
}

export const config = {
  /**
   * Skip API, Next internals, and files with an extension.
   *
   * `sitemap-<locale>` MUST also be excluded. The extension-based rule below
   * only skips paths that contain a dot, so `/sitemap-en` was being treated as
   * a localized page and 307-redirected to `/en/sitemap-en`, which 404s. The
   * sitemap routes are served at the root and must not be locale-prefixed.
   */
  matcher: [
    "/((?!api|_next|_vercel|sitemap-en|sitemap-id|sitemap-pt|sitemap-tr|sitemap-vi|sitemap-es|sitemap-pl|sitemap-ar|robots\\.txt|sitemap\\.xml|llms\\.txt|.*\\..*).*)",
  ],
};
