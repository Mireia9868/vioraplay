import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { metadataBase, absUrl } from "@/lib/seo";

const title = "How to Play Sudoku: Rules, Techniques & Beginner Tips | VioraPlay";
const description = "Learn how to play Sudoku: the grid rules, a step-by-step beginner solving routine, and the elimination techniques that turn guessing into logic.";
const path = "/en/guides/how-to-play-sudoku";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") return { robots: { index: false, follow: true } };
  return {
    metadataBase,
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "article" as const },
  };
}

export default async function SudokuGuide({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  setRequestLocale(locale);
  return (
    <article className="sudoku-guide">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How to Play Sudoku",
          description,
          inLanguage: "en",
          mainEntityOfPage: absUrl(path),
          author: { "@type": "Organization", name: "VioraPlay" },
        }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Game Guides", href: "/guides" },
          { label: "How to Play Sudoku", href: "/guides/how-to-play-sudoku" },
        ]}
      />
      <h1>How to Play Sudoku</h1>
      <p>
        Sudoku is a logic puzzle played on a 9×9 grid. The goal is to fill every empty cell
        with a digit from 1 to 9 so that each row, each column, and each of the nine 3×3 boxes
        contains every digit exactly once. You never do arithmetic — it is pure placement logic.
      </p>
      <nav aria-label="Guide sections">
        <a href="#rules">Rules</a> · <a href="#routine">Beginner routine</a> ·{" "}
        <a href="#techniques">Techniques</a> · <a href="#questions">Common questions</a>
      </nav>

      <section id="rules">
        <h2>Sudoku rules: start here</h2>
        <ol>
          <li>The board is 81 cells in a 9×9 grid, split into nine 3×3 boxes.</li>
          <li>Some cells are filled in as clues; the rest are empty.</li>
          <li>Fill the empties so each row, column, and 3×3 box has the digits 1–9 with no repeats.</li>
          <li>A digit may appear only once in any single row, column, or box.</li>
          <li>
            A puzzle is solved when the whole grid satisfies those three constraints. If you
            contradict them, undo the last move and try a different cell.
          </li>
        </ol>
      </section>

      <section id="routine">
        <h2>A beginner solving routine</h2>
        <p>
          Work the easiest cells first. For any empty cell, list the digits already present in
          its row, column, and box. If only one digit is missing from that set, it must go there.
        </p>
        <p>
          Repeat this scanning pass until no more cells fall out by elimination, then look for
          pairs: if two cells in a unit can only hold the same two digits, those digits are
          locked out of the other cells in that unit. Small, patient passes beat jumping to hard
          cells early.
        </p>
      </section>

      <section id="techniques">
        <h2>Techniques that replace guessing</h2>
        <h3>Naked single</h3>
        <p>
          When a cell has only one candidate left after you account for its row, column, and box,
          place it. This is the workhorse of early-game Sudoku.
        </p>
        <h3>Hidden single</h3>
        <p>
          A digit may have only one legal cell within a unit even though that cell has several
          candidates. Spotting the hidden single lets you place a digit others crowd out.
        </p>
        <h3>Cross-hatching</h3>
        <p>
          Focus on one box at a time and sweep each digit across the rows and columns that feed
          it. Cross-hatching quickly reveals where a digit cannot go.
        </p>
      </section>

      <section id="questions">
        <h2>Common questions</h2>
        <h3>Is Sudoku math?</h3>
        <p>
          No. The digits are symbols; you could replace 1–9 with nine letters and the puzzle
          would play identically. It is a placement and deduction game.
        </p>
        <h3>What if I get stuck?</h3>
        <p>
          Step back to naked and hidden singles rather than guessing. Most beginner and
          intermediate puzzles are solvable with those two techniques plus cross-hatching.
        </p>
        <h3>How do I play Sudoku online on VioraPlay?</h3>
        <p>
          You can play a browser Sudoku from the{" "}
          <Link href="/category/sudoku">Sudoku games</Link> category. Start with{" "}
          <Link href="/game/sudoku-online">Sudoku Online</Link> for a clean grid and timer.
        </p>
      </section>

      <section>
        <h2>Rule references</h2>
        <p>
          For the standardized competition rules and notation, see the{" "}
          <a href="https://www.worldpuzzle.org/">World Puzzle Federation</a>, which oversees
          Sudoku as a recognized puzzle sport. App and site implementations may use different
          difficulty tiers.
        </p>
      </section>
    </article>
  );
}
