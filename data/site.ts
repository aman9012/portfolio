import type { SiteMetadata } from "@/types/common";

export const siteConfig = {
  name: "Aman Yadav",
  tagline: "Building Digital Experiences",
  disciplines: [
    "Web Development",
    "Digital Marketing",
    "Creative Direction",
  ] as const,
  email: "[Placeholder — add contact email]",
  domain: "https://aman-yadav-info.netlify.app",
} as const;

export const siteMetadata: SiteMetadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description:
    "Multidisciplinary digital professional specializing in web development, digital marketing, and creative direction. Building premium digital experiences.",
  url: siteConfig.domain,
  ogImage: "/images/og/og-default.png",
};
