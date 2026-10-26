import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { metadataBase, absUrl } from "@/lib/seo";
import { GUIDES, isGuideIndexable } from "@/lib/guides";

const title = "Game Guides & How-To Play | VioraPlay";
const description = "Free how-to-play guides for 30 browser game genres: sudoku, chess, solitaire, 2048, match-3, .io, hidden object, racing, board games, strategy and more. Rules, strategy and common questions.";
const path = "/en/guides";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isGuideIndexable(locale)) return { robots: { index: false, follow: true } };
  return {
    metadataBase,
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website" as const },
  };
}


export default async function GuidesIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isGuideIndexable(locale)) notFound();
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
