import type { SiteMetadata } from "@/types/common";

export const siteConfig = {
  name: "Aman Yadav",
  tagline: "Building Digital Experiences",
  disciplines: [
    "Web Development",
    "Digital Marketing",
    "Creative Direction",
  ] as const,
  email: "ay880196@gmail.com",
  domain: "https://amanyadavinfo.netlify.app",
  socials: {
    linkedin: "https://www.linkedin.com/in/aman-yadav-info/",
    github: "https://github.com/aman9012",
  },
} as const;

export const siteMetadata: SiteMetadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description:
    "Multidisciplinary digital professional specializing in web development, digital marketing, and creative direction. Building premium digital experiences.",
  url: siteConfig.domain,
  ogImage: "/images/og/og-default.png",
};

