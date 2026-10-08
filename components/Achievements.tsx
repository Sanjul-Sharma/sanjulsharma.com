import Section from "./Section";
import { achievements } from "@/content/site";

export default function Achievements() {
  return (
    <Section id="achievements" title="Credentials" eyebrow="Certifications & education">
      <div className="border-t border-foreground">
        {achievements.map((a) => (
          <div
            key={a.title}
            className="grid gap-1 border-b border-border py-4 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-6"
          >
            <span className="mono text-xs text-muted-2">{a.year}</span>
            <div>
              <h3 className="font-semibold text-foreground">{a.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{a.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
