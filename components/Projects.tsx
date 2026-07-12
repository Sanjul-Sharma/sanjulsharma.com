import Section from "./Section";
import type { Project } from "@/content/site";

type ProjectsProps = {
  id: string;
  index?: string;
  title: string;
  eyebrow?: string;
  projects: Project[];
};

function LinkIcon({ type }: { type: "repo" | "url" }) {
  if (type === "repo") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

export default function Projects({
  id,
  title,
  eyebrow,
  projects,
}: ProjectsProps) {
  return (
    <Section id={id} title={title} eyebrow={eyebrow}>
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className={`card group flex flex-col p-6 ${
              project.featured ? "card-featured" : ""
            }`}
          >
            <div className="mb-4 flex min-h-6 items-center justify-between gap-4">
              {project.featured ? (
                <span className="inline-flex items-center rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
                  Featured
                </span>
              ) : (
                <span aria-hidden />
              )}
              <div className="flex items-center gap-3 text-muted-2">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} source`}
                    className="transition-colors hover:text-accent"
                  >
                    <LinkIcon type="repo" />
                  </a>
                )}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} live`}
                    className="transition-colors hover:text-accent"
                  >
                    <LinkIcon type="url" />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
              {project.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-muted">
              {project.tagline}
            </p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
