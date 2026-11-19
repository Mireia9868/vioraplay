import { NextResponse } from "next/server";
import { isEeaCountry } from "@/lib/geo";

// Per-visitor answer: must never be cached by the CDN and shared between users.
export const dynamic = "force-dynamic";

/**
 * Reports whether the caller is an EEA/UK visitor so the client can decide
 * which consent UI to show:
 *   - EEA/UK  → Google's certified CMP only (it is the ad-consent authority)
 *   - elsewhere → the site's own analytics banner
 *
 * Country comes from Cloudflare's `cf-ipcountry`, which survives the Worker
 * proxy hop. No IP is logged and nothing is stored.
 */
export function GET(request: Request) {
  const country = (request.headers.get("cf-ipcountry") ?? "").toUpperCase();
  return NextResponse.json(
    { country: country || null, eea: isEeaCountry(country) },
    { headers: { "cache-control": "private, no-store" } },
  );
}
