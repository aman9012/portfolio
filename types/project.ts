export type ProjectCategory =
  | "web-development"
  | "digital-marketing"
  | "product";

export type ProjectStatus = "live" | "concept";

export type ProjectImages = {
  cover?: string;
  desktop?: string;
  mobile?: string;
};

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  shortDescription: string;
  description: string;
  services: string[];
  technologies: string[];
  featured: boolean;
  href?: string;
  status?: ProjectStatus;
  images?: ProjectImages;
}
