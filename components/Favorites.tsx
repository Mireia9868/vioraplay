"use client";
import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { getFavorites, filterValid } from "@/lib/storage";
import type { LightGame } from "./RecentViews";
import { GameCard } from "./GameCard";
export function Favorites({ games }: { games: LightGame[] }) {
  const t = useTranslations("favorites");
  const [slugs, setSlugs] = useState<string[]>([]);
  const bySlug = useMemo(() => new Map(games.map(g => [g.slug, g])), [games]);
  useEffect(() => {
    const sync = () => setSlugs(filterValid(getFavorites(), new Set(bySlug.keys())));
    sync();
    window.addEventListener("vp:favorites", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("vp:favorites", sync);
      window.removeEventListener("storage", sync);
    };
  }, [bySlug]);
  if (!slugs.length) return null;
  return <section className="section" aria-label={t("title")}>
    <h2>{t("title")}</h2>
    <div className="game-grid">{slugs.map(slug => <GameCard key={slug} game={bySlug.get(slug)!} />)}</div>
  </section>;
}
