import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { metadataBase, absUrl } from "@/lib/seo";

const title = "Game Guides & How-To Play | VioraPlay";
const description = "Free how-to-play guides for Sudoku, chess, mahjong, bubble shooter, tower defense, merge & sort puzzles, and snake. Rules, beginner tips, and strategy.";
const path = "/en/guides";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") return { robots: { index: false, follow: true } };
  return {
    metadataBase,
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website" as const },
  };
}

const GUIDES = [
  {
    slug: "how-to-play-sudoku",
    title: "How to Play Sudoku",
    blurb: "Grid logic rules, elimination techniques, and a beginner solving routine.",
    cat: "/category/sudoku",
    catName: "Sudoku Games",
  },
  {
    slug: "how-to-play-chess",
    title: "How to Play Chess",
    blurb: "Piece moves, checkmate, opening principles, and first tactics to learn.",
    cat: "/category/chess",
    catName: "Chess Games",
  },
  {
    slug: "how-to-play-mahjong",
    title: "How to Play Mahjong Solitaire",
    blurb: "Tile-matching rules, which tiles are free, and a plan to clear the board.",
    cat: "/category/mahjong",
    catName: "Mahjong Games",
  },
  {
    slug: "how-to-play-bubble-shooter",
    title: "How to Play Bubble Shooter",
    blurb: "Aiming, banking shots off walls, and building combo pops.",
    cat: "/category/bubble-shooter",
    catName: "Bubble Shooter Games",
  },
  {
    slug: "how-to-play-tower-defense",
    title: "How to Play Tower Defense",
    blurb: "Where to place towers, economy, and wave-management basics.",
    cat: "/category/tower-defense",
    catName: "Tower Defense Games",
  },
  {
    slug: "merge-and-sort-puzzle-guide",
    title: "Merge & Sort Puzzle Guide",
    blurb: "How merge and color-sort puzzles work, and a routine that avoids soft locks.",
    cat: "/category/merge",
    catName: "Merge Games",
  },
  {
    slug: "how-to-play-snake",
    title: "How to Play Snake",
    blurb: "Controls, safe-space rules, and how to grow without trapping yourself.",
    cat: "/category/snake",
    catName: "Snake Games",
  },
];

export default async function GuidesIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  setRequestLocale(locale);
  return (
    <article className="guides-index">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "VioraPlay Game Guides",
          description,
          url: absUrl(path),
        }}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Game Guides", href: "/guides" },
        ]}
      />
      <h1>Game Guides & How-To Play</h1>
      <p>
        Plain-language guides to the games on VioraPlay. Each one explains the rules, a
        beginner routine, and common questions — so you can start playing without guessing.
        Every guide links to a category where you can play the game free in your browser.
      </p>
      <ul className="guide-list">
        {GUIDES.map((g) => (
          <li key={g.slug}>
            <h2>
              <Link href={`/guides/${g.slug}`}>{g.title}</Link>
            </h2>
            <p>{g.blurb}</p>
            <p>
              <Link href={g.cat}>Play {g.catName} →</Link>
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
