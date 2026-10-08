import Link from "next/link";
import Ledger from "./Ledger";
import { person, socials } from "@/content/site";
import { builds, games } from "@/content/entries";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto w-full max-w-4xl px-6 pt-32 pb-10 sm:pt-40 sm:pb-14"
    >
      <p className="eyebrow">
        {person.name} · {person.role}, PepsiCo · {person.location}
      </p>

      <h1 className="font-display mt-5 max-w-3xl text-[2.4rem] font-bold leading-[1.04] tracking-[-0.025em] text-foreground sm:text-6xl">
        Most of my side projects start as{" "}
        <span className="text-muted">
          “this should really just run itself.”
        </span>{" "}
        These do.
      </h1>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
        By day I run product for the ML and data platforms inside PepsiCo. By
        night I build the things below, and most of them have been running on
        their own for months.
      </p>

      <div className="mt-12">
        <Ledger entries={[...builds, ...games]} />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
        <Link href="/builds" className="link">
          All builds
        </Link>
        <Link href="/games" className="link">
          Games by Splitz Interactive
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
            className="text-muted-2 transition-colors hover:text-accent"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
