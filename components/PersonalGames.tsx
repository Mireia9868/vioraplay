"use client";
import type { LightGame } from "./RecentViews";
import { RecentViews } from "./RecentViews";
import { Favorites } from "./Favorites";
export function PersonalGames({games}: {games: LightGame[]}) {
  return <><RecentViews games={games} /><Favorites games={games} /></>;
}
