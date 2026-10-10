import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import {
  getAllGames,
  getGameBySlug,
  getRelatedGames,
  slugify,
  displayCategory,
} from "@/lib/games";
import { getGameContent } from "@/data/game-content";
import { GameCard } from "@/components/GameCard";
import { GameControls } from "@/components/GameControls";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Adsterra } from "@/components/Adsterra";
import { GameViewTracker } from "@/components/GameViewTracker";
import {
  metadataBase,
  buildLanguageAlternates,
  truncateDescription,
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

  return {
    metadataBase,
    title: `${game.title} — Play Free Online | VioraPlay`,
    description,
    alternates: {
      canonical: path(locale),
      languages: buildLanguageAlternates((l) => path(l)),
    },
    openGraph: {
      title: `${game.title} — Play Free Online`,
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

  const t = await getTranslations("game");
  const tn = await getTranslations("nav");
  const content = getGameContent(slug);
  const related = getRelatedGames(game, 8);
  const catSlug = slugify(game.category);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: game.title,
    genre: game.category,
    description: content?.intro ?? truncateDescription(game.description, 200),
    image: game.thumb,
  };

  return (
    <div className="game-page">
      <JsonLd data={jsonLd} />

      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: tn("categories"), href: "/categories" },
          { label: displayCategory(game.category), href: `/category/${catSlug}` },
          { label: game.title, href: `/game/${game.slug}` },
        ]}
      />

      <h1>{game.title}</h1>

      <GameControls slug={game.slug} embed={game.embed} title={game.title} />

      <GameViewTracker slug={game.slug} category={game.category} />

      <Adsterra variant="native" />

      {/* Site-owned, indexable intro. Curated text when available, otherwise a
          clipped supplier blurb — never invented developer/date/controls. */}
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
          game.description && <p>{truncateDescription(game.description, 320)}</p>
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

