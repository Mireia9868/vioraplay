import Image from "next/image";
import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { Adsterra } from "@/components/Adsterra";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { SearchBar } from "@/components/SearchBar";
import { metadataBase, buildLanguageAlternates } from "@/lib/seo";
import "../globals.css";
import "../retro.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  // Site-level defaults only. Every page below overrides title/description/
  // canonical with its own; keeping this as a template avoids the previous
  // side effect where all ~2,400 game pages inherited one shared title.
  return {
    metadataBase,
    title: t("homeTitle"),
    description: t("homeDescription"),
    // Google Search Console — HTML tag verification method.
    // Emits <meta name="google-site-verification" content="1H4ZKk_..." /> on every page.
    verification: {
      google: "1H4ZKk_iaKkO2UluhdMBcS21u5WFjLAaRZDb09l9IwM",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: buildLanguageAlternates((l) => `/${l}`),
    },
    openGraph: {
      siteName: t("siteName"),
      locale,
      url: `/${locale}`,
      type: "website" as const,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();

  // Enable static rendering for this locale segment (next-intl v4). Without
  // this every page under [locale] is server-rendered on demand, which slows
  // Googlebot crawl and hurts Core Web Vitals.
  setRequestLocale(locale);

  const messages = await getMessages();
  const tNav = await getTranslations("nav");
  const tCommon = await getTranslations("common");
  const tFooter = await getTranslations("footer");
  const tSearch = await getTranslations("search");

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <header className="site-header">
            <Link href="/" className="brand">
              <Image src="/vioraplay-logo-retro.png" alt={tCommon("siteName")} width={2172} height={724} sizes="(max-width: 720px) 150px, 190px" priority />
            </Link>
            <SearchBar
              locale={locale}
              placeholder={tSearch("placeholder")}
              label={tSearch("label")}
            />
            <nav className="site-nav">
              <Link href="/">{tNav("home")}</Link>
              <Link href="/categories">{tNav("categories")}</Link>
              <Link href="/search">{tNav("search")}</Link>
            </nav>
          </header>

          <main className="site-main">{children}</main>

          <footer className="site-footer">
            <nav aria-label={tFooter("label")} className="footer-links">
              <Link href="/about">{tFooter("about")}</Link>
              <Link href="/contact">{tFooter("contact")}</Link>
              <Link href="/privacy">{tFooter("privacy")}</Link>
              <Link href="/terms">{tFooter("terms")}</Link>
            </nav>
            <p>
              © {new Date().getFullYear()} {tCommon("siteName")}
            </p>
          </footer>

          {/* Adsterra only on portal pages, never inside the game iframe. */}
          <Adsterra variant="popunder" />

          {/* GA4 — all portal pages; game iframe content is 3rd-party. */}
          <GoogleAnalytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

