"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/i18n/routing";

/**
 * Header search box. Submits to /<locale>/search?q=... as a plain GET form so
 * it works without JS and keeps the results shareable/crawlable.
 *
 * Kept as a controlled input only so the icon can reflect the empty state;
 * the actual navigation is a native form submit.
 */
export function SearchBar({
  locale,
  placeholder,
  label,
  size = "default",
}: {
  locale: string;
  placeholder: string;
  label: string;
  size?: "default" | "large";
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  return (
    <form
      className={`search-bar search-bar--${size}`}
      action={`/${locale}/search`}
      method="get"
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        const q = query.trim();
        router.push(`/${locale}/search${q ? `?q=${encodeURIComponent(q)}` : ""}`);
      }}
    >
      <svg
        className="search-bar-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
      <input
        type="search"
        name="q"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        aria-label={label}
        autoComplete="off"
      />
    </form>
  );
}