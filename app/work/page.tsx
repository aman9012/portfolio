import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader, PlaceholderBlock } from "@/components/ui";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects spanning web development, digital marketing, and creative direction.",
};

export default function WorkPage() {
  return (
    <Section>
      <Container>
        <PageHeader
          title="Work"
          description="Selected projects and digital experiences."
        />

        {projects.length === 0 ? (
          <PlaceholderBlock message="[Placeholder — no projects added yet. Add verified project entries to data/projects.ts]" />
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="rounded-xl border border-border p-6"
              >
                <h2 className="font-display text-xl font-semibold">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-muted">{project.description}</p>
              </article>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
