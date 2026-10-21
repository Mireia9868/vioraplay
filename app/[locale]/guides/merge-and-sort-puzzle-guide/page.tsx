import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { metadataBase, absUrl } from "@/lib/seo";

const title = "Merge & Sort Puzzle Guide: Mechanics, Soft Locks & Tips | VioraPlay";
const description = "Learn how merge and color-sort puzzles work, why soft locks happen, and a routine to clear boards without getting stuck.";
const path = "/en/guides/merge-and-sort-puzzle-guide";

export async function generateMetadata({ params }: { params: Promise< { locale: string }> }) {
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

export default async function MergeSortGuide({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  setRequestLocale(locale);
  return (
    <article className="merge-guide">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Merge & Sort Puzzle Guide",
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
          { label: "Merge & Sort Puzzle Guide", href: "/guides/merge-and-sort-puzzle-guide" },
        ]}
      />
      <h1>Merge &amp; Sort Puzzle Guide</h1>
      <p>
        Merge and color-sort puzzles are two close cousins of casual logic games. In a{" "}
        <strong>merge</strong> puzzle you combine identical items to make a bigger or rarer one;
        in a <strong>color-sort</strong> puzzle you move items onto matching colors until every
        container is uniform. Both reward planning over speed.
      </p>
      <nav aria-label="Guide sections">
        <a href="#merge">How merging works</a> · <a href="#sort">How sorting works</a> ·{" "}
        <a href="#locks">Avoiding soft locks</a> · <a href="#questions">Common questions</a>
      </nav>

      <section id="merge">
        <h2>How merging works</h2>
        <p>
          Drag one item onto an identical item to merge them into the next tier. Merging chains —
          two low items make a mid item, two mids make a high item — so your board slowly climbs
          in value. The risk is running out of space before you can pair things up.
        </p>
      </section>

      <section id="sort">
        <h2>How color sorting works</h2>
        <p>
          You have containers, each holding items of one or more colors, and you pour or move
          items between them. The goal is to collect each color into its own container. Plan the
          order so a container you still need doesn’t get blocked by a color you can’t finish.
        </p>
      </section>

      <section id="locks">
        <h2>Avoiding soft locks</h2>
        <ol>
          <li>In merge games, keep at least one free slot. Filling the board with unpaired items ends the run.</li>
          <li>In sort games, don’t pour a color into a container that already holds a different color unless you can fully clear it later.</li>
          <li>Prioritize the color with the fewest loose pieces so it stops occupying space early.</li>
          <li>Use any undo or shuffle the game offers to test a move before committing.</li>
        </ol>
      </section>

      <section id="questions">
        <h2>Common questions</h2>
        <h3>Are merge and sort puzzles the same thing?</h3>
        <p>
          No. Merging combines identical items into better ones; sorting separates mixed colors
          into clean groups. They feel similar because both are calm, planning-first puzzles.
        </p>
        <h3>What is a soft lock?</h3>
        <p>
          It is a state where no remaining move makes progress — every container is blocked or the
          merge board is full with no pairs. Good sequencing avoids it.
        </p>
        <h3>How do I play these on VioraPlay?</h3>
        <p>
          Explore the <Link href="/category/merge">merge games</Link> category, or try a
          sorting title like <Link href="/game/nuts-puzzle-sort-by-color">Nuts Puzzle: Sort By Color</Link>.
        </p>
      </section>
    </article>
  );
}
