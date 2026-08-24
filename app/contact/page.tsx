import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader, PlaceholderBlock } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to discuss projects, collaborations, or opportunities.",
};

export default function ContactPage() {
  return (
    <Section>
      <Container size="narrow">
        <PageHeader
          title="Contact"
          description="Let's build something together."
        />
        <PlaceholderBlock message="[Placeholder — contact form UI — Phase 9. API integration — Phase 10]" />
      </Container>
    </Section>
  );
}
