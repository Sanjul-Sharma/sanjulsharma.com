import type { Entry } from "../entries";

export const eggToTheTop: Entry = {
  slug: "egg-to-the-top",
  name: "Egg to the Top",
  kind: "game",
  status: "live",
  year: "2026",
  tagline: "You're an egg. The baskets are swinging. Get to the top.",
  running: "live on Roblox, 16-player servers",
  problem:
    "A remake of an arcade climber I played as a kid: an egg rides a swaying basket, you time one hop to the next basket, and a miss sends you a long way back down. One button, no excuses.",
  body: [
    "Climb through four skies. Meadow is calm. Dusk brings birds. Storm brings wind. Aurora gives you baskets that crack under your feet. Grab a shield, a magnet or a rocket on the way up.",
    "Battle Royale puts ten players on one tower and the last egg climbing wins. Duels run 1v1 and four-player races. Party codes drop a group of friends into the same round, and the best climbs go up on the lobby wall for the whole server.",
    "Under the hood the economy is server-authoritative: one shared shop definition module, a single action remote, session-locked saves, rate limiting and idempotent purchase handling. Retention systems include a 50-level track, a free season pass every 28 days, daily quests and streaks, a rotating shop and referral rewards. The lobby is an arcade with real cabinet meshes and a prize shop.",
  ],
  highlights: [
    "Solo, 1v1, 4-player and 10-player Battle Royale modes, all server-run",
    "11 egg skins, 15 trails, 5 worlds, pets, emotes and titles across 50 levels",
    "Four biomes with distinct hazards and per-mode music",
    "Server-authoritative economy with idempotent receipts and funnel analytics",
    "Opens on the Splitz Interactive splash",
  ],
  stack: ["Luau", "Roblox Studio", "DataStore", "MarketplaceService", "AnalyticsService"],
  links: { roblox: "https://www.roblox.com/games/70630232907578" },
  media: { cover: "", screenshots: [] },
  featured: true,
};
