import type { Project } from "@/data/projects";

interface ProjectMetaProps {
  project: Project;
  index: number;
}

export function ProjectMeta({
  project,
  index,
}: ProjectMetaProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <span className="font-mono text-xs tracking-[0.18em] text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
          {project.year}
        </span>
      </div>

      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          {project.category.replace("-", " ")}
        </p>

        <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {project.title}
        </h3>
      </div>

      <p className="max-w-xl text-sm leading-7 text-muted">
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
}