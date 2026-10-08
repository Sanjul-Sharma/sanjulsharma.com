import type { Entry } from "../entries";

export const budget: Entry = {
  slug: "budget-automation",
  name: "Privacy-First Budget",
  kind: "pipeline",
  status: "private",
  year: "2025 – 2026",
  tagline: "Budget automation that never hands financial data to a third-party app",
  running: "hourly trigger, 2 accounts",
  problem:
    "I wanted automated budgeting without giving a third-party app read access to my bank accounts. The transaction alerts my banks already email me contain everything a budget needs.",
  body: [
    "A Google Apps Script project reads bank and card alert emails on an hourly trigger, parses each transaction and writes it to a Google Sheet. An AI layer categorises new merchants and learns from corrections. The data never leaves my own Google account.",
    "An iOS home-screen widget, built with Scriptable, shows spending, savings goals and a pace view that flags whether the month is running hot or on track. A net-worth tab and a rolling travel fund sit alongside.",
    "Two silent failures shaped the current version: an input band that overflowed and overwrote rows, and a mail search that dropped everything past a 150-thread cap. Both now have guards and a watchdog email, plus a weekly backup to Drive.",
  ],
  highlights: [
    "Zero third-party access to accounts; transactions come from alert emails",
    "Self-learning categorisation with message-id de-duplication",
    "iOS widget with a live pace indicator",
    "Watchdog alerts and weekly backups after two root-cause fixes",
  ],
  stack: ["Google Apps Script", "Google Sheets", "Scriptable (iOS)", "Claude API"],
  links: {},
  media: { cover: "", screenshots: [] },
};
