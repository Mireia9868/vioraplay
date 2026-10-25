/**
 * The single list of English guides.
 *
 * Why a shared module: the sitemap and the guides index previously kept
 * separate hand-written lists, and the sitemap only ever knew about the gomoku
 * guide. That is the classic "publish a page, forget to submit it" drift. Add a
 * guide to `app/[locale]/guides/<slug>/page.tsx` and register it here; the
 * index, the sitemap and the internal links all follow.
 *
 * Guides are English-only today: every other locale 404s by design, so the
 * sitemap must only submit `/en/guides/...`.
 */
export type Guide = {
  slug: string;
  /** Index-card title, deliberately shorter than the page <title>. */
  title: string;
  blurb: string;
  /** Category the reader can play in, used for the "play" link. */
  cat: string;
  catName: string;
};

export const GUIDES: readonly Guide[] = [
  {
    slug: "how-to-play-sudoku",
    title: "How to Play Sudoku",
    blurb: "Grid logic rules, elimination techniques, and a beginner solving routine.",
    cat: "/category/sudoku",
    catName: "Sudoku Games",
  },
  {
    slug: "how-to-play-chess",
    title: "How to Play Chess",
    blurb: "Piece moves, checkmate, opening principles, and first tactics to learn.",
    cat: "/category/chess",
    catName: "Chess Games",
  },
  {
    slug: "how-to-play-gomoku",
    title: "How to Play Gomoku",
    blurb: "Five-in-a-row rules, opening shapes, and the tactics that decide close games.",
    cat: "/category/puzzle",
    catName: "Puzzle Games",
  },
  {
    slug: "how-to-play-mahjong",
    title: "How to Play Mahjong Solitaire",
    blurb: "Tile-matching rules, which tiles are free, and a plan to clear the board.",
    cat: "/category/mahjong",
    catName: "Mahjong Games",
  },
  {
    slug: "how-to-play-bubble-shooter",
    title: "How to Play Bubble Shooter",
    blurb: "Aiming, banking shots off walls, and building combo pops.",
    cat: "/category/bubble-shooter",
    catName: "Bubble Shooter Games",
  },
  {
    slug: "how-to-play-tower-defense",
    title: "How to Play Tower Defense",
    blurb: "Where to place towers, economy, and wave-management basics.",
    cat: "/category/tower-defense",
    catName: "Tower Defense Games",
  },
  {
    slug: "merge-and-sort-puzzle-guide",
    title: "Merge & Sort Puzzle Guide",
    blurb: "How merge and color-sort puzzles work, and a routine that avoids soft locks.",
    cat: "/category/merge",
    catName: "Merge Games",
  },
  {
    slug: "how-to-play-snake",
    title: "How to Play Snake",
    blurb: "Controls, safe-space rules, and how to grow without trapping yourself.",
    cat: "/category/snake",
    catName: "Snake Games",
  },
];

export const GUIDE_SLUGS: readonly string[] = GUIDES.map((g) => g.slug);

/** Guides are English-only; every other locale is noindexed and absent from sitemaps. */
export function isGuideIndexable(locale: string): boolean {
  return locale === "en";
}
