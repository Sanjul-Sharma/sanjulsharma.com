import type { Entry } from "../entries";

export const bball26: Entry = {
  slug: "dynasty-league-bot",
  name: "Dynasty League Bot",
  kind: "bot",
  status: "live",
  year: "2024 – 2026",
  tagline: "A Discord bot that runs a 30-team dynasty basketball league end to end",
  running: "24/7 on Railway, v37.119",
  problem:
    "I commission a 30-team dynasty fantasy basketball league with contracts, a salary cap, restricted free agency and a rookie draft. Running that by hand meant spreadsheets, arguments and late nights. Now the bot runs it.",
  body: [
    "Every transaction in the league goes through the bot: multi-team trades with board voting, silent restricted-free-agent bidding resolved against the cap, batch free-agent auctions, the rookie draft, contract re-signs and future-pick tracking. A Google Sheet stays the public source of truth for rosters and cap space, and the bot syncs rosters to the league platform.",
    "It also writes. AI generates power rankings, breaking-news trade headlines and league digests, and a projections module pulls per-game fantasy points from the league platform to inform tenders.",
    "The code base is about 48,000 lines of Python in strict layers: thin command cogs, service modules with the business logic, persistent Discord views keyed by custom id, and a SQLite store with migrations. It has shipped more than 37 major versions.",
  ],
  highlights: [
    "Trades, RFA bidding, auctions, draft and re-signs enforced against a live salary cap",
    "Google Sheet as the public database, synced both ways",
    "AI-written rankings, headlines and digests",
    "About 48k lines, 37+ major versions, push-to-deploy, runs 24/7",
  ],
  stack: ["Python 3.13", "discord.py", "SQLite", "Google Sheets API", "Claude API", "Railway"],
  links: {},
  media: { cover: "", screenshots: [] },
  featured: true,
};
