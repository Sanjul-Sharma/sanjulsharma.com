import Section from "./Section";
import { person, socials } from "@/content/site";

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch" eyebrow="Contact">
      <div className="max-w-2xl">
        <p className="text-lg leading-relaxed text-muted">
          Open to interesting product work, collaborations on anything that
          should run itself, and good conversations about either.
        </p>
        <a
          href={`mailto:${person.email}`}
          className="font-display mt-6 inline-block text-2xl font-semibold tracking-tight text-foreground underline decoration-muted-2 decoration-1 underline-offset-[0.2em] transition-colors hover:text-accent hover:decoration-accent sm:text-3xl"
        >
          {person.email}
        </a>
        <ul className="mt-8 flex flex-wrap gap-6">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="mono text-xs uppercase tracking-wider text-muted-2 transition-colors hover:text-accent"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
