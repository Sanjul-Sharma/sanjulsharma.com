import Section from "./Section";
import type { Project } from "@/content/site";

type ProjectsProps = {
  id: string;
  index?: string;
  title: string;
  eyebrow?: string;
  projects: Project[];
};

/** Work case studies: ruled blocks, no cards. */
export default function Projects({ id, title, eyebrow, projects }: ProjectsProps) {
  return (
    <Section id={id} title={title} eyebrow={eyebrow}>
      <div className="border-t border-foreground">
        {projects.map((project) => (
          <article
            key={project.name}
            className="grid gap-4 border-b border-border py-8 md:grid-cols-[240px_minmax(0,1fr)]"
          >
            <div>
              <h3 className="font-display text-xl font-semibold leading-tight text-foreground">
                {project.name}
              </h3>
              <p className="mt-2 text-sm text-muted">{project.tagline}</p>
            </div>
            <div>
              <p className="text-base leading-relaxed text-muted">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
              {(project.url || project.repo) && (
                <div className="mt-4 flex gap-4 text-sm">
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="link">
                      Visit
                    </a>
                  )}
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="link">
                      Source
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
