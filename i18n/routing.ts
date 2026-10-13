import { defineRouting } from "next-intl/routing";

// Language versions: country priorities are measured separately in GSC/revenue.
export const routing = defineRouting({
  locales: ["en", "id", "pt", "tr", "vi", "es", "pl", "ar"],
  defaultLocale: "en",
});

export type Locale = (typeof routing.locales)[number];
