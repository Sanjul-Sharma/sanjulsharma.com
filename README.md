# Personal Website

A dark, techy personal site built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**.
Highlights your resume, projects, and achievements.

## Editing your content

**You only need to edit one file:** [`content/site.ts`](content/site.ts).

It holds everything shown on the site:

| Section        | What to edit                                              |
| -------------- | --------------------------------------------------------- |
| Hero / About   | `person` — name, role, tagline, bio, location, email      |
| Nav            | `navLinks`                                                 |
| Social links   | `socials` — GitHub, LinkedIn, email, X, etc.              |
| Experience     | `experience` — your resume / work history                 |
| Projects       | `projects` — set `featured: true` for a full-width card   |
| Achievements   | `achievements` — awards, talks, milestones                |
| Skills         | `skills` — grouped skill tags                              |

### Resume PDF

Drop your resume at `public/resume.pdf` (already referenced by the "Resume"
button). To use a different name, update `person.resumeUrl` in `content/site.ts`.

### Theme colors

Accent colors and the dark palette live at the top of
[`app/globals.css`](app/globals.css) as CSS variables (`--accent`, `--background`, …).

## Running locally

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

> Node is managed via nvm on this machine. If `node` isn't found in a new
> terminal, run `nvm use default` (or just open a fresh terminal — the loader
> is in `~/.zshrc`).

## Deploying

The site is fully static and deploys anywhere. Easiest option is
[Vercel](https://vercel.com): push this repo to GitHub, import it, and it ships
with zero config. Netlify and GitHub Pages also work.
