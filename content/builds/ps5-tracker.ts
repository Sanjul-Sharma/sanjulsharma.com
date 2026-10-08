import type { Entry } from "../entries";

export const ps5Tracker: Entry = {
  slug: "stock-tracker",
  name: "Stock Tracker",
  kind: "tool",
  status: "live",
  year: "2026",
  tagline: "Watches retailers for a console and pings Discord when the price is right",
  running: "worker on Railway",
  problem:
    "Stock alert services are fast and wrong. They report a bot challenge as out of stock and go quiet when a retailer changes its page. I wanted one that never lies about what it saw.",
  body: [
    "A single worker checks a handful of retailers on a schedule and fires a Discord webhook when the item is both in stock and at or under a price I set. Each retailer has its own adapter, and the adapter reports exactly what it observed: in stock, out of stock, blocked, or broken.",
    "That honesty is the design goal. A retailer serving a bot challenge is reported as blocked, never as out of stock, and an adapter that stops parsing says so instead of returning nothing.",
    "Some retailers took work. One hides its product API behind a 403 for outside callers, so the adapter reads the rendered storefront. Another detects the default headless browser, so the worker launches full Chromium.",
  ],
  highlights: [
    "Per-retailer adapters that report blocked and broken as distinct states",
    "Full Chromium through Playwright to pass headless detection",
    "Discord webhook alerts with price thresholds for new and refurbished",
  ],
  stack: ["Python", "Playwright", "Postgres", "Railway"],
  links: {},
  media: { cover: "", screenshots: [] },
};
