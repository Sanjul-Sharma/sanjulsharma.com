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
    <article className="mx-auto w-full max-w-4xl px-6 pb-24 pt-28 sm:pt-32">
      <Link href={backHref} className="mono text-xs text-muted-2 hover:text-accent">
        ← {backLabel}
      </Link>

      <header className="mt-8 border-b border-foreground pb-8">
        <p className="eyebrow">
          <span className={`status-${entry.status}`}>
            <span className={`dot ${entry.status}`} aria-hidden />
            {statusLabel[entry.status]}
          </span>
          <span className="mx-2">·</span>
          {kindLabel[entry.kind]}
          <span className="mx-2">·</span>
          {entry.year}
          {entry.running && (
            <>
              <span className="mx-2">·</span>
              {entry.running}
            </>
          )}
        </p>
        <h1 className="font-display mt-4 text-4xl font-bold leading-[1.02] tracking-[-0.025em] text-foreground sm:text-6xl">
          {entry.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-snug text-muted">
          {entry.tagline}
        </p>

        {links.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-3">
            {links.map((l) => (
              <a
                key={l.key}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={l.primary ? "btn" : "btn btn-ghost"}
              >
                {l.label} <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        )}
      </header>

      {entry.media.cover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={entry.media.cover}
          alt={`${entry.name} cover`}
          className="mt-10 w-full rounded-lg border border-border"
        />
      )}

      <div className="mt-12 grid gap-12 md:grid-cols-[minmax(0,1fr)_240px]">
        <div>
          <h2 className="eyebrow mb-3">Why it exists</h2>
          <p className="text-lg leading-relaxed text-foreground">
            {entry.problem}
          </p>

          <h2 className="eyebrow mb-3 mt-12">What it does</h2>
          <div className="space-y-5 text-base leading-relaxed text-muted">
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
                  className="w-full rounded-lg border border-border"
                />
              ))}
            </div>
          )}
        </div>

        <aside className="space-y-10 md:border-l md:border-border md:pl-8">
          <div>
            <h2 className="eyebrow mb-3">Highlights</h2>
            <ul className="space-y-3 text-sm leading-relaxed text-muted">
              {entry.highlights.map((h) => (
                <li key={h} className="border-b border-border pb-3 last:border-0">
                  {h}
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
