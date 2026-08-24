import type { Project } from "@/types/project";

/**
 * Project entries will be added as real work becomes available.
 * Do not populate with fabricated portfolio pieces.
 */
export const projects: Project[] = [];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
