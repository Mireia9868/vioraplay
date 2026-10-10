import type { Game } from "@/lib/types";
import { GameCardClient } from "./GameCardClient";
type CardGame = Pick<Game, "slug" | "title" | "thumb" | "category">;
export function GameCard({game, priority = false, source = "grid"}: {
  game: CardGame; priority?: boolean; source?: "grid" | "related" | "featured" | "recent";
}) {
  const {slug, title, thumb, category} = game;
  return <GameCardClient game={{slug, title, thumb, category}} priority={priority} source={source} />;
}
