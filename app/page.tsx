import { redirect } from "next/navigation";
import { routing } from "@/i18n/routing";

// Root "/" is redirected to the default locale by the middleware,
// but this explicit redirect avoids a 404 if middleware is bypassed.
export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}
