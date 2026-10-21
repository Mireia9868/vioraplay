import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { metadataBase, absUrl } from "@/lib/seo";

const title = "How to Play Chess: Rules, Openings & First Tactics | VioraPlay";
const description = "Learn how to play chess: piece moves, checkmate, opening principles, and the first tactics to learn so you stop hanging pieces.";
const path = "/en/guides/how-to-play-chess";

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

export default async function ChessGuide({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  setRequestLocale(locale);
  return (
    <article className="chess-guide">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How to Play Chess",
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
          { label: "How to Play Chess", href: "/guides/how-to-play-chess" },
        ]}
      />
      <h1>How to Play Chess</h1>
      <p>
        Chess is a two-player strategy game on an 8×8 board. Each side starts with 16 pieces and
        takes turns moving one piece at a time. The aim is to checkmate the opponent’s king —
        to put it under attack with no legal way to escape.
      </p>
      <nav aria-label="Guide sections">
        <a href="#pieces">Piece moves</a> · <a href="#checkmate">Checkmate</a> ·{" "}
        <a href="#openings">Opening principles</a> · <a href="#questions">Common questions</a>
      </nav>

      <section id="pieces">
        <h2>How each piece moves</h2>
        <ul>
          <li><strong>Pawn</strong> — moves one square forward, captures diagonally, and promotes on the last rank.</li>
          <li><strong>Knight</strong> — moves in an L-shape and is the only piece that jumps over others.</li>
          <li><strong>Bishop</strong> — slides any distance on the diagonals.</li>
          <li><strong>Rook</strong> — slides any distance on ranks and files.</li>
          <li><strong>Queen</strong> — slides any distance in any direction; the most powerful piece.</li>
          <li><strong>King</strong> — moves one square in any direction; safety comes first.</li>
        </ul>
        <p>
          Special moves: <em>castling</em> tucks the king behind a defended rook, <em>en passant</em>{" "}
          is a pawn capture that can only happen on the turn after an enemy pawn’s two-step
          advance, and <em>promotion</em> turns a pawn that reaches the far rank into a queen or
          another piece.
        </p>
      </section>

      <section id="checkmate">
        <h2>Check, checkmate, and stalemate</h2>
        <p>
          <strong>Check</strong> means your king is attacked. You must respond — move the king,
          block the attack, or capture the attacker. <strong>Checkmate</strong> is check with no
          legal response; that ends the game. <strong>Stalemate</strong> is a position with no
          legal move but no check, and it is a draw, not a win.
        </p>
      </section>

      <section id="openings">
        <h2>Opening principles for beginners</h2>
        <ol>
          <li>Control the center with a pawn or two in the first few moves.</li>
          <li>Develop knights and bishops early rather than moving the same piece repeatedly.</li>
          <li>Castle to keep the king safe and connect the rooks.</li>
          <li>Don’t grab a pawn if it leaves a piece hanging.</li>
        </ol>
        <p>
          You do not need to memorize long opening lines to improve quickly. Solid development and
          not losing pieces for free will beat most casual opponents.
        </p>
      </section>

      <section id="questions">
        <h2>Common questions</h2>
        <h3>Can the king capture?</h3>
        <p>
          Yes, but only onto a square that is not attacked. A king may never move into check.
        </p>
        <h3>What is a good first tactic to learn?</h3>
        <p>
          The <em>fork</em> — one move that attacks two pieces at once — and the{" "}
          <em>pin</em> — a piece that cannot move because doing so would expose a more valuable
          piece behind it. Both win material without complication.
        </p>
        <h3>How do I play chess online on VioraPlay?</h3>
        <p>
          Try <Link href="/game/master-chess">Master Chess</Link> from the{" "}
          <Link href="/category/chess">chess games</Link> category to play against the computer.
        </p>
      </section>

      <section>
        <h2>Rule references</h2>
        <p>
          The authoritative move rules and tournament regulations are published by{" "}
          <a href="https://www.fide.com/standards-and-rules">FIDE</a>. Individual apps may
          simplify or vary timing and promotion defaults.
        </p>
      </section>
    </article>
  );
}
