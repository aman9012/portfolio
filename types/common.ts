export type Placeholder<T extends string = string> = T | "[Placeholder]";

export type Discipline =
  | "web-development"
  | "digital-marketing"
  | "creative-direction"
  | "mobile-development";

export type CapabilityCategory = Discipline;

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  url: string;
  ogImage: string;
}
