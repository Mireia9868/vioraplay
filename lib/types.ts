export interface Game {
  id: string;
  slug: string;
  title: string;
  category: string;
  thumb: string;
  embed: string;
  description: string;
  plays?: number;
  rating?: number;
  // --- Supplier metadata from the Playgama catalog export (optional: older
  //     data files may lack these, so every consumer must treat them as
  //     possibly-undefined and fall back gracefully). ---
  /** All gameplay genres, e.g. ["cozy","puzzle","merge","cooking"]. */
  genres?: string[];
  /** Raw supplier tags, e.g. ["relaxing-games","bakery-games"] — noisy, denoise before use. */
  tags?: string[];
  /** Supplier "how to play" line, e.g. "Use mouse or touch to navigate." */
  howToPlay?: string;
  /** Devices the supplier says it runs on: ["For Android","For IOS","For Desktop"]. */
  mobileReady?: string[];
  /** Supported languages, e.g. ["en-US"]. */
  languages?: string[];
  /** Supplier screenOrientation, e.g. "portrait" | "landscape" | "both". */
  orientation?: string;
  /** Supplier inGamePurchases flag. */
  iap?: boolean;
}

export interface Category {
  slug: string;
  name: string;
  fullName: string;
  count: number;
}
