import gamesData from "@/data/games.json";
import type { Game, Category } from "./types";

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
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
  return Array.from(map.entries()).map(([name, count]) => ({
    slug: slugify(name),
    name,
    count,
  }));
}

export function getGamesByCategory(categorySlug: string): Game[] {
  return getAllGames().filter((g) => slugify(g.category) === categorySlug);
}

export function getRelatedGames(game: Game, limit = 4): Game[] {
  return getAllGames()
    .filter((g) => g.category === game.category && g.slug !== game.slug)
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
