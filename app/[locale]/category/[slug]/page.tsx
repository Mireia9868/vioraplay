import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  getCategories,
  getGamesByCategory,
  getCategoryBySlug,
  getCategoryIntro,
  getNearbyCategories,
  categoryFullName,
  PER_PAGE,
  parseDeviceParam,
  filterGamesByDevices,
  countGamesByDevice,
  DEVICE_FILTERS,
} from "@/lib/games";
import { GameCard } from "@/components/GameCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PuzzleSearchGuide } from "@/components/PuzzleSearchGuide";
import { PUZZLE_SEO } from "@/data/regional-seo";
import { CATEGORY_EDITORIAL } from "@/data/category-editorial";
import { GAME_CONTENT } from "@/data/game-content";
import { guideForCategory } from "@/lib/guides";
import { isCategoryIndexable } from "@/lib/indexability";
import { routing } from "@/i18n/routing";
import { metadataBase, buildLanguageAlternates } from "@/lib/seo";

type SearchParams = Record<string, string | string[] | undefined>;

function pageFrom(sp: SearchParams | undefined): number {
  const raw = sp?.page;
  const n = Number(Array.isArray(raw) ? raw[0] : raw);
  return Number.isFinite(n) && n >= 1 ? Math.floor(n) : 1;
}

