/**
 * Per-game title/description overrides, English only.
 *
 * Why this exists: Search Console showed pages ranking well but earning almost
 * no clicks. The cause was intent mismatch — e.g. `/game/car-wash-idle` ranked
 * for "wash arcade" while its title never mentioned arcade, and
 * `/game/numicolor` ranked for "numi color" but was titled only "Numicolor".
 *
 * Keep overrides narrow and evidence-based: each entry below corresponds to a
 * query the page already ranks for. Do not rewrite every game.
 */
export type GameSeoOverride = {
  title?: string;
  description?: string;
};

export const GAME_SEO_OVERRIDES: Record<string, GameSeoOverride> = {
  "rivals-fps-online-shooter": {
    title: "RIVALS FPS: Browser FPS Games — Play Free Online | VioraPlay",
    description:
      "Play RIVALS FPS in your browser: a 5v5 online shooter with no download and no install. Jump into a match in seconds and climb the ranks.",
  },
  "numicolor": {
    title: "Numi Color (Numicolor) — Free Colour Puzzle | VioraPlay",
    description:
      "Play Numi Color online: a calm colour puzzle where you fill each shape with the right hue. Free in your browser, no download or install.",
  },
  "chess-royale": {
    title: "Chess Royale Online — Chess with Magical King Powers | VioraPlay",
    description:
      "Play Chess Royale online: standard chess moves plus king powers that change every trade. Free in your browser, no download or install.",
  },
  "car-wash-idle": {
    title: "Car Wash Idle — Car Wash Arcade Game | VioraPlay",
    description:
      "Play Car Wash Idle: build a car wash arcade, clean muddy cars and upgrade your bays. Free browser game, no download or install.",
  },
};
