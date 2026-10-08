import type { Entry } from "../entries";

export const forge: Entry = {
  slug: "forge",
  name: "Forge",
  kind: "app",
  status: "live",
  year: "2026",
  tagline: "An AI workout coach that writes your week and then tracks it",
  running: "PWA on Vercel, daily use",
  problem:
    "Every workout app either hands you a generic template or charges for a coach. I wanted a plan built from my own body metrics, my goal, and the equipment actually in front of me, and I wanted friends to use it without an API key.",
  body: [
    "Forge is a mobile-first progressive web app. You enter your metrics, your goal and what your gym has, and it returns a structured weekly plan. You can ask it to refine the plan in plain language or swap a single exercise, and it keeps the rest intact.",
    "Logging is per set with progressive-overload suggestions and estimated one-rep-max personal records. Food logging uses Open Food Facts, barcode scanning and AI estimates for anything without a label. Calories from exercise only count once the workout is marked done.",
    "Gyms have bad signal, so every write goes to an offline outbox and drafts restore on reload. The data layer talks to Supabase over plain REST because the official client deadlocked on iPhone Safari during session refresh.",
  ],
  highlights: [
    "Plans generated as validated JSON, refined by request, with single-exercise swaps",
    "Per-set logging, overload hints and estimated-1RM PRs",
    "Offline outbox and draft restore so no set is lost",
    "Food log with barcode scan, Open Food Facts and AI estimates",
    "Magic-link auth, row-level security on every table, schema migrations on push",
  ],
  stack: ["Vanilla JS PWA", "Vercel Functions", "Claude API", "Supabase", "GitHub Actions"],
  links: { live: "https://forge.sanjul-sharma.com" },
  media: { cover: "", screenshots: [] },
  featured: true,
};
