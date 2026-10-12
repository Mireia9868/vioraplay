import { displayCategory } from "./category-labels";
import gamesData from "@/data/games.json";
import { GAME_CONTENT, FEATURED_SLUGS } from "@/data/game-content";
import type { Game, Category } from "./types";

export const PER_PAGE = 48;

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Title-case a raw feed genre ("puzzle" -> "Puzzle") for headings/titles.
 * Slugs are unaffected (slugify lowercases anyway).
 */
export { displayCategory } from "./category-labels";

/** Full display name for a category, e.g. "puzzle" -> "Puzzle Games". */
export function categoryFullName(raw: string): string {
  return `${displayCategory(raw)} Games`;
}

export function getAllGames(): Game[] {
  return gamesData as Game[];
}

export function getGameBySlug(slug: string): Game | undefined {
  return getAllGames().find((g) => g.slug === slug);
}

export function getCategories(): Category[] {
  const map = new Map<string, number>();
  for (const g of getAllGames()) {
    map.set(g.category, (map.get(g.category) ?? 0) + 1);
  }
  return Array.from(map.entries())
    .map(([name, count]) => ({
      slug: slugify(name),
      name: displayCategory(name),
      fullName: categoryFullName(name),
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return getCategories().find((c) => c.slug === slug);
}

export function getGamesByCategory(categorySlug: string): Game[] {
  return getAllGames().filter((g) => slugify(g.category) === categorySlug);
}

/** Map a raw category to implied tags so UNTAGGED games still match related
 * games by category; curated games also contribute explicit gameplay tags. */
function categoryTags(category: string): string[] {
  const c = category.toLowerCase();
  const map: Record<string, string[]> = {
    "two-player": ["two-player"],
    chess: ["chess", "board", "strategy"],
    "tower-defense": ["tower-defense", "strategy", "defense"],
    "bubble-shooter": ["bubble", "shooter"],
    bubble: ["bubble"],
    sudoku: ["sudoku", "logic", "puzzle"],
    solitaire: ["solitaire", "cards"],
    cards: ["cards"],
    racing: ["racing", "driving"],
    driving: ["driving", "car"],
    car: ["car", "driving"],
    "io": ["io", "multiplayer"],
    multiplayer: ["multiplayer"],
    merge: ["merge", "puzzle"],
    puzzle: ["puzzle"],
    "match-3": ["match", "puzzle"],
    snake: ["snake", "arcade"],
    arcade: ["arcade"],
    fashion: ["fashion", "dress-up"],
    "dress-up": ["dress-up", "fashion"],
    girls: ["girls", "dress-up"],
    words: ["words"],
    music: ["music"],
    simulation: ["simulation"],
    ragdoll: ["ragdoll", "sandbox"],
    action: ["action"],
    sniper: ["sniper", "shooting"],
    shooter: ["shooter"],
    runner: ["runner", "skill"],
    skill: ["skill"],
  };
  return map[c] ?? [c];
}

/**
 * Supplier tags are noisy: they mix engine/platform tokens
 * ("unity-games-online", "android-games") with "-games"/"-games-online"
 * boilerplate. Normalise to a clean gameplay token, or null if pure noise.
 * Kept deliberately conservative: we only DROP clearly non-gameplay tokens.
 */
const TAG_NOISE =
  /(^|-)(unity|webgl|html5|flash|construct|godot|cocos|gamemaker|defold|gdevelop|gam-supported|android|iphone|ios|desktop|mobile|touchscreen|browser|borwser|no-download)(-|$)/;

/** Boilerplate tokens that carry no discriminating gameplay signal on their own. */
const GENERIC_TAGS = new Set([
  "1-player",
  "casual",
  "addictive",
  "relaxing",
  "cute",
  "simple",
  "funny",
  "popular",
  "cool",
  "fast-paced",
  "challenge",
  "agility",
  "reaction",
  "endless",
  "speed",
  "mini",
  "2d",
  "3d",
]);

function normalizeSupplierTag(t: string): string | null {
  const s = t
    .toLowerCase()
    .replace(/-games-online$/, "")
    .replace(/-games$/, "")
    .replace(/-online$/, "")
    .trim();
  if (!s) return null;
  if (TAG_NOISE.test(s)) return null;
  if (GENERIC_TAGS.has(s)) return null;
  return s;
}

function tagSetFor(game: Game): Set<string> {
  const tags = new Set<string>();
  // 1) Curated gameplay tags for the hand-written key games — highest quality.
  (GAME_CONTENT[game.slug]?.tags ?? []).forEach((t) => tags.add(t));
  // 2) Supplier genres — clean gameplay dimensions (puzzle/arcade/strategy/…).
  (game.genres ?? []).forEach((t) => tags.add(t.toLowerCase()));
  // 3) Supplier tags — denoised, weak-but-broad signal (~98% coverage).
  (game.tags ?? []).forEach((t) => {
    const n = normalizeSupplierTag(t);
    if (n) tags.add(n);
  });
  // 4) Hand map so games WITHOUT supplier genres still cluster by category.
  categoryTags(game.category).forEach((t) => tags.add(t));
  // 5) Title hints for families the broad feed categories miss.
  //    A game with "chess" in its name is not automatically classic chess.
  if (/\bchess\b/i.test(game.title) && game.slug !== "moon-chess") tags.add("chess");
  if (/\bsudoku\b/i.test(game.title)) tags.add("sudoku");
  if (/\bmahjong\b/i.test(game.title)) tags.add("mahjong");
  if (/\bsolitaire\b/i.test(game.title)) tags.add("solitaire");
  return tags;
}

/** Supplier platform labels → short display names. */
const DEVICE_LABEL: Record<string, string> = {
  "For Desktop": "Desktop & Web",
  "For Android": "Android",
  "For IOS": "iOS",
  "For iOS": "iOS",
};

/** Supplier-confirmed platforms for a game (used for the on-site device line). */
export function getGameDevices(game: Game): string[] {
  const out: string[] = [];
  for (const d of game.mobileReady ?? []) {
    const label = DEVICE_LABEL[d] ?? d.replace(/^For\s+/i, "");
    if (label && !out.includes(label)) out.push(label);
  }
  return out;
}

/** Supplier "how to play" line, if any (authorised supplier content). */
export function getGameHowToPlay(game: Game): string {
  return (game.howToPlay ?? "").trim();
}

/**
 * Curated homepage "Featured Games" — hand-picked, NOT a popularity ranking
 * (the catalog has no real play-count data, so we never fake "Top/Hot").
 */
export function getFeaturedGames(limit = 12): Game[] {
  const bySlug = new Map(getAllGames().map((g) => [g.slug, g]));
  return FEATURED_SLUGS.map((s) => bySlug.get(s))
    .filter((g): g is Game => Boolean(g))
    .slice(0, limit);
}

/**
 * Related games: prioritize shared gameplay tags, then same category.
 * Excludes the current game, duplicates, and only live catalog entries
 * (delisted games are never recommended).
 */
export function getRelatedGames(game: Game, limit = 8): Game[] {
  const baseTags = tagSetFor(game);
  const others = getAllGames().filter((g) => g.slug !== game.slug);

  const scored = others
    .map((g) => {
      const tags = tagSetFor(g);
      let score = 0;
      baseTags.forEach((t) => {
        if (tags.has(t)) score += ["chess", "sudoku", "mahjong", "solitaire", "tower-defense", "bubble"].includes(t) ? 20 : 1;
      });
      if (g.category === game.category) score += 0.5;
      return { g, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  const picked: Game[] = [];
  const seen = new Set<string>();
  for (const { g } of scored) {
    if (picked.length >= limit) break;
    if (seen.has(g.slug)) continue;
    seen.add(g.slug);
    picked.push(g);
  }

  // Fill remaining slots with same-category games if under the limit.
  if (picked.length < limit) {
    for (const g of others) {
      if (picked.length >= limit) break;
      if (g.category !== game.category) continue;
      if (seen.has(g.slug)) continue;
      seen.add(g.slug);
      picked.push(g);
    }
  }

  return picked;
}

/** Short, accurate one-line intro for a category. No invented stats. */
const CATEGORY_INTRO: Record<string, string> = {
  puzzle: "Puzzle games that train logic and pattern recognition — match, sort, and solve at your own pace.",
  "bubble-shooter": "Aim and connect colored bubbles to clear the board in satisfying chain reactions.",
  chess: "Classic chess boards to play against the computer or other people, turn by turn.",
  sudoku: "Number-logic puzzles to fill the grid by deduction, from quick to expert.",
  solitaire: "Single-player card games built around sequencing and patience.",
  "tower-defense": "Place and upgrade defenses to stop waves of enemies before they break through.",
  racing: "High-speed racing and driving challenges across tracks and open roads.",
  driving: "Car and vehicle driving games, from lap races to crash sandboxes.",
  merge: "Drop and combine matching items to build bigger, rarer objects.",
  "two-player": "Games designed for head-to-head play against another person or the computer.",
  fashion: "Dress-up and styling games for designing looks with clothes and accessories.",
  "dress-up": "Dress-up and styling games for designing looks with clothes and accessories.",
  girls: "Casual styling, caring, and creativity games popular with younger players.",
  words: "Word and crossword puzzles that test vocabulary and spelling.",
  music: "Make beats and experiment with sound in playful music toys.",
  snake: "Guide a growing snake to collect items without crossing itself.",
  io: "Lightweight multiplayer and arena games you can jump into instantly.",
  action: "Fast reaction games with targets, obstacles, and quick decisions.",
  shooting: "Aim-and-fire games focused on accuracy and timing.",
  simulation: "Sandbox and simulation games that mimic real-world systems.",
};

export function getCategoryIntro(slug: string, fallbackName: string): string {
  return (
    CATEGORY_INTRO[slug] ??
    `Play a curated set of ${fallbackName} online — no download, no install, free in your browser.`
  );
}

/** A few other categories (by count) to cross-link from a category page. */
export function getRelatedCategories(slug: string, limit = 6): Category[] {
  return getCategories()
    .filter((c) => c.slug !== slug)
    .slice(0, limit);
}

export function searchGames(query: string): Game[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return getAllGames().filter(
    (g) =>
      g.title.toLowerCase().includes(q) || g.category.toLowerCase().includes(q)
  );
}