export async function generateStaticParams() {
  return getCategories().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string; locale: string }>;
  searchParams: Promise<SearchParams>;
}) {
  const { slug, locale } = await params;
  const sp = await searchParams;
  const page = pageFrom(sp);
  const devices = parseDeviceParam(sp?.device);
  const games = getGamesByCategory(slug);
  if (!games.length) return {};

  const cat = getCategoryBySlug(slug);
  const fullName = cat?.fullName ?? categoryFullName(games[0].category);
  const count = games.length;
  const puzzleCopy = slug === "puzzle" ? PUZZLE_SEO[locale] : undefined;
  const deviceQs = devices.length ? `device=${devices.join(",")}` : "";
  const path = (l: string) => {
    const parts: string[] = [];
    if (page > 1) parts.push(`page=${page}`);
    if (deviceQs) parts.push(deviceQs);
    const qs = parts.join("&");
    return `/${l}/category/${slug}${qs ? `?${qs}` : ""}`;
  };

  return {
    metadataBase,
    title: puzzleCopy?.title ?? `${fullName} — Play Free Online | VioraPlay`,
    description: puzzleCopy?.description ?? getCategoryIntro(slug, fullName.toLowerCase()).replace(
      /\.$/,
      ""
    ) + ` Browse ${count} free ${fullName.toLowerCase()} — no download, instant play.`,
    alternates: {
      canonical: path(locale),
      languages: buildLanguageAlternates((l) => path(l), routing.locales.filter(l => isCategoryIndexable(l, slug, count))),
    },
    // Thin categories, deeper pages and device-filtered views: crawlable but
    // out of the index. Shared with the sitemap via lib/indexability.ts.
    robots:
      page > 1 || devices.length > 0 || !isCategoryIndexable(locale, slug, count)
        ? { index: false, follow: true }
        : undefined,
    openGraph: {
      title: puzzleCopy?.name ?? `${fullName} — Play Free Online`,
      description: puzzleCopy?.description ?? `Play ${count} free ${fullName.toLowerCase()} online. No download, no install.`,
      url: path(locale),
      type: "website" as const,
    },
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string; locale: string }>;
  searchParams: Promise<SearchParams>;
}) {
  const { slug, locale } = await params;
  const sp = await searchParams;
  setRequestLocale(locale);
  const allGames = getGamesByCategory(slug);
  if (!allGames.length) notFound();

  const t = await getTranslations("home");
  const tn = await getTranslations("nav");
  const tc = await getTranslations("categories");

  const cat = getCategoryBySlug(slug);
  const fullName = cat?.fullName ?? categoryFullName(allGames[0].category);
  const puzzleCopy = slug === "puzzle" ? PUZZLE_SEO[locale] : undefined;

  const devices = parseDeviceParam(sp?.device);
  const games = devices.length ? filterGamesByDevices(allGames, devices) : allGames;
  const deviceCounts = countGamesByDevice(allGames);

  const page = pageFrom(sp);
  const totalPages = Math.max(1, Math.ceil(games.length / PER_PAGE));
  // Unfiltered out-of-range pages 404 (deliberate SEO choice); filtered views
  // clamp instead so a stale ?page= on a smaller result set never hard-fails.
  const safePage = page > totalPages && devices.length > 0 ? totalPages : page;
  if (page > totalPages && devices.length === 0) notFound();
  const start = (safePage - 1) * PER_PAGE;
  const pageGames = games.slice(start, start + PER_PAGE);

  const relatedCats = getNearbyCategories(slug, 6);
  // "Start here": show curated titles first, then the rest of the category.
  const topPicks = [...allGames]
    .sort((a, b) => Number(Boolean(GAME_CONTENT[b.slug])) - Number(Boolean(GAME_CONTENT[a.slug])))
    .slice(0, 3);
  // Category editorial is English-only for now (see data/category-editorial.ts).
  // The puzzle page already carries localized copy and a search guide, so it is
  // deliberately excluded here rather than stacked with a second intro.
  const editorial = locale === "en" && slug !== "puzzle" ? CATEGORY_EDITORIAL[slug] : undefined;
  const guide = locale === "en" ? guideForCategory(slug) : undefined;

  const deviceQs = devices.length ? `device=${devices.join(",")}` : "";
  const pageUrl = (n: number) => {
    const parts: string[] = [];
    if (n > 1) parts.push(`page=${n}`);
    if (deviceQs) parts.push(deviceQs);
    const qs = parts.join("&");
    return qs ? `/category/${slug}?${qs}` : `/category/${slug}`;
  };

  const deviceHref = (toggleKey: string) => {
    const set = new Set(devices);
    if (set.has(toggleKey)) set.delete(toggleKey);
    else set.add(toggleKey);
    const next = DEVICE_FILTERS.map((d) => d.key).filter((k) => set.has(k));
    return next.length ? `/category/${slug}?device=${next.join(",")}` : `/category/${slug}`;
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="category-page">
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: tn("categories"), href: "/categories" },
          { label: puzzleCopy?.name ?? fullName, href: `/category/${slug}` },
        ]}
      />

      <h1>{puzzleCopy?.name ?? fullName}</h1>
      <p className="cat-intro">{editorial?.intro ?? puzzleCopy?.intro ?? getCategoryIntro(slug, fullName.toLowerCase())}</p>

      <div className="cat-stats">
        <span className="cat-stat">{tc("gameCount", { count: games.length })}</span>
        {deviceCounts.desktop > 0 && <span className="cat-stat">{deviceCounts.desktop} {tc("deviceDesktop")}</span>}
        {deviceCounts.android > 0 && <span className="cat-stat">{deviceCounts.android} {tc("deviceAndroid")}</span>}
        {deviceCounts.ios > 0 && <span className="cat-stat">{deviceCounts.ios} {tc("deviceIOS")}</span>}
      </div>

      {guide && (
        <Link href={`/guides/${guide.slug}`} className="cat-guide-card">
          <span className="cat-guide-kicker">{tc("readGuide")}</span>
          <strong>{guide.title}</strong>
          <span className="cat-guide-arrow" aria-hidden="true">→</span>
        </Link>
      )}

      <div className="device-filter" aria-label={tc("filterHeading")}>
        <span className="df-label">{tc("filterHeading")}</span>
        <div className="df-chips">
          {DEVICE_FILTERS.map((d) => {
            const active = devices.includes(d.key);
            const n = deviceCounts[d.key];
            const labelKey = d.key === "ios" ? "deviceIOS" : `device${d.key[0].toUpperCase()}${d.key.slice(1)}`;
            return (
              <Link
                key={d.key}
                href={deviceHref(d.key)}
                className={`df-chip ${active ? "is-active" : ""}`}
                aria-pressed={active}
                scroll={false}
              >
                {tc(labelKey)}
                <span className="df-count">{n}</span>
              </Link>
            );
          })}
          {devices.length > 0 && (
            <Link href={`/category/${slug}`} className="df-clear" scroll={false}>
              {tc("clear")}
            </Link>
          )}
        </div>
      </div>

      {devices.length > 0 && (
        <p className="filter-note">
          {tc("showing", { count: games.length, total: allGames.length })}
        </p>
      )}

      {safePage === 1 && devices.length === 0 && topPicks.length === 3 && (
        <section className="start-here">
          <div className="section-head">
            <h2>{tc("startHere")}</h2>
          </div>
          <div className="start-here-grid">
            {topPicks.map((g) => (
              <GameCard key={g.id} game={g} priority source="featured" />
            ))}
          </div>
        </section>
      )}

      <div className="game-grid">
        {pageGames.map((g, i) => (
          <GameCard key={g.id} game={g} priority={safePage === 1 && i < 8} />
        ))}
      </div>

      {pageGames.length === 0 && <p className="empty-note">{tc("noResults")}</p>}

      {slug === "puzzle" && safePage === 1 && devices.length === 0 && <PuzzleSearchGuide locale={locale} />}

      {editorial && safePage === 1 && devices.length === 0 && (
        <section className="category-editorial">
          {editorial.sections.map((section) => (
            <div key={section.h}>
              <h2>{section.h}</h2>
              <p>{section.p}</p>
            </div>
          ))}
        </section>
      )}

      {totalPages > 1 && (
        <nav className="pagination" aria-label={tc("pagination")}>
          {safePage > 1 && (
            <Link href={pageUrl(safePage - 1)} className="pg-link">
              {tc("prev")}
            </Link>
          )}
          {pages.map((n) => (
            <Link
              key={n}
              href={pageUrl(n)}
              className={`pg-link ${n === safePage ? "is-current" : ""}`}
              aria-current={n === safePage ? "page" : undefined}
            >
              {n}
            </Link>
          ))}
          {safePage < totalPages && (
            <Link href={pageUrl(safePage + 1)} className="pg-link">
              {tc("next")}
            </Link>
          )}
        </nav>
      )}

      {relatedCats.length > 0 && (
        <section className="section">
          <h2>{tc("relatedCategories")}</h2>
          <div className="cat-grid">
            {relatedCats.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className="cat-card"
              >
                <span>{c.fullName}</span>
                <span className="cat-count">{c.count}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

