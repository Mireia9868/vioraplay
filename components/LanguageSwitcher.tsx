"use client";
import { useRef, useState } from "react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const names: Record<string, string> = {
  en: "English", es: "Español", pt: "Português", pl: "Polski",
  ar: "العربية", id: "Bahasa Indonesia", tr: "Türkçe", vi: "Tiếng Việt",
};

export function LanguageSwitcher({ label }: { label: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);
  const [suffix, setSuffix] = useState("");
  // The editorial Gomoku guide has no translated equivalent yet.
  const route = pathname.startsWith("/guides/") ? "/" : pathname;
  return <details className="language-switcher" ref={menu}
    onToggle={event => { if (event.currentTarget.open) setSuffix(window.location.search + window.location.hash); }}
    onKeyDown={event => { if (event.key === "Escape" && menu.current) {
      menu.current.open = false; menu.current.querySelector("summary")?.focus();
    } }}>
    <summary aria-label={`${label}: ${names[locale]}`}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c5 5 5 13 0 18M12 3c-5 5-5 13 0 18"/></svg>
      <span>{locale.toUpperCase()}</span><span aria-hidden="true">⌄</span>
    </summary>
    <div className="language-menu" role="navigation" aria-label={label}>
      {routing.locales.map(next => <Link key={next} href={`${next === "en" ? pathname : route}${suffix}`}
        locale={next} prefetch={false} lang={next} dir={next === "ar" ? "rtl" : "ltr"}
        aria-current={locale === next ? "true" : undefined}>
        {names[next]}{locale === next && <span aria-hidden="true"> ✓</span>}
      </Link>)}
    </div>
  </details>;
}
