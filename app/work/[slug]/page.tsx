import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { ProjectVisual } from "@/components/work";
import {
  formatProjectCategory,
  getProjectBySlug,
  projects,
} from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);

  return (
    <main>
      <Section>
        <Container>
          <Reveal>
            <Link
              href="/work"
              className="font-mono-label text-muted transition-colors duration-[var(--duration-base)] ease-[var(--ease-out)] hover:text-foreground"
            >
              Selected Work
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
              <p className="font-mono-label text-accent">
                {formatProjectCategory(project.category)}
              </p>
              <span className="text-muted">/</span>
              <p className="font-mono-label text-muted">{project.year}</p>
              {project.status === "concept" ? (
                <>
                  <span className="text-muted">/</span>
                  <p className="font-mono-label text-accent">Concept</p>
                </>
              ) : null}
            </div>

            <h1 className="mt-5 max-w-5xl font-display text-[clamp(2.25rem,7vw,5.25rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-foreground">
              {project.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:mt-8 md:text-lg">
              {project.description}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-10 md:mt-14">
            <div className="group">
              <ProjectVisual
                project={project}
                index={projectIndex}
                priority
                showCaption={false}
                className="aspect-[16/10] sm:aspect-[16/9]"
              />
            </div>
          </Reveal>

          <div className="mt-12 grid gap-10 border-y border-border py-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="font-mono-label text-muted">Services</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <li
                    key={service}
                    className="rounded-full border border-border px-3 py-1.5 text-sm text-muted"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono-label text-muted">Technologies</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-border px-3 py-1.5 text-sm text-muted"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 max-w-2xl">
            <p className="font-mono-label text-muted">Project details</p>
            <p className="mt-4 text-base leading-8 text-muted">
              {project.shortDescription}
            </p>
          </div>

          {project.href ? (
            <div className="mt-10">
              <ButtonLink href={project.href} external variant="secondary">
                Visit project
              </ButtonLink>
            </div>
          ) : null}
        </Container>
      </Section>
    </main>
  );
}
