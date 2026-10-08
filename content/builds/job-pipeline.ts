import type { Entry } from "../entries";

export const jobPipeline: Entry = {
  slug: "job-search-pipeline",
  name: "Job Search Pipeline",
  kind: "pipeline",
  status: "live",
  year: "2026",
  tagline: "A daily scored shortlist of roles, from search to tracker sheet to inbox",
  problem:
    "Job boards return hundreds of postings a day and most are wrong on seniority, location or title. I wanted one email a day with the handful worth applying to, scored against rules I wrote down once.",
  body: [
    "Two pieces. An MCP server exposes job search and job detail tools over HTTP so Claude can use them as a connector. A scheduled pipeline searches, scores every posting against a written operating manual, writes the results to a tracker sheet and emails the shortlist.",
    "Scoring runs in two stages. A cheap model triages the whole batch, then a stronger model scores only the survivors on a six-dimension weighted rubric with hard gates for years-of-experience and geography. That cut a full run from about $15 to about $0.15.",
    "Expired postings are dropped before they cost anything, direct employer apply links are preferred over aggregator links, and searches retry and skip on failure so one bad call never kills the day's digest.",
  ],
  highlights: [
    "Two-stage scoring: about 100x cheaper per run",
    "Six-dimension rubric with hard drops, written as a versioned operating manual",
    "Runs unattended on a cron, writes a sheet and sends one email a day",
    "MCP server usable as a Claude connector",
  ],
  stack: ["Python", "FastMCP", "Claude API", "Google Sheets API", "Railway", "GitHub Actions"],
  links: {},
  media: { cover: "", screenshots: [] },
};
