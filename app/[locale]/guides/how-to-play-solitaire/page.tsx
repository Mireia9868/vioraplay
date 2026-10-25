import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { metadataBase, absUrl } from "@/lib/seo";

const title = "How to Play Solitaire: Klondike Rules & Winning Tips | VioraPlay";
const description =
  "Klondike solitaire rules explained: tableau building, foundations, stock and waste, plus the column and card-order habits that turn more deals into wins.";
const path = "/en/guides/how-to-play-solitaire";

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

export default async function HowToPlaySolitaire({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  setRequestLocale(locale);

  return (
    <article className="guide-page">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "How to Play Solitaire",
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
          { label: "How to Play Solitaire", href: "/guides/how-to-play-solitaire" },
        ]}
      />
      <h1>How to Play Solitaire</h1>
      <p>
        Solitaire — usually Klondike — is a one-player card game with a simple goal: build four
        foundation piles from ace to king. The rules take a minute to learn; the difference between
        a good player and a beginner is mostly about which card they choose to uncover first.
      </p>

      <nav aria-label="Guide sections">
        <a href="#setup">Setup</a> · <a href="#rules">Legal moves</a> ·{" "}
        <a href="#strategy">Strategy</a> · <a href="#mistakes">Mistakes</a> ·{" "}
        <a href="#questions">Questions</a>
      </nav>

      <section id="setup">
        <h2>The table layout</h2>
        <ul>
          <li>Seven tableau piles hold 1 to 7 cards. Only the top card of each pile is face up.</li>
          <li>Four foundations, one per suit, start empty and are built ace to king.</li>
          <li>The remaining cards form the stock; you draw from it into the waste pile.</li>
        </ul>
        <p>
          A deal is won when all 52 cards sit on the foundations. It is lost when no legal move
          remains and the stock is empty.
        </p>
      </section>

      <section id="rules">
        <h2>Which moves are legal</h2>
        <ol>
          <li>On the tableau, build down in alternating colours: a red 7 goes on a black 8.</li>
          <li>Move a face-up sequence as a group if it is already in descending alternating order.</li>
          <li>The top card of any tableau pile can move to a foundation if it is the next card in that suit.</li>
          <li>An empty tableau column accepts a king — and only a king.</li>
          <li>Draw from the stock when no tableau move helps; the waste pile’s top card is playable.</li>
        </ol>
      </section>

      <section id="strategy">
        <h2>The habits that win more deals</h2>
        <p>
          Before any card goes to a foundation, ask what it unlocks. Foundations are safe storage,
          but a card moved there can no longer be used to hold a sequence on the tableau. Early in a
          deal, keeping a useful card in play is often worth more than one point of progress.
        </p>
        <ul>
          <li><strong>Uncover face-down cards first.</strong> Every hidden card is information you cannot use yet.</li>
          <li><strong>Empty a column when you can.</strong> A free column is the only place a king can go, and kings unlock long sequences.</li>
          <li><strong>Cycle the stock last.</strong> Drawing early wastes cards you may need later; draw when tableau moves run out.</li>
          <li><strong>Prefer moves that combine two goals</strong> — uncovering a card and emptying a column at the same time.</li>
        </ul>
      </section>

      <section id="mistakes">
        <h2>Common mistakes</h2>
        <ul>
          <li>Burying a needed card under a long sequence just to place a king.</li>
          <li>Moving every ace and two to the foundations immediately, then losing the cards that held sequences together.</li>
          <li>Drawing through the whole stock before checking whether a tableau move frees a column.</li>
          <li>Restarting a deal that only needed a different order in the first ten moves.</li>
        </ul>
      </section>

      <section id="questions">
        <h2>Common questions</h2>
        <h3>Is every solitaire deal winnable?</h3>
        <p>
          No. Klondike deals vary; some cannot be won with any sequence of legal moves. Most can,
          which is why a failed deal is usually a strategy problem rather than a bad shuffle.
        </p>
        <h3>Does draw-one or draw-three change the difficulty?</h3>
        <p>
          Yes. Drawing one card at a time is more forgiving because you see every card; draw-three
          is harder and rewards planning the stock order. Pick the variant that matches the pace you
          want.
        </p>
        <h3>What should I do when I am stuck?</h3>
        <p>
          Re-read the tableau for a buried ace or an empty column you can create. If neither exists,
          restart and change the order of your first moves rather than repeating the same sequence.
        </p>
        <p>
          Play <Link href="/game/emerland-solitaire">Emerland Solitaire</Link> or{" "}
          <Link href="/game/solitaire-klondike-treasure-island">Solitaire Klondike</Link>, or browse
          the <Link href="/category/solitaire">solitaire games</Link> category.
        </p>
      </section>
    </article>
  );
}
