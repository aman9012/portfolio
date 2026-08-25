import type {
  Project,
  ProjectCategory,
  ProjectImages,
} from "@/types/project";

export type { Project, ProjectCategory, ProjectImages };

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  "web-development": "Web Development",
  "digital-marketing": "Digital Marketing",
  product: "Product",
};

export const projects: Project[] = [
  {
    slug: "volpebyfx",
    title: "Volpe by FX",
    category: "web-development",
    year: "2026",
    shortDescription:
      "A premium financial platform focused on clear information architecture and a high-trust digital experience.",
    description:
      "A modern web experience designed around financial content, structured information, responsive interaction, and a refined visual system.",
    services: ["Web Development", "UI Implementation", "Responsive Design"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    featured: true,
    status: "live",
    href: "https://volpebyfx.com/",
  },
  {
    slug: "aman-portfolio",
    title: "Aman Yadav Portfolio",
    category: "web-development",
    year: "2026",
    shortDescription:
      "A cinematic personal digital experience combining web development, digital marketing, and creative direction.",
    description:
      "A personal portfolio built as an evolving digital studio rather than a conventional resume website.",
    services: ["Creative Direction", "Web Development", "Motion Design"],
    technologies: ["Next.js", "React", "TypeScript", "Framer Motion"],
    featured: true,
    status: "live",
  },
  {
    slug: "performance-marketing-system",
    title: "Performance Marketing System",
    category: "digital-marketing",
    year: "2026",
    shortDescription:
      "A performance marketing workflow focused on measurable acquisition, conversion tracking, and campaign optimization.",
    description:
      "A structured performance marketing system combining campaign strategy, conversion tracking, analytics, and landing-page optimization.",
    services: [
      "Performance Marketing",
      "Google Ads",
      "Conversion Tracking",
      "Analytics",
    ],
    technologies: ["Google Ads", "GA4", "Google Tag Manager", "Meta Ads"],
    featured: true,
    status: "live",
  },
  {
    slug: "future-mobile-product",
    title: "Mobile Product Concept",
    category: "product",
    year: "2026",
    shortDescription:
      "An evolving mobile product concept exploring application architecture, product experience, and scalable digital workflows.",
    description:
      "A future-facing application project representing the expansion of my development work from web experiences into mobile products.",
    services: ["Product Design", "Application Development", "UX Architecture"],
    technologies: ["React Native", "TypeScript"],
    featured: false,
    status: "concept",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectCoverSrc(project: Project): string | undefined {
  return project.images?.cover ?? project.images?.desktop;
}

export function formatProjectCategory(category: ProjectCategory): string {
  return projectCategoryLabels[category];
}

export function formatProjectIndex(index: number): string {
  return String(index + 1).padStart(2, "0");
}
