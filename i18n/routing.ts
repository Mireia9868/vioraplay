import { defineRouting } from "next-intl/routing";

// MVP target markets: non-English high-volume (ID/BR/TR/VI) + EN placeholder.
export const routing = defineRouting({
  locales: ["en", "id", "pt", "tr", "vi"],
  defaultLocale: "en",
});

export type Locale = (typeof routing.locales)[number];
