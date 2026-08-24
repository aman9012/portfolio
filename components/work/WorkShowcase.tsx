import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function WorkShowcase() {
  return (
    <div>
      {featuredProjects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          index={index}
        />
      ))}
    </div>
  );
}