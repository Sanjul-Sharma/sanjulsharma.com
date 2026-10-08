// ============================================================================
//  PROJECT ENTRIES
//  One file per project under content/builds/ and content/games/.
//  Add a project: create the file, export it, and list it in the arrays below.
//  Images go in /public/builds/<slug>/ (or /public/games/<slug>/).
// ============================================================================

export type EntryKind = "app" | "bot" | "tool" | "pipeline" | "game" | "content";
export type EntryStatus = "live" | "in-dev" | "private" | "archived";

export type Entry = {
  slug: string;
  name: string;
  kind: EntryKind;
  status: EntryStatus;
  year: string;
  /** One line on the card. */
  tagline: string;
  /** Heartbeat for the ledger: cadence, version, host. Short. */
  running?: string;
  /** Why it exists. Shown first on the detail page. */
  problem: string;
  /** Paragraphs for the detail page. */
  body: string[];
  /** Bullets. Lead with numbers where they exist. */
  highlights: string[];
  stack: string[];
  links: {
    live?: string;
    roblox?: string;
    repo?: string;
    trailer?: string;
    store?: string;
  };
  media: {
    /** Path under /public, or empty for a gradient placeholder. */
    cover: string;
    screenshots: string[];
    video?: string;
  };
  featured?: boolean;
};

export const kindLabel: Record<EntryKind, string> = {
  app: "Web app",
  bot: "Discord bot",
  tool: "Tool",
  pipeline: "Pipeline",
  game: "Game",
  content: "Content",
};

export const statusLabel: Record<EntryStatus, string> = {
  live: "Live",
  "in-dev": "In development",
  private: "Private",
  archived: "Archived",
};

import { forge } from "./builds/forge";
import { tally } from "./builds/tally";
import { bball26 } from "./builds/bball26";
import { nffl } from "./builds/nffl";
import { jobPipeline } from "./builds/job-pipeline";
import { ps5Tracker } from "./builds/ps5-tracker";
import { budget } from "./builds/budget";
import { eggToTheTop } from "./games/egg-to-the-top";
import { gatefall } from "./games/gatefall";

export const builds: Entry[] = [
  forge,
  tally,
  bball26,
  nffl,
  jobPipeline,
  ps5Tracker,
  budget,
];

export const games: Entry[] = [eggToTheTop, gatefall];

export const featured: Entry[] = [...games, ...builds].filter((e) => e.featured);

export function findBuild(slug: string): Entry | undefined {
  return builds.find((e) => e.slug === slug);
}

export function findGame(slug: string): Entry | undefined {
  return games.find((e) => e.slug === slug);
}
