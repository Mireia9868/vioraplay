import { Link } from "@/i18n/navigation";
import { GameCard } from "@/components/GameCard";
import { getGameBySlug } from "@/lib/games";

/** English editorial module; only shown on the unfiltered first puzzle page. */
export function PuzzleSearchGuide() {
  const picks = ["arrow-exit-puzzle", "arrow-cube-3d", "sudoku-online", "2048-knights"];
  return <section className="section">
    <h2>Find your next online puzzle game</h2>
    <p>Choose an arrow puzzle for planning moves, Sudoku for number logic, or a 2048 puzzle for merging matching tiles. Each game below opens in your browser.</p>
    <div className="game-grid">
      {picks.map(slug => {
        const game = getGameBySlug(slug);
        return game ? <GameCard key={slug} game={game} /> : null;
      })}
    </div>
    <h3>How do arrow puzzle games work?</h3>
    <p>In Arrow Exit Puzzle, arrows move in the direction they point. Inspect the path before clicking: a blocked arrow costs a health point. In Arrow Cube 3D, rotate the cube to check which arrows can leave without an obstruction.</p>
    <h3>Which number puzzle should I try?</h3>
    <p>Sudoku Online asks you to fill a grid without repeating digits in a row, column, or box. In 2048 Knights, slide the board and merge equal numbers to reach the stage’s target. These are different mechanics: choose deduction or tile merging.</p>
    <h3>Can I play puzzle games on my phone?</h3>
    <p>These four picks are listed for desktop, Android, and iOS in the game catalog. Use the device filters above to find more supported games; controls and performance vary by game.</p>
    <p>Prefer a strategy board game? Read <Link href="/guides/how-to-play-gomoku">how to play Gomoku</Link>, including five-in-a-row rules and beginner tactics.</p>
  </section>;
}
