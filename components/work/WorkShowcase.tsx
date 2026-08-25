import type { Project } from "@/types/project";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

type WorkShowcaseProps = {
  items?: Project[];
};

export function WorkShowcase({ items = projects }: WorkShowcaseProps) {
  return (
    <div>
      {items.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}
