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
    <div>
      <Breadcrumbs
        items={[
          { label: tn("home"), href: "/" },
          { label: t("title"), href: "/categories" },
        ]}
      />
      <h1>{t("title")}</h1>
      <div className="cat-grid">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/category/${c.slug}`}
            className="cat-card"
          >
            <span>{c.name}</span>
            <span className="cat-count">{c.count}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
