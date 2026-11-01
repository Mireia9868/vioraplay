# Collections automation (Bing long-tail)

Five English collection pages target long-tail queries that Bing can rank faster
than Google:

| Slug | Target intent |
|---|---|
| `free-hidden-object-games` | free hidden object games no download |
| `2-player-games` | 2 player games online free |
| `brainrot-games` | brainrot games online |
| `car-games` | free car games online |
| `free-racing-games` | free racing games online |

## Files

- `data/collections.config.json` — titles, intros, filters, limits, FAQs.
- `scripts/build-collections.mjs` — regenerates `data/collections.generated.ts`
  from the catalogue, curated games first.
- `app/[locale]/collections/[slug]/page.tsx` — English-only page, 404 elsewhere.
- `lib/sitemap-data.ts` — collection URLs added to the English sitemap.

## Commands

```bash
npm run collections:build     # refresh game lists after curating new games
npm run seo:cycle             # collections build + IndexNow + Bing submit (if key)
```

`seo:cycle` skips Bing when `BING_API_KEY` is not set; IndexNow still runs.

## Adding a collection

1. Add an entry to `data/collections.config.json` (slug, title, h1,
   description, intro, filter, limit, faq, playHref, optional guide).
2. `npm run collections:build`
3. Commit and deploy; the page and sitemap entry are generated automatically.
4. `npm run seo:cycle` to notify IndexNow/Bing.
