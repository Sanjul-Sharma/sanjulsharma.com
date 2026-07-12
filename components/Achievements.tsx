import Section from "./Section";
import { achievements } from "@/content/site";

export default function Achievements() {
  return (
    <Section
      id="achievements"
      title="Achievements"
      eyebrow="Recognition & education"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <div key={i} className="card flex flex-col p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <path d="M8 21h8m-4-4v4M7 4h10v4a5 5 0 0 1-10 0V4Z" />
                  <path d="M17 5h2a2 2 0 0 1-2 3M7 5H5a2 2 0 0 0 2 3" />
                </svg>
              </span>
              {a.year && (
                <span className="text-xs font-medium text-muted-2">
                  {a.year}
                </span>
              )}
            </div>
            <h3 className="font-semibold text-foreground">{a.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {a.detail}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
