import type { Placeholder } from "./common";

export type ProjectCategory =
  | "web-development"
  | "digital-marketing"
  | "creative-direction";

export interface Project {
  title: Placeholder;
  slug: string;
  category: ProjectCategory;
  description: Placeholder;
  technologies: string[];
  year: Placeholder;
  image: string;
  gallery?: string[];
  liveUrl?: string;
  githubUrl?: string;
  role: Placeholder;
  challenge: Placeholder;
  approach: Placeholder;
  result: Placeholder;
  featured?: boolean;
}
