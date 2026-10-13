"use client";
import { Link, usePathname } from "@/i18n/navigation";
export function SiteNav({labels}: {labels: {home:string; categories:string; search:string}}) {
  const pathname = usePathname();
  return <nav className="site-nav">{([['/', labels.home], ['/categories', labels.categories], ['/search', labels.search]] as const).map(([href,label]) => <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>{label}</Link>)}</nav>;
}
