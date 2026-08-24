import { Hero } from "@/components/hero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PlaceholderBlock, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/data/site";
import { skillGroups, processSteps } from "@/data/skills";
import { formatDisciplines } from "@/lib/utils";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* 02 — Introduction */}
      <Section id="introduction">
        <Container size="narrow">
          <SectionHeading
            index="02"
            title="Introduction"
            subtitle="Who I am and how technology, design, and growth intersect."
          />
          <Reveal>
  <PlaceholderBlock message="[Placeholder — professional introduction to be added]" />
</Reveal>
        </Container>
      </Section>

      {/* 03 — Selected Work */}
      <Section id="work">
        <Container>
          <SectionHeading
            index="03"
            title="Selected Work"
            subtitle="Large cinematic project showcase."
          />
          <Reveal>
  <PlaceholderBlock message="[Placeholder — projects will appear here as they are added to data/projects.ts]" />
</Reveal>
        </Container>
      </Section>

      {/* 04 — Capabilities */}
      <Section id="capabilities">
        <Container>
          <SectionHeading
            index="04"
            title="Capabilities"
            subtitle={formatDisciplines(siteConfig.disciplines)}
          />
          <Stagger className="grid gap-6 md:grid-cols-3">
  {skillGroups.map((group) => (
    <StaggerItem key={group.category}>
      <article className="rounded-xl border border-border bg-secondary/30 p-6">
        <h3 className="font-display text-xl font-semibold text-foreground">
          {group.label}
        </h3>

        <p className="mt-2 text-sm text-muted">
          {group.description}
        </p>
      </article>
    </StaggerItem>
  ))}
</Stagger>
        </Container>
      </Section>

      {/* 05 — Technology */}
      <Section id="technology">
        <Container>
          <SectionHeading
            index="05"
            title="Technology"
            subtitle="Technical stack and capabilities."
          />
          <Reveal>
  <PlaceholderBlock message="[Placeholder — technology presentation — Phase 6]" />
</Reveal>
        </Container>
      </Section>

      {/* 06 — About */}
      <Section id="about">
        <Container>
          <SectionHeading
            index="06"
            title="About"
            subtitle="Professional story and portrait."
          />
          <Reveal>
  <PlaceholderBlock message="[Placeholder — about content and portrait — Phase 7]" />
</Reveal>
        </Container>
      </Section>

      {/* 07 — Process */}
      <Section id="process">
        <Container>
          <SectionHeading
            index="07"
            title="Process"
            subtitle="Discover · Plan · Build · Measure · Refine"
          />
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
  {processSteps.map((step) => (
    <StaggerItem key={step.step}>
      <article className="h-full rounded-lg border border-border p-5">
        <span className="font-mono-label text-accent">
          {step.step}
        </span>

        <h3 className="mt-2 font-display text-lg font-semibold">
          {step.title}
        </h3>

        <p className="mt-2 text-sm placeholder-content">
          {step.description}
        </p>
      </article>
    </StaggerItem>
  ))}
</Stagger>
        </Container>
      </Section>

      {/* 08 — Contact */}
      <Section id="contact">
        <Container size="narrow">
          <SectionHeading
            index="08"
            title="Let's Build Something."
            align="center"
          />
          <Reveal>
  <PlaceholderBlock message="[Placeholder — contact section — Phase 9]" />
</Reveal>
        </Container>
      </Section>
    </main>
  );
}
