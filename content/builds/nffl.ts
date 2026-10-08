import type { Entry } from "../entries";

export const nffl: Entry = {
  slug: "draft-tool",
  name: "Draft Tool",
  kind: "tool",
  status: "live",
  year: "2026",
  tagline: "A Chrome side panel that watches your Sleeper draft and ranks the board for your roster",
  problem:
    "Draft rankings are generic. They do not know your league's scoring, your keeper rules, or that superflex changes what a quarterback is worth. I fitted a value model to six seasons of my league's history and put it next to the draft board.",
  body: [
    "The extension opens as a Chrome side panel beside a live Sleeper draft, updates as picks land, and re-ranks the remaining players for the roster you have built so far. It works with any Sleeper league and ships with a mock draft for practice.",
    "A Python package fits the value model offline and bakes it into a JSON file the extension reads. The central finding: the league under-drafts quarterbacks in superflex, with a value plateau from QB8 to QB26 that most managers never exploit.",
    "In-season modules followed: start/sit, a waiver tool with FAAB bids learned from six seasons of history, a trade evaluator that values whole lineups rather than players, and an odds tab that simulates 2,000 seasons for playoff chances.",
  ],
  highlights: [
    "Value model fitted on six seasons and 2,004 team-weeks of league history",
    "Trade evaluator values lineups: a deal that looks +130 points on paper scored -42.6 in lineup terms",
    "2,000-season playoff simulation in the odds tab",
    "JavaScript and Python scoring kept in parity by tests",
  ],
  stack: ["Chrome MV3", "JavaScript", "Python", "Sleeper API"],
  links: {},
  media: { cover: "", screenshots: [] },
};
