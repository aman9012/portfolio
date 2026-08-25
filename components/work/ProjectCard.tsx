import Link from "next/link";
import type { Project } from "@/types/project";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";
import { ProjectMetaActions, ProjectMetaLead } from "./ProjectMeta";
import { ProjectVisual } from "./ProjectVisual";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reversed = index % 2 === 1;

  return (
    <Reveal delay={Math.min(index * 0.06, 0.18)}>
      <article
        className={cn(
          "grid grid-cols-1 gap-6 border-t border-border py-10 sm:gap-8 sm:py-12",
          "lg:grid-cols-12 lg:items-start lg:gap-x-12 lg:gap-y-8 lg:py-20",
        )}
      >
        <div
          className={cn(
            "lg:col-span-5",
            reversed ? "lg:col-start-8 lg:row-start-1" : "lg:col-start-1 lg:row-start-1",
          )}
        >
          <ProjectMetaLead project={project} index={index} />
        </div>

        <Link
          href={`/work/${project.slug}`}
          aria-label={`View ${project.title} case study`}
          className={cn(
            "group block min-w-0 lg:col-span-7 lg:row-span-2",
            reversed
              ? "lg:col-start-1 lg:row-start-1"
              : "lg:col-start-6 lg:row-start-1",
          )}
        >
          <ProjectVisual project={project} index={index} />
        </Link>

        <div
          className={cn(
            "lg:col-span-5",
            reversed ? "lg:col-start-8 lg:row-start-2" : "lg:col-start-1 lg:row-start-2",
          )}
        >
          <ProjectMetaActions project={project} />
        </div>
      </article>
    </Reveal>
  );
}
