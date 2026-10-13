import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { metadataBase, absUrl } from "@/lib/seo";

const title = "How to Play Gomoku: Rules & Beginner Tips | VioraPlay";
const description = "Learn how to play Gomoku: place stones, make five in a row, recognize threats, and understand the difference between standard and freestyle rules.";
const path = "/en/guides/how-to-play-gomoku";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") return { robots: { index: false, follow: true } };
  return { metadataBase, title, description, alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "article" as const } };
}

export default async function GomokuGuide({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  setRequestLocale(locale);
  return <article className="gomoku-guide">
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: "How to Play Gomoku", description, inLanguage: "en", mainEntityOfPage: absUrl(path), author: { "@type": "Organization", name: "VioraPlay" } }} />
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Puzzle Games", href: "/category/puzzle" }, { label: "How to Play Gomoku", href: "/guides/how-to-play-gomoku" }]} />
    <h1>How to Play Gomoku</h1>
    <p>Gomoku is a two-player strategy game also known as five in a row. Players alternate placing black and white stones on empty grid intersections. Your goal is to connect five of your own stones horizontally, vertically, or diagonally.</p>
    <nav aria-label="Guide sections"><a href="#rules">Rules</a> · <a href="#example">Winning example</a> · <a href="#tips">Beginner tips</a> · <a href="#questions">Common questions</a></nav>
    <section id="rules">
      <h2>Gomoku rules: start here</h2>
      <ol>
        <li>Use a grid board, commonly 15 × 15 intersections, and two colors of stones.</li>
        <li>For a simple casual game, assign colors and let Black begin. Tournament opening systems can work differently.</li>
        <li>Take turns placing one stone on an empty intersection. Once placed, stones stay there; they do not move or capture.</li>
        <li>Connect five stones in one uninterrupted straight line. A gap or an opponent’s stone breaks the line.</li>
        <li>Agree on the variant before starting: standard Gomoku requires exactly five, while freestyle counts five or more. If the board fills with no winning line, the game is drawn.</li>
      </ol>
    </section>
    <section id="example">
      <h2>A five-in-a-row example</h2>
      <div className="gomoku-example" role="img" aria-label="Five adjacent black stones in a horizontal row on grid intersections form a winning line.">
        {Array.from({ length: 7 }, (_, i) => <span className="gomoku-point" key={i}>{i > 0 && i < 6 ? <span className="gomoku-stone" /> : null}</span>)}
      </div>
      <p>These five adjacent black stones form a horizontal winning line. Vertical and diagonal lines count too. Four stones with an empty space between them do not yet make five.</p>
    </section>
    <section id="tips">
      <h2>Beginner tips: check threats before attacking</h2>
      <p>Before each move, look for an immediate win for either player. If your opponent has four in a row with one available winning end, block that end unless you can win immediately yourself.</p>
      <p>An open four has an empty intersection at both ends. Blocking only one end leaves the other available, so try to prevent it earlier. Keep checking diagonals as well as rows and columns.</p>
    </section>
    <section id="questions">
      <h2>Common questions</h2>
      <h3>Is Gomoku the same as Go?</h3>
      <p>No. Gomoku is about connecting stones in a line. You do not capture groups or score territory.</p>
      <h3>Is Gomoku the same as Renju?</h3>
      <p>Renju is a related competitive variant with additional opening rules and restrictions on Black, including certain double threats. Do not apply those restrictions to every Gomoku game.</p>
      <h3>How do you play Gomoku on iPhone?</h3>
      <p>In an app or browser implementation that supports iPhone, follow its instructions to place stones on empty intersections. Check the selected rule variant first. This guide explains the board rules, rather than a particular app’s menus.</p>
      <h3>Can I play Gomoku online on VioraPlay?</h3>
      <p>Gomoku is not currently in our playable catalog. You can explore <Link href="/category/puzzle">online puzzle games</Link> while learning the rules here.</p>
    </section>
    <section><h2>Rule references</h2><p>For competition details, see the <a href="https://www.renju.net/gomokurules/">International Rules of Gomoku</a> and the <a href="https://gomoku.renju.net/rules/">Renju introduction</a> from RenjuNet. Specific apps may use different variants.</p></section>
  </article>;
}
