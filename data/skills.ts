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
  {
    category: "mobile-development",
    label: "Mobile Development",
    description:
      "Extending web product thinking into cross-platform mobile experiences.",
    items: ["React Native", "Firebase", "API Integration", "Cross-Platform UI"],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "Understand the goal behind the project — audience, business context, and what success actually looks like — before any design or code decisions are made.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "Map the information architecture, tech stack, and campaign or content structure so the build has a clear, agreed-upon direction from day one.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Develop with clean, maintainable code and structured tracking in place — performance, accessibility, and SEO fundamentals handled from the start, not bolted on later.",
  },
  {
    step: "04",
    title: "Measure",
    description:
      "Ship with analytics and conversion tracking wired up, then watch real numbers — traffic, engagement, Core Web Vitals, campaign performance — instead of guessing.",
  },
  {
    step: "05",
    title: "Refine",
    description:
      "Use what the data shows to iterate — tightening copy, UX, and targeting in continuous small passes rather than one big relaunch.",
  },
] as const;
