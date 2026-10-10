"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import type { Game } from "@/lib/types";
import { getRecent, filterValid } from "@/lib/storage";
import { GameCard } from "./GameCard";

export type LightGame = Pick<Game, "slug" | "title" | "thumb" | "category">;

/**
 * Homepage "Recently Visited" strip. Reads localStorage on the client, drops
 * slugs that no longer exist in the catalog, and hides itself entirely when
 * empty. Shows the last 12 visited games (page open = "visited", not "played").
 */
export function RecentViews({ games }: { games: LightGame[] }) {
  const t = useTranslations("home");
  const [slugs, setSlugs] = useState<string[] | null>(null);

  const bySlug = useMemo(
    () => new Map(games.map((g) => [g.slug, g])),
    [games]
  );
  const valid = useMemo(() => new Set(games.map((g) => g.slug)), [games]);

  useEffect(() => {
    const sync = () => setSlugs(filterValid(getRecent(), valid));
    sync();
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, [valid]);

  // Server / first paint: render nothing (hidden when empty).
  if (slugs === null) return null;
  const recentGames = slugs
    .map((s) => bySlug.get(s))
    .filter((g): g is LightGame => Boolean(g));
  if (recentGames.length === 0) return null;

  return (
    <section className="recent-section" aria-label={t("recentlyVisited")}>
      <h2>{t("recentlyVisited")}</h2>
      <div className="game-grid">
        {recentGames.map((g) => (
          <GameCard
            key={g.slug}
            game={g}
            source="recent"
          />
        ))}
      </div>
    </section>
  );
}

