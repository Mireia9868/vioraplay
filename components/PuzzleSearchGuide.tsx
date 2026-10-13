import { Link } from "@/i18n/navigation";
import { GameCard } from "@/components/GameCard";
import { getGameBySlug } from "@/lib/games";
import { PUZZLE_SEO } from "@/data/regional-seo";

/** English editorial module; only shown on the unfiltered first puzzle page. */
export function PuzzleSearchGuide({ locale }: { locale: string }) {
  const copy = PUZZLE_SEO[locale] ?? PUZZLE_SEO.en;
  const picks = ["arrow-exit-puzzle", "arrow-cube-3d", "sudoku-online", "2048-knights"];
  return <section className="section">
    <h2>{copy.heading}</h2>
    <p>{copy.intro}</p>
    <div className="game-grid">
      {picks.map(slug => {
        const game = getGameBySlug(slug);
        return game ? <GameCard key={slug} game={game} /> : null;
      })}
    </div>
    <h3>{copy.arrowHeading}</h3>
    <p>{copy.arrowCopy}</p>
    <h3>{copy.numberHeading}</h3>
    <p>{copy.numberCopy}</p>
    {locale === "en" && <><h3>Can I play puzzle games on my phone?</h3>
    <p>These four picks are listed for desktop, Android, and iOS in the game catalog. Use the device filters above to find more supported games; controls and performance vary by game.</p>
    <p>Prefer a strategy board game? Read <Link href="/guides/how-to-play-gomoku">how to play Gomoku</Link>, including five-in-a-row rules and beginner tactics.</p></>}
  </section>;
}
