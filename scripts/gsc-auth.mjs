#!/usr/bin/env node
/**
 * One-time OAuth bootstrap for the Search Console + GA4 reporting scripts.
 *
 * Prerequisite: an OAuth client of type "Desktop app" downloaded from
 * Google Cloud → APIs & Services → Credentials, saved as:
 *   secrets/oauth-client.json
 *
 * Run:
 *   npm run gsc:auth
 *
 * It starts a loopback server on 127.0.0.1:53682, opens the consent screen,
 * exchanges the code and writes secrets/token.json (refresh token included).
 * Nothing is sent anywhere except Google's OAuth endpoints.
 */
import fs from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { exec } from "node:child_process";
import { randomBytes } from "node:crypto";

const ROOT = process.cwd();
const CLIENT_FILE = path.join(ROOT, "secrets/oauth-client.json");
const TOKEN_FILE = path.join(ROOT, "secrets/token.json");
const PORT = 53682;
const REDIRECT_URI = `http://127.0.0.1:${PORT}/oauth2callback`;
const SCOPES = [
  "https://www.googleapis.com/auth/webmasters.readonly",
  "https://www.googleapis.com/auth/analytics.readonly",
];

let raw;
try {
  raw = JSON.parse(await fs.readFile(CLIENT_FILE, "utf8"));
} catch {
  console.error("Missing secrets/oauth-client.json.");
  console.error("Create a Desktop OAuth client and save the JSON there — see docs/gsc-api-setup.md");
  process.exit(2);
}
const client = raw.installed ?? raw.web;
if (!client?.client_id || !client?.client_secret) {
  console.error("secrets/oauth-client.json is not a Desktop OAuth client.");
  process.exit(2);
}

const state = randomBytes(16).toString("hex");
const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
authUrl.searchParams.set("client_id", client.client_id);
authUrl.searchParams.set("redirect_uri", REDIRECT_URI);
authUrl.searchParams.set("response_type", "code");
authUrl.searchParams.set("scope", SCOPES.join(" "));
authUrl.searchParams.set("access_type", "offline");
authUrl.searchParams.set("prompt", "consent");
authUrl.searchParams.set("state", state);

console.log("Open this URL and approve access:\n");
console.log(authUrl.toString());
console.log("\nWaiting for the callback on " + REDIRECT_URI + " ...");
exec(`open "${authUrl.toString()}"`);

const code = await new Promise((resolve, reject) => {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://127.0.0.1:${PORT}`);
    if (url.pathname !== "/oauth2callback") return;
    const error = url.searchParams.get("error");
    const returnedState = url.searchParams.get("state");
    const authCode = url.searchParams.get("code");
    res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
    if (error) {
      res.end(`Authorization failed: ${error}`);
      server.close();
      reject(new Error(error));
      return;
    }
    if (returnedState !== state || !authCode) {
      res.end("State mismatch or missing code. Check the terminal.");
      server.close();
      reject(new Error("state mismatch"));
      return;
    }
    res.end("Authorization received. You can close this tab.");
    server.close();
    resolve(authCode);
  });
  server.listen(PORT, "127.0.0.1");
  setTimeout(() => {
    server.close();
    reject(new Error("Timed out after 5 minutes"));
  }, 5 * 60 * 1000).unref();
});

const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
  method: "POST",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({
    code,
    client_id: client.client_id,
    client_secret: client.client_secret,
    redirect_uri: REDIRECT_URI,
    grant_type: "authorization_code",
  }),
});

if (!tokenRes.ok) {
  console.error("Token exchange failed:", await tokenRes.text());
  process.exit(1);
}

const token = await tokenRes.json();
if (!token.refresh_token) {
  console.error("No refresh_token returned. Revoke the app's access and retry.");
  process.exit(1);
}

await fs.mkdir(path.dirname(TOKEN_FILE), { recursive: true });
await fs.writeFile(
  TOKEN_FILE,
  JSON.stringify(
    {
      refresh_token: token.refresh_token,
      access_token: token.access_token,
      expiry: Date.now() + (token.expires_in ?? 3600) * 1000,
      scope: token.scope,
    },
    null,
    2
  ) + "\n"
);
console.log(`Saved ${path.relative(ROOT, TOKEN_FILE)}. Next: npm run gsc:report`);
