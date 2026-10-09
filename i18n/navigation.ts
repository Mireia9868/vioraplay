import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware navigation helpers (replaces next/link, next/router).
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
