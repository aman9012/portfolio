import Link from "next/link";
import type { Project } from "@/data/projects";
import { Reveal } from "@/components/motion";
import { ProjectMeta } from "./ProjectMeta";
import { ProjectVisual } from "./ProjectVisual";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <Reveal>
      <article className="grid gap-8 border-t border-border py-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 lg:py-20">
        <ProjectMeta
          project={project}
          index={index}
        />

        <Link
          href={`/work/${project.slug}`}
          className="group block"
          aria-label={`View ${project.title} case study`}
        >
          <ProjectVisual project={project} />
        </Link>
      </article>
    </Reveal>
  );
}