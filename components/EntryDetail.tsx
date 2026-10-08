import Link from "next/link";
import { kindLabel, statusLabel, type Entry } from "@/content/entries";

type LinkDef = { key: keyof Entry["links"]; label: string; primary?: boolean };

const linkDefs: LinkDef[] = [
  { key: "live", label: "Open app", primary: true },
  { key: "roblox", label: "Play on Roblox", primary: true },
  { key: "store", label: "Store page" },
  { key: "trailer", label: "Watch trailer" },
  { key: "repo", label: "Source" },
];

export default function EntryDetail({
  entry,
  backHref,
  backLabel,
}: {
  entry: Entry;
  backHref: string;
  backLabel: string;
}) {
  const links = linkDefs
    .map((d) => ({ ...d, href: entry.links[d.key] }))
    .filter((d): d is LinkDef & { href: string } => Boolean(d.href));

  return (
    <article className="mx-auto w-full max-w-4xl px-6 pb-20 pt-28 sm:pt-32">
      <Link
        href={backHref}
        className="text-sm text-muted transition-colors hover:text-accent"
      >
        ← {backLabel}
      </Link>

      <header className="mt-6">
        <p className="eyebrow mb-2">
          {kindLabel[entry.kind]} · {statusLabel[entry.status]} · {entry.year}
        </p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          {entry.name}
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">{entry.tagline}</p>

        {links.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-3">
            {links.map((l) =>
              l.primary ? (
                <a
                  key={l.key}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="int rounded-xl bg-gradient-to-r from-accent to-accent-hover px-5 py-2.5 text-sm font-semibold text-[#0a0b10] transition-shadow hover:shadow-[0_14px_34px_-10px_var(--color-accent)]"
                >
                  {l.label} ↗
                </a>
              ) : (
                <a
                  key={l.key}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="int rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {l.label} ↗
                </a>
              ),
            )}
          </div>
        )}
      </header>

      {entry.media.cover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={entry.media.cover}
          alt={`${entry.name} cover`}
          className="mt-10 w-full rounded-2xl border border-card-border"
        />
      )}

      <div className="mt-12 grid gap-12 md:grid-cols-[1fr_260px]">
        <div>
          <h2 className="eyebrow mb-3">Why it exists</h2>
          <p className="text-base leading-relaxed text-foreground">
            {entry.problem}
          </p>

          <h2 className="eyebrow mb-3 mt-10">What it does</h2>
          <div className="space-y-4 text-base leading-relaxed text-muted">
            {entry.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {entry.media.screenshots.length > 0 && (
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {entry.media.screenshots.map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="w-full rounded-xl border border-card-border"
                />
              ))}
            </div>
          )}
        </div>

        <aside className="space-y-8">
          <div>
            <h2 className="eyebrow mb-3">Highlights</h2>
            <ul className="space-y-2 text-sm leading-relaxed text-muted">
              {entry.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="eyebrow mb-3">Stack</h2>
            <ul className="flex flex-wrap gap-2">
              {entry.stack.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
}
