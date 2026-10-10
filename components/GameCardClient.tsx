"use client";

import { Link } from "@/i18n/navigation";
import type { Game } from "@/lib/types";
import { trackEvent } from "@/lib/analytics";
import { displayCategory } from "@/lib/category-labels";
import { FavoriteButton } from "./FavoriteButton";

export function GameCardClient({
  game,
  priority = false,
  source = "grid",
}: {
  game: Pick<Game, "slug" | "title" | "thumb" | "category">;
  /** true for above-the-fold tiles — skip lazy loading so LCP image is eager */
  priority?: boolean;
  /** where the card appears — used for honest click-event attribution */
  source?: "grid" | "related" | "featured" | "recent";
}) {
  return (
    <article className="game-card">
    <Link
      href={`/game/${game.slug}`}
      className="game-card-link"
      onClick={() => {
        trackEvent("game_card_click", { slug: game.slug, source });
        if (source === "related") trackEvent("related_click", { slug: game.slug });
      }}
    >
      <div className="game-card-thumb">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={game.thumb}
          alt={game.title}
          width={448}
          height={252}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
        />
        <span className="game-card-play" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.79-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
          </svg>
        </span>
      </div>
      <div className="game-card-body">
        <h3>{game.title}</h3>
        <span className="game-card-cat">{displayCategory(game.category)}</span>
      </div>
    </Link>
    <FavoriteButton slug={game.slug} className="fav-on-card" />
    </article>
  );
}

