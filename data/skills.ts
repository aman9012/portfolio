import type { CapabilityCategory } from "@/types/common";

export interface SkillGroup {
  category: CapabilityCategory;
  label: string;
  description: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "web-development",
    label: "Web Development",
    description:
      "Building performant, scalable web applications and digital products.",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "API Integration",
      "Firebase",
      "Firestore",
      "Git",
      "GitHub",
      "Netlify",
    ],
  },
  {
    category: "digital-marketing",
    label: "Digital Marketing",
    description:
      "Driving measurable growth through data-informed marketing strategy.",
    items: [
      "Performance Marketing",
      "Google Ads",
      "Meta Ads",
      "GA4",
      "Conversion Tracking",
      "Analytics",
      "SEO",
      "Digital Growth",
    ],
  },
  {
    category: "creative-direction",
    label: "Creative Direction",
    description:
      "Shaping digital experiences through visual direction and interaction design.",
    items: [
      "Digital Visual Direction",
      "UI Presentation",
      "Interaction Design",
      "Motion Direction",
      "Content Structure",
      "Digital Experience Design",
    ],
  },
];

/**
 * Reserved for future React Native / mobile projects.
 * Not presented as active capability until genuine experience exists.
 */
export const futureSkillGroups: SkillGroup[] = [
  {
    category: "mobile-development",
    label: "Mobile Development",
    description: "[Placeholder — to be added when mobile projects are available]",
    items: ["React Native", "Firebase", "API Integration"],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "[Placeholder — define discovery approach for client and project context]",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "[Placeholder — define planning methodology and deliverables]",
  },
  {
    step: "03",
    title: "Build",
    description:
      "[Placeholder — define build process and technical execution]",
  },
  {
    step: "04",
    title: "Measure",
    description:
      "[Placeholder — define measurement and analytics approach]",
  },
  {
    step: "05",
    title: "Refine",
    description:
      "[Placeholder — define iteration and optimization process]",
  },
] as const;
