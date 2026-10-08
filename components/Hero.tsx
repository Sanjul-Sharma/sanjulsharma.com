import Link from "next/link";
import RotatingWord from "./RotatingWord";
import { person, socials } from "@/content/site";

const things = ["bots", "platforms", "pipelines", "games", "trackers", "tools"];

/** Cover: who this is and what they make, with a word that keeps moving. */
export default function Hero() {
  let i = 0;
  const enter = () => ({ "--i": i++ }) as React.CSSProperties;

  return (
    <section
      id="top"
      className="mx-auto w-full max-w-4xl px-6 pt-32 pb-8 sm:pt-44 sm:pb-12"
    >
      <div className="flex items-start justify-between gap-8">
        <div className="min-w-0">
          <p
            className="font-display enter text-2xl font-bold tracking-tight text-foreground"
            style={enter()}
          >
            {person.name}
          </p>
          <p className="eyebrow enter mt-2" style={enter()}>
            {person.role} · PepsiCo · {person.location}
          </p>
        </div>
        {person.avatarUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={person.avatarUrl}
            alt={person.name}
            className="enter hidden h-20 w-20 flex-shrink-0 rounded-full border border-border object-cover sm:block"
            style={enter()}
          />
        )}
      </div>

      <h1
        className="font-display enter mt-10 max-w-3xl text-[2.9rem] font-extrabold leading-[1.0] tracking-[-0.03em] text-foreground sm:text-[5.2rem]"
        style={enter()}
      >
        I build <RotatingWord words={things} />
        <br />
        that keep running
        <br />
        after I log off.
      </h1>

      <p
        className="font-display enter mt-8 max-w-2xl text-lg font-semibold leading-snug text-foreground sm:text-xl"
        style={enter()}
      >
        {person.identity}
      </p>

      <div
        className="enter mt-6 max-w-xl space-y-4 text-base leading-relaxed text-muted"
        style={enter()}
      >
        {person.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div
        className="enter mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm"
        style={enter()}
      >
        <Link href="/#running" className="btn">
          What is running now
        </Link>
        <Link href="/#work" className="link">
          Work
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
