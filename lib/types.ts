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
}

export interface Category {
  slug: string;
  name: string;
  count: number;
}
