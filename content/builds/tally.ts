import type { Entry } from "../entries";

export const tally: Entry = {
  slug: "tally",
  name: "Tally",
  kind: "app",
  status: "live",
  year: "2026",
  tagline: "Tracks every credit-card perk and credit before it resets",
  problem:
    "Premium cards bury hundreds of dollars a year in credits that reset monthly, quarterly, annually or on the card anniversary. Nobody remembers which ones they have used. Tally does.",
  body: [
    "Tally is a progressive web app with a seeded catalog of cards and their perks. You pick your cards, it lays out every credit with its reset cycle, and you mark each one used. Perks that trigger on their own are derived rather than logged, and each perk carries a verified-on date so you know how fresh the catalog entry is.",
    "Reminders arrive as web push before a credit expires. The reset-cycle math is duplicated on purpose between the client and the server, and a test suite pins both so they can never drift apart.",
    "Every issuer accent colour in the catalog clears WCAG AA contrast in both the light and dark theme, and the theme is applied by a head script before first paint so there is no flash.",
  ],
  highlights: [
    "Seven reset cycles, including anniversary and multi-year, pinned by tests",
    "Web push reminders with de-duplication per perk, period and tier",
    "33 issuer accent colours, all at or above 4.5:1 contrast",
    "Magic-link and Google sign-in, row-level security, live isolation tests",
  ],
  stack: ["Vanilla JS PWA", "Vercel Functions + Cron", "Supabase", "Web Push (VAPID)"],
  links: { live: "https://tally.sanjul-sharma.com" },
  media: { cover: "", screenshots: [] },
  featured: true,
};
