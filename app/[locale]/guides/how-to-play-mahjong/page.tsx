import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { metadataBase, absUrl } from "@/lib/seo";

const title = "How to Play Mahjong Solitaire: Rules & Board-Clearing Tips | VioraPlay";
const description = "Learn how to play Mahjong Solitaire: which tiles are free, how matching works, and a plan to clear the board without trapping tiles.";
const path = "/en/guides/how-to-play-mahjong";

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

export default async function MahjongGuide({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  setRequestLocale(locale);
  return (
    <article className="mahjong-guide">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How to Play Mahjong Solitaire",
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
          { label: "How to Play Mahjong Solitaire", href: "/guides/how-to-play-mahjong" },
        ]}
      />
      <h1>How to Play Mahjong Solitaire</h1>
      <p>
        Mahjong Solitaire (also called Mahjongg Solitaire or Shanghai) is a single-player tile
        game. You clear a layered board by matching identical free tiles in pairs until the board
        is empty. It is a matching puzzle, not the four-player betting game.
      </p>
      <nav aria-label="Guide sections">
        <a href="#free">Which tiles are free</a> · <a href="#matching">Matching rules</a> ·{" "}
        <a href="#plan">A clearing plan</a> · <a href="#questions">Common questions</a>
      </nav>

      <section id="free">
        <h2>Which tiles are free</h2>
        <p>
          A tile is “free” only when it has no tile on top of it and at least one of its left or
          right sides is open. Tiles stacked above, or boxed in on both horizontal sides, cannot
          be selected yet. Always read the stack from the outside in.
        </p>
      </section>

      <section id="matching">
        <h2>Matching rules</h2>
        <p>
          Match two identical tiles to remove them. In most layouts any identical tile pairs with
          any other identical tile. Some sets use “season” and “flower” groups where any tile in
          the group matches any other in the same group rather than an exact twin.
        </p>
      </section>

      <section id="plan">
        <h2>A plan to clear the board</h2>
        <ol>
          <li>
            Look for pairs that unblock the most tiles. Removing an edge tile can free several
            others stacked behind it.
          </li>
          <li>
            Avoid clearing both copies of a tile that is still needed to peel a layer — if you
            remove the only pair that sits on top of a stuck tile, you can strand it.
          </li>
          <li>
            Work the highest layers first when choices are equal, because top tiles block
            everything beneath them.
          </li>
          <li>
            If you get stuck, many versions let you shuffle or undo. Use undo to test a move
            rather than guessing.
          </li>
        </ol>
      </section>

      <section id="questions">
        <h2>Common questions</h2>
        <h3>Is this the same as four-player Mahjong?</h3>
        <p>
          No. Mahjong Solitaire is a solo matching puzzle. The social, four-player game involves
          drawing and discarding tiles to complete a hand.
        </p>
        <h3>What makes a board unsolvable?</h3>
        <p>
          If the last few tiles left on the board have no matching free partner, the layout is
          stuck. Good play avoids this by not burning matching pairs needed to expose deeper
          tiles.
        </p>
        <h3>How do I play Mahjong online on VioraPlay?</h3>
        <p>
          Open <Link href="/game/mahjong-classic">Mahjong Classic</Link> from the{" "}
          <Link href="/category/mahjong">mahjong games</Link> category to play a tile-matching
          layout in your browser.
        </p>
      </section>

      <section>
        <h2>Rule references</h2>
        <p>
          Mahjong Solitaire was popularized as “Shanghai”; tile-art conventions trace back to
          traditional Mahjong sets documented by the{" "}
          <a href="https://en.wikipedia.org/wiki/Mahjong">Mahjong</a> overview. App layouts vary
          by developer.
        </p>
      </section>
    </article>
  );
}
