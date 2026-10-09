import { Link } from "@/i18n/navigation";
import type { Game } from "@/lib/types";

export function GameCard({ game }: { game: Game }) {
  return (
    <Link href={`/game/${game.slug}`} className="game-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={game.thumb} alt={game.title} width={300} height={200} loading="lazy" />
      <div className="game-card-body">
        <h3>{game.title}</h3>
        <span className="game-card-cat">{game.category}</span>
      </div>
    </Link>
  );
}
