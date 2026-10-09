import { getAllGames, getCategories } from "@/lib/games";

export const dynamic = "force-static";

// GEO: machine-readable index for LLM crawlers (ChatGPT/Perplexity/Gemini).
// Keep this updated whenever the catalog changes.
export function GET() {
  const cats = getCategories().map((c) => `- ${c.name}`).join("\n");
  const games = getAllGames()
    .map((g) => `- ${g.title} (${g.category})`)
    .join("\n");

  const body = `# VioraPlay
Free HTML5 browser games. No download, no install.

## Categories
${cats}

## Popular Games
${games}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
