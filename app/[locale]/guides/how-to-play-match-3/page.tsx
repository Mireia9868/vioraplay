import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { metadataBase, absUrl } from "@/lib/seo";

const title = "How to Play Match-3 Games: Rules, Cascades & Tips | VioraPlay";
const description =
  "Match-3 rules and strategy: how swaps, cascades and special tiles work, why bottom matches clear more, and how to beat blockers and move limits.";
const path = "/en/guides/how-to-play-match-3";

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

export default async function HowToPlayMatch3({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  setRequestLocale(locale);

  return (
    <article className="guide-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How to Play Match-3 Games",
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
          { label: "How to Play Match-3", href: "/guides/how-to-play-match-3" },
        ]}
      />
      <h1>How to Play Match-3 Games</h1>
      <p>
        Match-3 games ask one thing: swap two adjacent pieces so that three or more of the same
        colour line up. That single rule hides a surprising amount of depth, because every match
        changes the board, and cascades can clear far more than the move you made.
      </p>

      <nav aria-label="Guide sections">
        <a href="#rules">Rules</a> · <a href="#cascades">Cascades</a> ·{" "}
        <a href="#strategy">Strategy</a> · <a href="#objectives">Objectives</a> ·{" "}
        <a href="#questions">Questions</a>
      </nav>

      <section id="rules">
        <h2>The core loop</h2>
        <ul>
          <li>Swap two neighbouring tiles; the swap is only allowed if it creates a match.</li>
          <li>A line of three or more identical tiles clears, and the tiles above fall down.</li>
          <li>New tiles enter from the top, which can create a second match without a new move.</li>
          <li>Some levels limit moves, some limit time, and some set a score target.</li>
        </ul>
      </section>

      <section id="cascades">
        <h2>Why cascades matter more than single matches</h2>
        <p>
          When tiles fall, they can line up on their own. A match near the bottom of the board
          rearranges far more tiles than a match at the top, so it has a much higher chance of
          triggering a cascade. That is why experienced players look at the lower half of the board
          first.
        </p>
        <p>
          Cascades also charge special tiles faster. A long chain of clears in one move is usually
          worth more than three separate small matches, even though both use three moves.
        </p>
      </section>

      <section id="strategy">
        <h2>Strategy that works on most boards</h2>
        <ol>
          <li><strong>Scan from the bottom.</strong> Prefer matches in the lower rows; the resulting fall affects more tiles.</li>
          <li><strong>Check both sides of a potential match.</strong> A swap that clears four is better than one that clears three, if both are available.</li>
          <li><strong>Work near blockers.</strong> Crates, ice and chains are usually cleared by matching next to them, not on top of them.</li>
          <li><strong>Keep special tiles for a purpose.</strong> A striped or bomb tile used on a single piece is a wasted move; save it for a cluster or a blocker.</li>
          <li><strong>Plan two moves ahead.</strong> After the fall, which colour will sit next to which? That is where the next match comes from.</li>
        </ol>
      </section>

      <section id="objectives">
        <h2>Read the objective before the board</h2>
        <p>
          Levels fail for objective reasons, not because the player could not match three. If the
          goal is to collect a colour, stop clearing that colour by accident elsewhere. If the goal
          is to clear all blockers, every move that does not touch a blocker is a move closer to
          running out.
        </p>
        <p>
          Move limits make this stricter: before each swap, ask whether it advances the objective.
          If the answer is no, look for a different swap, even if the first one looks satisfying.
        </p>
      </section>

      <section id="questions">
        <h2>Common questions</h2>
        <h3>Why can’t I make a swap?</h3>
        <p>
          Most match-3 games only allow swaps that immediately create a match. If nothing lines up,
          the swap is rejected and your move is not spent.
        </p>
        <h3>What do special tiles do?</h3>
        <p>
          Specials are created by matching four or five in a line, or by matching in a square. They
          clear a row, a column, a cluster, or a single colour. Combining two specials usually
          clears more than using them separately.
        </p>
        <h3>Do I lose when moves run out?</h3>
        <p>
          Usually yes, unless the level’s goal is already met. That is why the last few moves should
          go to the objective rather than to setting up a big cascade.
        </p>
        <p>
          Try <Link href="/game/vega-mix-2-adventure">Vega Mix 2</Link> or{" "}
          <Link href="/game/popping-candies">Popping Candies</Link>, or browse the full{" "}
          <Link href="/category/match-3">match-3 games</Link> category.
        </p>
      </section>
    </article>
  );
}
