# Portfolio plan: sanjul-sharma.com

Written 2026-10-08. Turns the current resume site into a portfolio that
shows every app, bot, tool and game, hosts the apps under the domain, and
gives the games their own section.

## Where things stand

The site is `Sanjul-Sharma/sanjulsharma.com` on GitHub (public), now
cloned to `A:\sanjulsharma.com`. Next.js 16, React 19, Tailwind 4, Vercel.
One scrolling page: hero, about, skills, experience, two "Work" cards, two
"Hobby Builds" cards, a photo strip, achievements, contact. All content sits
in `content/site.ts`. Dark and light themes, an OG image, and a
"Currently" ticker already exist.

Problems with the current site as a portfolio:

- It is a resume with a hobby footnote. Two side projects are listed. Ten
  exist.
- One page cannot hold ten projects with real depth. Every project needs
  its own page with screenshots, a problem statement and a link.
- The Resume button points at `/resume.pdf`, which is not in `public/`.
  It 404s today.
- Titles disagree. The hero says Senior Platform Product Manager, the
  experience block says Senior Data Product Manager and claims a promotion
  from "Data Product Associate Manager". Memory records the confirmed
  history as Data Product Manager (Jan 2023 to Mar 2025), then Senior Data
  Product Manager (Mar 2025 on). The TCS role was Software Engineer, not
  Cloud Engineer.
- The look is a Create-Next-App template with a palette swap. It does not
  say anything about the person.
- No links out to anything live.

## What goes on the site

| Project | Kind | Status | Public link | Where it lives |
|---|---|---|---|---|
| Egg to the Top | Roblox game, Splitz Interactive | Public since Oct 2026, 12 visits | roblox.com/games/70630232907578 | Roblox Studio |
| Gatefall | Roblox game, in development | Private place, M3 in progress | none yet | Roblox Studio, docs in A:\Gatefall |
| Forge | AI workout-coach PWA | Live, in use | Vercel project `workout-app` | A:\workout-app |
| Tally | Credit-card perk tracker PWA | Live | tally-perks.vercel.app | A:\perks-app |
| Bball26 bot | Discord bot, 30-team dynasty league | Live, v37.119 | none (private league) | A:\Bball26\bot |
| NFFL draft tool | Chrome side-panel extension + Python model | Shipped, v1.4.0 | none | A:\nffl |
| Job-search pipeline | MCP server + scored daily digest | Live on Railway | none (secret URL) | A:\linkedin-mcp-railway |
| PS5 Pro tracker | Retailer stock/price worker | Deployed | none worth linking | A:\ps5-tracker |
| Budget automation | Apps Script + iOS widget | Live, daily use | none (private) | A:\Budget |
| Mochi's Haul | Daily blind-box short-form series | Posting since 2026-10-02 | tiktok.com/@mochis.haul | D:\TikTok |

Work case studies (PepsiCo demand report, ML forecasting platform) stay.
Dad's stock tracker stays off the site. It is family finance.

## Information architecture

Move from one page to a small multi-page site. Keep the single-page feel
on the home page, add real pages underneath.

```
/                 Home. Who he is, three featured things, short work block, contact.
/work             PM case studies (the two existing cards, room for more).
/builds           Grid of every app, bot and tool. Filter by kind and status.
/builds/[slug]    One page per project: problem, what it does, how it works,
                  screenshots, stack, status, links.
/games            Splitz Interactive section. Studio intro, then one block per game.
/games/[slug]     Egg to the Top: trailer, description, store art, Play button.
                  Gatefall: dev diary, concept art, "in development".
/freetime         Photography strip, plus Mochi's Haul if he wants it public.
/resume           Serves the PDF and shows the experience list.
```

Nav: Work, Builds, Games, Freetime, Contact. Keep the theme toggle.

## Hosting the apps under the domain

Use subdomains, not path rewrites.

- `forge.sanjul-sharma.com` for Forge
- `tally.sanjul-sharma.com` for Tally

Why subdomains: both apps are PWAs with `scope: "/"` and a service
worker at the root. A path rewrite such as `/apps/forge` breaks the
service-worker scope, relative asset paths, the `start_url`, Supabase
magic-link redirects and Tally's Vercel cron. A subdomain changes none of
that. DNS is already on Vercel nameservers, so adding a domain to each
Vercel project is one step and Vercel writes the record itself.

Per-app checklist when the subdomain goes live:

1. Add the domain to the Vercel project (`workout-app`, `tally-perks`).
2. Supabase, Authentication, URL configuration: set Site URL to the new
   origin and add it to the redirect allow list. Keep the old
   `vercel.app` origin in the list for a week so open sessions still work.
3. Tally: Google OAuth keeps the Supabase callback URL, nothing to change
   there. Existing push subscriptions are tied to the old origin, so users
   re-enable reminders once. VAPID subject can stay.
