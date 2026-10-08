import Link from "next/link";
import { kindLabel, statusLabel, type Entry } from "@/content/entries";

const order: Record<Entry["status"], number> = {
  live: 0,
  "in-dev": 1,
  private: 2,
  archived: 3,
};

export function hrefFor(entry: Entry) {
  return `${entry.kind === "game" ? "/games" : "/builds"}/${entry.slug}`;
}

/**
 * The ledger: one ruled row per project, with its heartbeat and status.
 * Used in the hero and on the list pages.
 */
export default function Ledger({
  entries,
  heading = "Running now",
  sort = true,
}: {
  entries: Entry[];
  heading?: string;
  sort?: boolean;
}) {
  const rows = sort
    ? [...entries].sort((a, b) => order[a.status] - order[b.status])
    : entries;

  const cols =
    "grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_4.5rem_7.5rem]";

  return (
    <div className="ledger">
      <div className={`ledger-head eyebrow ${cols}`}>
        <span>{heading}</span>
        <span className="hidden sm:block">Heartbeat</span>
        <span className="hidden sm:block">Since</span>
        <span className="text-right sm:text-left">Status</span>
      </div>
      {rows.map((e, i) => (
        <Link
          key={e.slug}
          href={hrefFor(e)}
          className={`ledger-row ${cols}`}
          style={{ "--i": i } as React.CSSProperties}
        >
          <span className="min-w-0">
            <span className="name">{e.name}</span>
            <span className="ml-2 text-xs text-muted-2">{kindLabel[e.kind]}</span>
            <span className="mt-0.5 block truncate text-sm text-muted">
              {e.tagline}
            </span>
            {e.running && (
              <span className="mono mt-1 block text-xs text-muted-2 sm:hidden">
                {e.running}
              </span>
            )}
          </span>
          <span className="mono hidden text-xs text-muted sm:block">
            {e.running ?? "—"}
          </span>
          <span className="mono hidden text-xs text-muted-2 sm:block">
            {e.year.slice(-4)}
          </span>
          <span
            className={`mono whitespace-nowrap text-right text-xs sm:text-left status-${e.status}`}
          >
            <span className={`dot ${e.status}`} aria-hidden />
            {statusLabel[e.status]}
          </span>
        </Link>
      ))}
    </div>
  );
}
