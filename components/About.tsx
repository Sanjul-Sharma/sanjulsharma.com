import Section from "./Section";
import { person, skills } from "@/content/site";

export default function About() {
  return (
    <Section id="about" title="About" eyebrow="Introduction" topClass="pt-8 sm:pt-11">
      <div className="max-w-2xl space-y-5 leading-relaxed text-muted">
        {person.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p className="text-sm text-muted-2">
          Based in <span className="text-foreground">{person.location}</span>
        </p>
      </div>

      <div className="mt-12 border-t border-border pt-10">
        <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-muted-2">
          Skills &amp; tools
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div key={group.category}>
              <h4 className="mb-2 text-sm font-semibold text-foreground">
                {group.category}
              </h4>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
