import Section from "./Section";
import { person, socials } from "@/content/site";

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch" eyebrow="Contact">
      <div className="card mx-auto max-w-2xl p-8 text-center sm:p-10">
        <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Let&apos;s build something together.
        </h3>
        <p className="mx-auto mt-4 max-w-md text-muted">
          I&apos;m always open to interesting projects, collaborations, or just
          a good conversation. My inbox is always open.
        </p>
        <a
          href={`mailto:${person.email}`}
          className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
        >
          {person.email}
        </a>

        <ul className="mt-8 flex flex-wrap justify-center gap-6">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-accent"
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
