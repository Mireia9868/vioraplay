import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

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
    "/((?!api|_next|_vercel|sitemap-en|sitemap-id|sitemap-pt|sitemap-tr|sitemap-vi|robots\\.txt|sitemap\\.xml|llms\\.txt|.*\\..*).*)",
  ],
};
