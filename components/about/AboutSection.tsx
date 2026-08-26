import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

type AboutSectionProps = {
  variant?: "full" | "compact";
  className?: string;
};

const quickFacts = [
  { label: "Focus", value: "Performance-driven web & marketing" },
  { label: "Approach", value: "Build → Measure → Refine" },
  { label: "Availability", value: "Open to full-time roles & freelance" },
];

export function AboutSection({ variant = "full", className }: AboutSectionProps) {
  return (
    <div className={cn("grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16", className)}>
      <Reveal className="order-2 lg:order-1">
        <div className="relative mx-auto max-w-xs lg:mx-0">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent/8 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border-strong/70 bg-secondary/60 shadow-elevated">
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="absolute right-0 top-0 h-16 w-16 border-b border-l border-accent/30" />
            <div className="absolute bottom-0 left-0 h-16 w-16 border-r border-t border-accent/30" />
            <div className="flex h-full items-center justify-center">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border">
  <Image
    src="/images/profile/profile.webp.png"
    alt="Aman Yadav"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover"
    priority={false}
  />

  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
</div>
            </div>
            <div className="absolute inset-x-0 bottom-0 border-t border-border bg-background/50 p-4 backdrop-blur-sm">
              <p className="font-mono-label !text-[0.6rem] text-muted">Portrait — Aman Yadav</p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08} className="order-1 lg:order-2">
        <div className="flex flex-col gap-6">
          <p className="text-lg leading-8 text-foreground/90 md:text-xl md:leading-9">
            I&apos;m Aman Yadav — a multidisciplinary digital professional working across{" "}
            <span className="text-accent">web development</span>,{" "}
            <span className="text-accent">digital marketing</span>, and{" "}
            <span className="text-accent">mobile app development</span>. Most people
            specialize in building things or promoting them. I do both, which means
            I design and ship products with distribution already in mind — not
            bolted on after the fact.
          </p>

          <p className="text-base leading-7 text-muted md:text-lg md:leading-8">
            On the development side, I build fast, accessible interfaces with
            Next.js, React, and TypeScript, and extend that into React Native
            for mobile. On the marketing side, I run and measure performance
            campaigns — Google Ads, Meta Ads, SEO, GA4, and Google Tag Manager —
            so the sites I build aren&apos;t just well-crafted, they&apos;re set up to
            convert and be measured from day one.
          </p>

          {variant === "full" && (
            <p className="text-base leading-7 text-muted md:text-lg md:leading-8">
              I&apos;m currently focused on performance marketing and
              growth-oriented web work — roles where technical execution and
              measurable outcomes both matter. If that&apos;s what you&apos;re
              hiring for or building toward, I&apos;d like to talk.
            </p>
          )}

          <dl className="mt-2 grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
            {quickFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono-label !text-[0.62rem] text-accent">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm text-foreground/85">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </div>
  );
}
