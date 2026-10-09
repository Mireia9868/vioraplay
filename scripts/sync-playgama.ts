/**
 * Sync the Playgama game catalog into data/games.json.
 *
 * WHY THIS APPROACH (verified against Playgama's official partner wiki + a real
 * exported catalog):
 *  - Playgama does NOT document a public REST "export-list" API. The supported
 *    bulk method is: log in to widgets.playgama.com → browse catalog →
 *    "Download the full game catalog as a JSON file". Because you are logged in,
 *    your unique clid is auto-embedded in every gameURL, so revenue is attributed
 *    without manual per-game work.
 *  - The exported file is shaped as:
 *      { "input": {...}, "sort": {...}, "segments": [ { "title", "count", "hits": [ <game>, ... ] } ] }
 *    (sometimes a single "Specially for you" segment, sometimes several). We
 *    flatten every segment's `hits` and dedupe by slug.
 *  - Each game's real embed target is in `gameURL`, e.g.
 *      https://playgama.com/export/game/piece-of-cake-merge--bake?clid=p_xxxx
 *    We render that inside an <iframe> on OUR domain, so the surrounding page
 *    (title/description/VideoGame JSON-LD) is indexable — this is what makes the
 *    SEO/GEO strategy work (vs. the Widget mode, which renders on their domain).
 *
 * YOU DO NOT NEED TO COPY LINKS ONE BY ONE. One dashboard download = the whole
 * catalog. This script just reshapes it for our schema.
 *
 * STEPS:
 *  1. Log in to widgets.playgama.com
 *  2. Download the catalog JSON (whole collection, or a filtered selection)
 *  3. Save it as data/playgama-catalog.json
 *  4. Run:  PLAYGAMA_CLID=your_clid npx tsx scripts/sync-playgama.ts
 *           (clid is optional — if the file already carries it in gameURL,
 *            attribution works without setting it; we just force-inject as backup)
 */
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const CLID = process.env.PLAYGAMA_CLID;
const SRC = fileURLToPath(new URL("../data/playgama-catalog.json", import.meta.url));
const OUT = fileURLToPath(new URL("../data/games.json", import.meta.url));

/** Defensive field reader — Playgama's JSON shape may vary by export. */
function str(v: unknown, fallback = ""): string {
  if (typeof v === "string") return v;
  if (typeof v === "number") return String(v);
  return fallback;
}

/** First element of an array as a string, else "". */
function firstStr(v: unknown): string {
  if (Array.isArray(v)) {
    for (const x of v) if (typeof x === "string" && x) return x;
  }
  return "";
}

function ensureClid(url: string): string {
  if (!CLID) return url;
  if (/[?&]clid=/.test(url)) return url;
  return url + (url.includes("?") ? "&" : "?") + `clid=${CLID}`;
}

function slugFromUrl(url: string, fallback: string): string {
  const m = url.match(/\/export\/game\/([^/?#]+)/);
  return m ? m[1] : fallback;
}

interface RawGame {
  id?: unknown;
  slug?: unknown;
  title?: unknown;
  name?: unknown;
  description?: unknown;
  howToPlayText?: unknown;
  gameURL?: unknown;
  url?: unknown;
  embed?: unknown;
  genre?: unknown;
  category?: unknown;
  categories?: unknown;
  genres?: unknown;
  tags?: unknown;
  images?: unknown;
  image?: unknown;
  thumb?: unknown;
  thumbnail?: unknown;
  plays?: unknown;
  playsCount?: unknown;
  rating?: unknown;
}

function firstImage(v: unknown): string {
  if (typeof v === "string") return v;
  if (Array.isArray(v)) {
    for (const x of v) {
      if (typeof x === "string" && x) return x;
      if (x && typeof x === "object") {
        const o = x as Record<string, unknown>;
        const u = str(o.url ?? o.src ?? o.thumbnail ?? o.image);
        if (u) return u;
      }
    }
  }
  if (v && typeof v === "object") {
    const o = v as Record<string, unknown>;
    return str(o.url ?? o.src ?? o.thumbnail ?? o.image);
  }
  return "";
}

/** Flatten whatever shape Playgama exported into a plain game array. */
function extractGames(parsed: unknown): RawGame[] {
  if (Array.isArray(parsed)) return parsed as RawGame[];
  if (parsed && typeof parsed === "object") {
    const o = parsed as Record<string, unknown>;
    if (Array.isArray(o.games)) return o.games as RawGame[];
    if (Array.isArray(o.data)) return o.data as RawGame[];
    if (Array.isArray(o.segments)) {
      const hits: RawGame[] = [];
      for (const seg of o.segments as Array<Record<string, unknown>>) {
        if (Array.isArray(seg.hits)) hits.push(...(seg.hits as RawGame[]));
      }
      return hits;
    }
  }
  return [];
}

async function main() {
  if (!CLID) {
    console.warn(
      "[warn] PLAYGAMA_CLID not set — relying on clid already embedded in gameURLs.\n" +
        "       If any gameURL lacks clid, its revenue won't be attributed. Set the env to force-inject."
    );
  }

  let raw: RawGame[];
  try {
    const text = await readFile(SRC, "utf8");
    raw = extractGames(JSON.parse(text));
  } catch (e) {
    console.error(
      `Cannot read ${SRC}.\n` +
        `Download the catalog JSON from widgets.playgama.com (logged in) and save it there.\n` +
        `Underlying error: ${(e as Error).message}`
    );
    process.exit(1);
  }

  if (!raw.length) {
    console.error("Catalog file is empty or has an unexpected shape (no games/hits found).");
    process.exit(1);
  }

  const seen = new Set<string>();
  const mapped: Record<string, unknown>[] = [];
  let skipped = 0;

  for (let i = 0; i < raw.length; i++) {
    const g = raw[i];
    const url =
      str(g.gameURL ?? g.url) ||
      (typeof g.embed === "string" ? (g.embed.match(/src='([^']+)'/) ?? g.embed.match(/src="([^"]+)"/))?.[1] ?? "" : "");
    if (!url) {
      skipped++;
      continue;
    }
    const slugBase = str(g.slug, slugFromUrl(url, `game-${i}`));
    const slug = slugBase || slugFromUrl(url, `game-${i}`);
    if (seen.has(slug)) continue; // dedupe across segments
    seen.add(slug);

    const category =
      firstStr(g.genres) ||
      str(g.genre) ||
      str(g.category) ||
      (Array.isArray(g.categories) ? firstStr(g.categories) : "") ||
      "Other";

    mapped.push({
      id: str(g.id, slug),
      slug,
      title: str(g.title ?? g.name, slug),
      category,
      thumb: firstImage(g.images ?? g.image ?? g.thumb ?? g.thumbnail),
      embed: ensureClid(url),
      description: str(g.description ?? g.howToPlayText),
      plays: typeof g.plays === "number" ? g.plays : typeof g.playsCount === "number" ? g.playsCount : undefined,
      rating: typeof g.rating === "number" ? g.rating : undefined,
    });
  }

  await writeFile(OUT, JSON.stringify(mapped, null, 2));
  console.log(
    `Wrote ${mapped.length} games → ${OUT}  (skipped ${skipped} without URL, deduped ${raw.length - mapped.length - skipped})`
  );
  console.log(`clid attribution: ${CLID ? "forced (" + CLID + ")" : "from gameURL (embedded at download)"}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
