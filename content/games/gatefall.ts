import type { Entry } from "../entries";

export const gatefall: Entry = {
  slug: "gatefall",
  name: "Gatefall",
  kind: "game",
  status: "in-dev",
  year: "2026",
  tagline: "Fight, fill the bag, run it back through the gate before night seals it",
  running: "milestone 3 of 4",
  problem:
    "Most Roblox dungeon games bank your loot the moment it drops. Gatefall makes you carry it home. Night seals the gate every cycle, drops double, and anything still in your bag is at risk.",
  body: [
    "A shared-corridor dungeon with a home base. You fight through areas, fill a weighted loot bag, and run it back through the gate to bank it. Then you smelt ore, forge upgrades, and go deeper. A 60-second night seals the gate and doubles drops, which is where the good runs and the bad decisions happen.",
    "Three classes so far: Warrior, Archer and Medic. Pets hatch from eggs with rarity tiers and mutations, and the home has a pen, a smelter and a forge. Elite mobs, a rebirth loop, a daily reward and a weekly Blood Moon event sit on top.",
    "The visual direction is Lantern Gothic: dark slate, warm lantern pools, gold for anything important, and a different accent per biome. Two 20-area biomes with bosses are in progress.",
  ],
  highlights: [
    "Loot is unbanked until you run it back; night doubles drops and the risk",
    "Three classes, pets with rarity and mutations, home base with smelter and forge",
    "Design driven by research on the Roblox top charts",
    "Server-authoritative, with a built-in debug bridge for fast iteration",
  ],
  stack: ["Luau", "Roblox Studio"],
  links: {},
  media: { cover: "", screenshots: [] },
};