4. Update the `url` field in the site's project entry.
5. Add "Open app" buttons on the project pages. The portfolio links out.
   It does not iframe the apps.

Optional later: `splitz.sanjul-sharma.com` pointing at `/games`, once a
studio domain matters.

## Content model

Replace the flat `projects` array with one file per project under
`content/builds/` and `content/games/`, all typed the same way:

```ts
type Entry = {
  slug: string;
  name: string;
  kind: "app" | "bot" | "tool" | "pipeline" | "game" | "content";
  status: "live" | "in-dev" | "private" | "archived";
  year: string;
  tagline: string;          // one line on the card
  problem: string;          // why it exists
  body: string[];           // paragraphs on the detail page
  highlights: string[];     // bullets with numbers where they exist
  stack: string[];
  links: { live?: string; roblox?: string; repo?: string; trailer?: string; store?: string };
  media: { cover: string; screenshots: string[]; video?: string };
  featured?: boolean;
};
```

Every page is static. No CMS, no MDX dependency. Adding a project means
adding one file and dropping images in `public/builds/<slug>/`.

## Redesign

Yes, redesign. The template look cannot carry a games section and seven
app pages without reading as a listing. The stack stays (Next.js 16,
Tailwind 4, Vercel). The visual system and layout get rebuilt.

Direction: two identities under one roof.

- **The site** reads as a builder's notebook. Off-white paper and near-black
  ink, one signal accent, a display face with character, generous
  numbered sections, project pages laid out like case files. Dark mode is
  the same system inverted. This replaces the azure/jade template palette.
- **The games section** switches to the Splitz Interactive system that
  already exists: ink `#0E0E13`, off-white `#F4F1EA`, coral `#FF5140`,
  violet `#7A5CFF`, the 118-degree split seam, Unbounded for display and
  Manrope for body. The split-S emblem and cover PNGs are in
  `OneDrive\Pictures\Roblox\SplitzInteractive`. The two palettes share the
  same ink and off-white, so the handoff feels deliberate.

Process: before coding, produce three home-page directions as static HTML
mocks (claude-design skill, Opus), pick one, then build. This is the one
place to spend design effort. The project pages and the games pages
follow from the chosen system.

Typography proposal for the site half: Bricolage Grotesque for display,
Geist for body, Geist Mono for labels. Final pick happens at the mock
stage.

## Assets to gather

Exists already:

- Egg to the Top: icon_512, four 1920x1080 thumbnails, the 10s in-engine
  trailer MP4, the 861-character store description. All in
  `OneDrive\Pictures\Roblox\EggToTheTop`. Do not use the old AI mascot art.
- Splitz emblem and covers.
- 55 photos in `public/photography`.

Needs capturing:

- Forge and Tally: four phone-frame screenshots each (light and dark).
- Bball26 bot: Discord screenshots of a trade vote, an RFA resolution and
  a power-ranking post. Blur manager names.
- NFFL: the side panel mid-draft, the odds tab.
- Job pipeline: one digest email, the architecture diagram (draw it).
- PS5 tracker: the Discord alert.
- Budget widget: the iOS home-screen widget with amounts hidden.
- Gatefall: three Studio screenshots of the current build.
- Resume PDF: copy the master from Downloads into `public/resume.pdf`.

## Phases

Each phase is one session. Sonnet for the edit-heavy ones, Opus for
design.

1. **Content and structure.** Fix titles and dates. Add the resume PDF.
   Add the Google Cloud ACE cert. Build the `Entry` model, the
   `/builds`, `/games` and detail routes, and move the existing cards
   over. Ship with the current theme so the site never goes dark. Point
   Forge and Tally at their subdomains.
2. **Design.** Three home mocks, pick one, build the design system as
   CSS tokens and shared components. Rebuild home, nav, footer.
3. **Builds pages.** Write seven entries from the inventory. Bring in
   screenshots. Each page gets a per-route OG image.
4. **Games section.** Splitz studio intro, Egg to the Top page with
   trailer and Play button, Gatefall dev page.
5. **Polish.** Sitemap, Vercel Analytics, Lighthouse on mobile, keyboard
   and reduced-motion checks, a final text pass on every page.

## Decisions needed before phase 1

- Public title: Senior Data Product Manager (confirmed) or keep "Platform".
- Which private repos get linked. Forge, Tally, Bball26 and the jobs MCP
  are private on GitHub. Linking means making them public or linking
  nothing.
- Whether Mochi's Haul belongs on a professional site, and under which
  section.
- Whether Gatefall is shown at all before it is playable.

## Housekeeping found on the way

- The Forge checkout's git remote URL embeds a GitHub personal access
  token. Memory already flags that token as exposed. Rotate it and reset
  the remote to the plain HTTPS URL before any of this repo's history is
  shared.
- The jobs MCP URL carries its auth token in the path. Never put it on
  the site.
