import Link from "next/link";
import { kindLabel, statusLabel, type Entry } from "@/content/entries";

const statusClass: Record<Entry["status"], string> = {
  live: "text-accent-2",
  "in-dev": "text-accent",
  private: "text-muted-2",
  archived: "text-muted-2",
};

export default function EntryCard({
  entry,
  basePath,
}: {
  entry: Entry;
  basePath: "/builds" | "/games";
}) {
  return (
    <Link
      href={`${basePath}/${entry.slug}`}
      className={`card group flex flex-col p-6 ${entry.featured ? "card-featured" : ""}`}
    >
      <div className="mb-4 flex items-center justify-between gap-4 text-xs">
        <span className="font-medium uppercase tracking-wider text-muted-2">
          {kindLabel[entry.kind]}
        </span>
        <span className={`font-medium ${statusClass[entry.status]}`}>
          {statusLabel[entry.status]}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
        {entry.name}
      </h3>
      <p className="mt-1 flex-1 text-sm leading-relaxed text-muted">
        {entry.tagline}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {entry.stack.slice(0, 4).map((t) => (
          <li key={t} className="tag">
            {t}
          </li>
        ))}
      </ul>
    </Link>
  );
}
