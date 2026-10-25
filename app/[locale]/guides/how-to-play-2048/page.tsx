import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { metadataBase, absUrl } from "@/lib/seo";

const title = "How to Play 2048: Rules, Corner Strategy & Tips | VioraPlay";
const description =
  "Learn how to play 2048: the sliding rule, why the corner strategy works, the move order that keeps a board alive, and the mistakes that end runs early.";
const path = "/en/guides/how-to-play-2048";

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

export default async function HowToPlay2048({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  setRequestLocale(locale);

  return (
    <article className="guide-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How to Play 2048",
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
          { label: "How to Play 2048", href: "/guides/how-to-play-2048" },
        ]}
      />
      <h1>How to Play 2048</h1>
      <p>
        2048 is a sliding-tile puzzle played on a 4×4 grid. You move every tile at once in one
        direction, equal tiles merge into their sum, and a new tile appears after each move. The
        goal is a tile worth 2048 — but most runs end long before that, and almost always for the
        same two reasons: the board fills up, or the biggest tile drifts into the middle.
      </p>

      <nav aria-label="Guide sections">
        <a href="#rules">Rules</a> · <a href="#corner">Corner strategy</a> ·{" "}
        <a href="#order">Move order</a> · <a href="#recover">Recovering</a> ·{" "}
        <a href="#questions">Questions</a>
      </nav>

      <section id="rules">
        <h2>The rules in one minute</h2>
        <ul>
          <li>Every move slides all tiles in one direction until something blocks them.</li>
          <li>Two tiles with the same number merge into one tile of double the value.</li>
          <li>A merge only happens once per tile per move, so three equal tiles do not all combine.</li>
          <li>After each move, one new tile (usually a 2 or a 4) appears in an empty square.</li>
          <li>The run ends when the board is full and no direction produces a merge.</li>
        </ul>
        <p>
          That is the whole ruleset. The difficulty is not understanding the rules but keeping
          enough empty squares for the next few moves.
        </p>
      </section>

      <section id="corner">
        <h2>Why the corner strategy works</h2>
        <p>
          Pick one corner and treat it as the home of your largest tile. A corner tile has only two
          neighbours, so it can only be disturbed by two directions. If your biggest tile sits in
          the middle, four directions can move it, and every move risks breaking the chain you have
          built.
        </p>
        <p>
          Keep the row and column leading into that corner ordered — for example 1024, 512, 256, 128
          along the bottom, with the next values stacked above. This “snake” order means a merge
          near the corner feeds the big tile instead of scattering value across the board.
        </p>
      </section>

      <section id="order">
        <h2>The move order that keeps a board alive</h2>
        <ol>
          <li>Commit to two directions for most of the run — typically down and left if your corner is bottom-left.</li>
          <li>Use the other two directions only to fix a blocked column, and return to the safe pair immediately.</li>
          <li>Merge small pairs away from the corner first, so the large tiles never need to move.</li>
          <li>When two moves are possible, choose the one that leaves more empty squares afterwards.</li>
        </ol>
        <p>
          The common failure is alternating all four directions “to see what happens”. Each
          direction change drags the big tile out of position, and the board slowly loses the empty
          space it needs.
        </p>
      </section>

      <section id="recover">
        <h2>Recovering a messy board</h2>
        <p>
          If the board is already crowded, stop chasing the 2048 tile and spend a few moves
          consolidating small values. Clear 2s and 4s into 8s and 16s, keep the corner intact, and
          accept a lower score for a board that can breathe again. A run saved at 512 is worth more
          than a run lost at 1024.
        </p>
        <p>
          If the board is full and no merge is available, the run is over — restarting is faster
          than trying to rescue it. The next attempt starts from the same rules, not from the
          previous board.
        </p>
      </section>

      <section id="questions">
        <h2>Common questions</h2>
        <h3>Is every 2048 game winnable?</h3>
        <p>
          No. The random tile placement means some boards become unwinnable before you notice. Good
          play raises the share of boards you win, but it cannot guarantee a win on every spawn.
        </p>
        <h3>Why do 2s and 4s keep appearing?</h3>
        <p>
          New tiles are part of the design: they are the raw material you merge. A board with no
          small tiles is usually a board that is about to fill up, because nothing is feeding the
          chain.
        </p>
        <h3>Should I aim for 2048 or a higher score?</h3>
        <p>
          Aim for 2048 first. Once you can reach it reliably, the same corner discipline carries you
          toward 4096 — the limit is board space, not a rule change.
        </p>
        <p>
          Ready to practise? Play <Link href="/game/2048-knights">2048 Knights</Link> or{" "}
          <Link href="/game/block-blast-2048">Block Blast 2048</Link>, or browse the full{" "}
          <Link href="/category/puzzle">puzzle games</Link> category.
        </p>
      </section>
    </article>
  );
}
