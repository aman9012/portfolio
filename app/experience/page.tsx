import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader, PlaceholderBlock } from "@/components/ui";
import { experienceEntries } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience and background.",
};

export default function ExperiencePage() {
  return (
    <Section>
      <Container>
        <PageHeader
          title="Experience"
          description="Professional background and experience."
        />

        {experienceEntries.length === 0 ? (
          <PlaceholderBlock message="[Placeholder — no experience entries added yet. Add verified entries to data/experience.ts]" />
        ) : (
          <div className="flex flex-col gap-8">
            {experienceEntries.map((entry) => (
              <article
                key={entry.id}
                className="rounded-xl border border-border p-6"
              >
                <h2 className="font-display text-xl font-semibold">
                  {entry.title}
                </h2>
                <p className="mt-1 text-sm text-muted">{entry.organization}</p>
                <p className="mt-4 text-muted">{entry.description}</p>
              </article>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
