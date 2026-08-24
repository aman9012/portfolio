import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteMetadata } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteMetadata.url;

  const staticRoutes = [
    "",
    "/work",
    "/about",
    "/experience",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
