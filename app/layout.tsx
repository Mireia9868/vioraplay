import { ReactNode } from "react";

// Pass-through root layout. The <html>/<body> tags live in app/[locale]/layout.tsx
// so that next-intl can set the correct lang attribute per locale.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
