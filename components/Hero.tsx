import Link from "next/link";
import { person, socials } from "@/content/site";

/** Cover: who this is, in three screens' worth of reading or less. */
export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto w-full max-w-4xl px-6 pt-32 pb-8 sm:pt-44 sm:pb-12"
    >
      <div className="flex items-start justify-between gap-8">
        <div className="min-w-0">
          <p className="eyebrow">
            {person.role} · PepsiCo · {person.location}
          </p>
          <h1 className="font-display mt-4 text-[3.4rem] font-extrabold leading-[0.95] tracking-[-0.035em] text-foreground sm:text-[6.5rem]">
            {person.name}
          </h1>
        </div>
        {person.avatarUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={person.avatarUrl}
            alt={person.name}
            className="mt-2 hidden h-24 w-24 flex-shrink-0 rounded-full border border-border object-cover sm:block sm:h-28 sm:w-28"
          />
        )}
      </div>

      <p className="font-display mt-8 max-w-2xl text-xl font-semibold leading-snug tracking-[-0.01em] text-foreground sm:text-[1.7rem]">
        {person.identity}
      </p>

      <div className="mt-7 max-w-xl space-y-4 text-base leading-relaxed text-muted">
        {person.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
        <Link href="/#work" className="btn">
          See the work
        </Link>
        <Link href="/builds" className="link">
          Builds
        </Link>
        <Link href="/games" className="link">
          Games
        </Link>
        <a
          href={person.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Resume
        </a>
        <span className="hidden text-border sm:inline">|</span>
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="mono text-xs uppercase tracking-wider text-muted-2 transition-colors hover:text-accent"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
