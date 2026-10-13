import Image from "next/image";
import { CategoryDirectory } from "@/components/CategoryDirectory";
import { PortalIcon } from "@/components/PortalIcon";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getCategories } from "@/lib/games";
import { Link } from "@/i18n/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { metadataBase, buildLanguageAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const path = (l: string) => `/${l}/categories`;

  return {
    metadataBase,
    title: t("categoriesTitle"),
    description: t("categoriesDescription"),
    alternates: {
      canonical: path(locale),
      languages: buildLanguageAlternates((l) => path(l)),
    },
  };
}

export default async function CategoriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("categories");
  const tn = await getTranslations("nav");
  const categories = getCategories();

  return (
    <div className="category-explorer">
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: t("title"), href: "/categories" },
        ]}
      />
      <section className="category-intro">
        <div className="category-intro-copy">
          <p className="category-eyebrow">{t("exploreEyebrow")}</p>
          <h1><span>{t("exploreLead")}</span><span>{t("exploreEnd")}</span></h1>
          <p className="category-intro-sub">{t("exploreSubtitle")}</p>
        </div>
        <div className="category-intro-art" aria-hidden="true"><Image src="/category-discovery-art.webp" alt="" width={720} height={488} sizes="(max-width: 420px) 200px, (max-width: 720px) 34vw, 420px" priority /></div>
      </section>
      <section className="category-featured-section">
        <div className="section-head"><h2>{t("startFavorite")}</h2><span className="category-pick-hint">{t("pickCategory")} <span aria-hidden="true">↘</span></span></div>
        <div className="category-featured-grid">
          {["racing", "puzzle", "arcade", "action", "sports", "strategy"].map((slug, i) => {
            const category = categories.find(c=>c.slug===slug);
            if (!category) return null;
            return <Link key={slug} href={`/category/${slug}`} className={`category-feature category-feature-${i}`} prefetch={false}>
              <div className="category-feature-top"><PortalIcon name={slug}/><span>{t("gameCount", {count: category.count})}</span></div>
              <h3>{category.name}</h3><p>{t(`intro_${slug}`)}</p><span className="category-feature-arrow" aria-hidden="true">↗</span>
            </Link>;
          })}
        </div>
      </section>
      <CategoryDirectory categories={categories} labels={{heading: t("moreWays"), search: t("findCategory"), empty: t("noCategories"), resultCount: t("categoryMatches", {count: "{count}"})}} />
    </div>
  );
}
