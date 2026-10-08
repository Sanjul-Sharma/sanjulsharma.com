import Section from "./Section";
import { experience } from "@/content/site";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" eyebrow="Where I've worked">
      <ol className="relative space-y-10 border-l border-border pl-6 sm:pl-8">
        {experience.map((job, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[calc(1.5rem+5px)] top-1.5 h-2 w-2 bg-foreground sm:-left-[calc(2rem+5px)]" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-foreground">
                {job.role}{" "}
                <span className="font-normal text-muted">
                  ·{" "}
                  {job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      {job.company}
                    </a>
                  ) : (
                    <span className="text-accent">{job.company}</span>
                  )}
                </span>
              </h3>
              <span className="text-xs font-medium text-muted-2">
                {job.period}
              </span>
            </div>
            {job.location && (
              <p className="mt-0.5 text-xs text-muted-2">{job.location}</p>
            )}
            <p className="mt-3 text-sm text-muted">{job.summary}</p>
            <ul className="mt-3 space-y-2">
              {job.highlights.map((h, j) => (
                <li
                  key={j}
                  className="flex gap-2.5 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-2.5 h-px w-3 flex-shrink-0 bg-muted-2" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            {job.tech && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
