import Image from "next/image";
import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { AdSense } from "@/components/AdSense";
import { Analytics } from "@vercel/analytics/next";
import { ConsentBanner } from "@/components/ConsentBanner";
import { FooterConsentLink } from "@/components/FooterConsentLink";
import { SiteNav } from "@/components/SiteNav";
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
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
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
            <SiteNav labels={{home: tNav("home"), categories: tNav("categories"), language: tNav("language")}} />
          </header>

          <main className="site-main">{children}</main>

          <footer className="site-footer">
            <nav aria-label={tFooter("label")} className="footer-links">
              <Link href="/about">{tFooter("about")}</Link>
              <Link href="/contact">{tFooter("contact")}</Link>
              <Link href="/privacy">{tFooter("privacy")}</Link>
              <Link href="/terms">{tFooter("terms")}</Link>
              {/* Guides are English-only; this link is omitted on other locales. */}
              {locale === "en" && <Link href="/guides">Guides</Link>}
              {locale === "en" && <Link href="/research/browser-games-2026">Research</Link>}
              <FooterConsentLink />
            </nav>
            <p>
              © {new Date().getFullYear()} {tCommon("siteName")}
            </p>
          </footer>

          {/* GA4 — all portal pages; game iframe content is 3rd-party.
              Loads only after analytics consent (see lib/consent.ts). */}
          <GoogleAnalytics />
          {/* AdSense tag — renders only when NEXT_PUBLIC_ADSENSE_CLIENT is set.
              Ad consent is collected by Google's certified CMP, not by the banner. */}
          <AdSense />
          {/* Analytics consent banner. Ad consent is Google's own message. */}
          <ConsentBanner />
          {/* Cookieless aggregate traffic, independent of analytics consent.
              This is the source of truth for "did traffic actually drop?". */}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

