import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PlaceholderBlock } from "@/components/ui";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: String(project.title),
    description: String(project.description),
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Section>
      <Container size="narrow">
        <header className="mb-12">
          <p className="font-mono-label text-accent">{project.category}</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{project.description}</p>
        </header>

        <PlaceholderBlock message="[Placeholder — full project case study layout — Phase 5]" />
      </Container>
    </Section>
  );
}
