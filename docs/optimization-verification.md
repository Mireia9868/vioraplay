# Portal optimization and verification

## Scope

- The game catalog, embeds, Playgama attribution parameters and supplier advertising remain intact.
- Integrated the transparent VioraPlay logo using Next Image; compacted the homepage to one search entry.
- Responsive header wraps, narrow cards use a two-column grid and minmax(0, 1fr); no wide pseudo-element backdrop.
- Favorite buttons are siblings of game links. A favorites section and recent visits use browser-local storage.
- Specific game families rank above broad categories; Master Chess receives eight chess recommendations.
- Corrected two curated-content slug mismatches so their introductions are actually used.
- Fullscreen includes the toolbar and an exit action. When the browser rejects fullscreen, an expanded overlay with exit action is offered. Reload remounts only the supplier iframe.
- Noindex/follow applies to category page 2 and later; each page has its own locale-aware canonical. Out-of-range pages return 404. Paginated URLs are not submitted in sitemap.
- Fixed the categories translation namespace, localized footer/controls/favorite labels, locale-aware breadcrumb URLs and categories sitemap alternates.
- Added factual About, Contact, Privacy and Terms pages. Set NEXT_PUBLIC_CONTACT_EMAIL to offer an email contact instead of the public issue tracker.
- Trimmed client display props, drained early analytics events, and guarded duplicate game-view effects. Iframe load remains separate from confirmed gameplay.

## Repeatable checks

Run `npm run build` followed by `npm run verify`.

The verification script checks catalog recommendations, live curated entries, labels, all five language dictionaries, local storage add/remove/deduplication/limits, and the built production request handler in process (without a preview server).

Server-response checks cover one homepage search, trimmed homepage payload, all five locales' category pagination/canonical/noindex/direct refresh, breadcrumbs, game introduction, footer pages, 404 responses, and sitemap/robots.

## Verification limits

- These are server and data checks, not browser layout tests.
- Real browser checks remain required at 360/390/430px mobile widths and 1366px desktop width: no horizontal scrolling or clipping, favorite clicks without navigation, persistence after refresh, fullscreen/exit or fallback, and reload.
- Native fullscreen on iOS and supplier gameplay are not inferred from iframe load.
- Search Console is required to confirm Google's actual index state after recrawling noindex pages.
- No measured Lighthouse or Core Web Vitals scores are claimed.

## Deployment

The existing repository homepage points to Vercel. Updating main can trigger its existing integration; GitHub commit/deployment statuses should be checked before claiming a successful deployment.
