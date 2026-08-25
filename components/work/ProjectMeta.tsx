import Link from "next/link";
import type { Project } from "@/types/project";
import {
  formatProjectCategory,
  formatProjectIndex,
} from "@/data/projects";

type ProjectMetaProps = {
  project: Project;
  index: number;
};

export function ProjectMeta({ project, index }: ProjectMetaProps) {
  return (
    <div className="flex min-w-0 flex-col">
      <div className="flex items-center justify-between gap-4 border-b border-border pb-3">
        <span className="font-mono-label text-accent">
          {formatProjectIndex(index)}
        </span>
        <span className="font-mono-label text-muted">{project.year}</span>
      </div>

      <p className="mt-5 font-mono-label text-muted">
        {formatProjectCategory(project.category)}
        {project.status === "concept" ? " · Concept" : ""}
      </p>

      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
        {project.title}
      </h3>

      <p className="mt-4 max-w-xl text-sm leading-7 text-muted md:text-base md:leading-8">
        {project.shortDescription}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted"
          >
            {technology}
          </span>
        ))}
      </div>

      <Link
        href={`/work/${project.slug}`}
        className="mt-7 inline-flex w-fit items-center font-mono-label text-accent transition-colors duration-[var(--duration-base)] ease-[var(--ease-out)] hover:text-accent-hover"
      >
        Case Study
      </Link>
    </div>
  );
}

type ProjectMetaLeadProps = {
  project: Project;
  index: number;
};

export function ProjectMetaLead({ project, index }: ProjectMetaLeadProps) {
  return (
    <div className="min-w-0">
      <div className="flex items-center justify-between gap-4 border-b border-border pb-3">
        <span className="font-mono-label text-accent">
          {formatProjectIndex(index)}
        </span>
        <span className="font-mono-label text-muted">{project.year}</span>
      </div>

      <p className="mt-5 font-mono-label text-muted">
        {formatProjectCategory(project.category)}
        {project.status === "concept" ? " · Concept" : ""}
      </p>

      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
        {project.title}
      </h3>

      <p className="mt-4 max-w-xl text-sm leading-7 text-muted md:text-base md:leading-8">
        {project.shortDescription}
      </p>
    </div>
  );
}

type ProjectMetaActionsProps = {
  project: Project;
};

export function ProjectMetaActions({ project }: ProjectMetaActionsProps) {
  return (
    <div className="min-w-0">
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

      <Link
        href={`/work/${project.slug}`}
        className="mt-6 inline-flex w-fit items-center font-mono-label text-accent transition-colors duration-[var(--duration-base)] ease-[var(--ease-out)] hover:text-accent-hover"
      >
        Case Study
      </Link>
    </div>
  );
}
