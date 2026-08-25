import { Hero } from "@/components/hero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { SectionHeading } from "@/components/ui";
import { siteConfig } from "@/data/site";
import { skillGroups, processSteps } from "@/data/skills";
import { featuredProjects } from "@/data/projects";
import { formatDisciplines } from "@/lib/utils";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { WorkShowcase } from "@/components/work";
import { AboutSection } from "@/components/about";
import { TechStack } from "@/components/technology";
import { ContactForm } from "@/components/contact";

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
            <p className="text-lg leading-8 text-muted md:text-xl md:leading-9">
              I&apos;m a multidisciplinary digital professional working across{" "}
              <span className="text-foreground">web development</span>,{" "}
              <span className="text-foreground">digital marketing</span>, and{" "}
              <span className="text-foreground">mobile app development</span>.
              I build the product and the system that gets it discovered,
              measured, and improved — code and campaigns designed to work
              together, not as separate afterthoughts.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 03 — Selected Work */}
      <Section id="work">
        <Container>
          <div className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono-label text-accent">Selected Work</p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
                Built to
                <br />
                perform.
              </h2>
            </div>

            <div className="flex flex-col items-start gap-3 sm:items-end">
              <span className="font-mono-label text-muted">
                01 — {String(featuredProjects.length).padStart(2, "0")}
              </span>
              <Link
                href="/work"
                className="font-mono-label text-accent transition-colors duration-[var(--duration-base)] ease-[var(--ease-out)] hover:text-accent-hover"
              >
                View all work
              </Link>
            </div>
          </div>

          <WorkShowcase items={featuredProjects} />
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
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {skillGroups.map((group) => (
    <StaggerItem key={group.category}>
      <article className="group h-full rounded-xl border border-border bg-secondary/30 p-6 transition-colors duration-300 hover:border-border-accent hover:bg-secondary/50">
        <h3 className="font-display text-xl font-semibold text-foreground">
          {group.label}
        </h3>

        <p className="mt-2 text-sm text-muted">
          {group.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {group.items.slice(0, 6).map((item) => (
            <li
              key={item}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-muted transition-colors group-hover:border-border-strong"
            >
              {item}
            </li>
          ))}
        </ul>
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
          <TechStack />
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
          <AboutSection />
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
            subtitle="Have a project, role, or idea in mind? Send a message and I'll get back to you."
            align="center"
          />
          <Reveal>
            <ContactForm />
          </Reveal>
        </Container>
      </Section>
    </main>
  );
}
