import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion";
import { WorkShowcase } from "@/components/work";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected web development, digital marketing, and product-focused work.",
};

export default function WorkPage() {
  return (
    <main>
      <Section>
        <Container>
          <Reveal>
            <p className="font-mono-label text-accent">Selected Work</p>
            <h1 className="mt-5 max-w-5xl font-display text-[clamp(2.35rem,8.2vw,5.75rem)] font-semibold leading-[0.9] tracking-[-0.045em] text-foreground uppercase">
              Digital experiences
              <span className="block">built with intent.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
              A selection of web development, digital marketing, and
              product-focused work.
            </p>
          </Reveal>

          <div className="mt-14 md:mt-20">
            <WorkShowcase items={projects} />
          </div>
        </Container>
      </Section>
    </main>
  );
}
