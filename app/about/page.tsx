import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/ui";
import { AboutSection } from "@/components/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Professional background spanning web development, digital marketing, and mobile app development.",
};

export default function AboutPage() {
  return (
    <Section>
      <Container>
        <PageHeader
          title="About"
          description="Multidisciplinary digital professional building premium digital experiences."
        />
        <AboutSection />
      </Container>
    </Section>
  );
}
