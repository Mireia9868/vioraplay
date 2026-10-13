"use client";
import { Link, usePathname } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
export function SiteNav({labels}: {labels: {home:string; categories:string; language:string}}) {
  const pathname = usePathname();
  return <nav className="site-nav">{([['/', labels.home], ['/categories', labels.categories]] as const).map(([href,label]) => <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>{label}</Link>)}<LanguageSwitcher label={labels.language} /></nav>;
}
