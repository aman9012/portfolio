import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader, PlaceholderBlock } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Professional background spanning web development, digital marketing, and creative direction.",
};

export default function AboutPage() {
  return (
    <Section>
      <Container size="narrow">
        <PageHeader
          title="About"
          description="Multidisciplinary digital professional building premium digital experiences."
        />
        <PlaceholderBlock message="[Placeholder — professional story and portrait to be added — Phase 7]" />
      </Container>
    </Section>
  );
}
