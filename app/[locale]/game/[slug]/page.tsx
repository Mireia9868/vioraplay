import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  getAllGames,
  getGameBySlug,
  getRelatedGames,
  slugify,
  displayCategory,
} from "@/lib/games";
import { getGameContent } from "@/data/game-content";
import {
  getGameIntent,
  gameTitle,
  gameOgTitle,
  type GameIntent,
} from "@/data/game-intent";
import { GameCard } from "@/components/GameCard";
import { GameControls } from "@/components/GameControls";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Adsterra } from "@/components/Adsterra";
import { GameViewTracker } from "@/components/GameViewTracker";
import {
  SITE_URL,
  metadataBase,
  buildLanguageAlternates,
  truncateDescription,
  supplierIntro,
} from "@/lib/seo";

export async function generateStaticParams() {
  return getAllGames().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const game = getGameBySlug(slug);
  if (!game) return {};

  // Titles are English-only source data, so only the site name suffix is
  // localized. Descriptions are long scraped blurbs and must be clipped or
  // Google truncates mid-sentence.
  const content = getGameContent(slug);
  const description = content?.intro ?? truncateDescription(game.description, 155);
  const path = (l: string) => `/${l}/game/${game.slug}`;
  const intent = getGameIntent(slug);

  return {
    metadataBase,
    title: gameTitle(game.title, intent),
    description,
    alternates: {
      canonical: path(locale),
      languages: buildLanguageAlternates((l) => path(l)),
    },
    openGraph: {
      title: gameOgTitle(game.title, intent),
      description,
      url: path(locale),
      type: "website" as const,
      images: game.thumb ? [{ url: game.thumb }] : undefined,
    },
  };
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();
  setRequestLocale(locale);

  const t = await getTranslations("game");
  const tn = await getTranslations("nav");
  const content = getGameContent(slug);
  const related = getRelatedGames(game, 8);
  const catSlug = slugify(game.category);
  const catName = displayCategory(game.category);
  const path = (l: string) => `/${l}/game/${game.slug}`;

  /**
   * JSON-LD must describe what is actually visible on the page.
   *
   * The previous version stuffed the full 3,600-char supplier blurb into
   * VideoGame.description while the page showed a 320-char clip — structured
   * data contradicting rendered content is a mismatch signal, so the value is
   * capped to the same text the visitor can read.
   */
  const visibleIntro = content?.intro ?? truncateDescription(game.description, 320);
  // Rendered in full in the about section — the page's main indexable text.
  const supplierText = supplierIntro(game.description);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoGame",
        "@id": `${SITE_URL}${path(locale)}#game`,
        name: game.title,
        genre: game.category,
        description: visibleIntro,
        image: game.thumb,
        url: `${SITE_URL}${path(locale)}`,
        inLanguage: locale,
        isFamilyFriendly: true,
        playMode: "SinglePlayer",
        // Required for Google to surface the game as a rich result. Capped at
        // the visible text so the structured data cannot claim more than the
        // page shows.
        ...(game.thumb ? { image: [game.thumb] } : {}),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}${path(locale)}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: tn("home"), item: `${SITE_URL}/${locale}` },
          { "@type": "ListItem", position: 2, name: tn("categories"), item: `${SITE_URL}/${locale}/categories` },
          { "@type": "ListItem", position: 3, name: catName, item: `${SITE_URL}/${locale}/category/${catSlug}` },
          { "@type": "ListItem", position: 4, name: game.title },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}${path(locale)}#webpage`,
        url: `${SITE_URL}${path(locale)}`,
        name: `${game.title} — Play Free Online`,
        description: visibleIntro,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${SITE_URL}${path(locale)}#breadcrumb` },
        inLanguage: locale,
      },
    ],
  };

  return (
    <div className="game-page">
      <JsonLd data={jsonLd} />

      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: tn("categories"), href: "/categories" },
          { label: catName, href: `/category/${catSlug}` },
          { label: game.title, href: `/game/${game.slug}` },
        ]}
      />

      <h1>{game.title}</h1>

      <GameControls slug={game.slug} embed={game.embed} title={game.title} />

      <GameViewTracker slug={game.slug} category={game.category} />

      <Adsterra variant="native" />

      {/* Site-owned, indexable content. This block is the whole SEO surface of
          a game page: the iframe itself is crawlable but its content is
          attributed to playgama.com and its links pass no authority back.
          Curated text is used when available; otherwise the supplier's opening
          paragraph is rendered in full (not clipped) so the page carries real
          topical text instead of a thin stub. */}
      <section className="about">
        <h2>{t("about")}</h2>
        {content ? (
          <>
            <p>{content.intro}</p>
            <h3>{t("howToPlay")}</h3>
            <p>{content.howToPlay}</p>
            {content.controls && (
              <>
                <h3>{t("controls")}</h3>
                <p>{content.controls}</p>
              </>
            )}
          </>
        ) : (
          supplierText && <p>{supplierText}</p>
        )}
      </section>

      {related.length > 0 && (
        <section>
          <h2>{t("youMightLike")}</h2>
          <div className="game-grid">
            {related.map((g) => (
              <GameCard key={g.id} game={g} source="related" />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

