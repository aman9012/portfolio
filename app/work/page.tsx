import { WorkShowcase } from "@/components/work";

export default function WorkPage() {
  return (
    <main>
      <section className="section-shell pt-32">
        <div className="container-shell">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Selected Work
          </p>

          <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold tracking-tight md:text-7xl">
            DIGITAL EXPERIENCES
            <br />
            BUILT WITH INTENT.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
            A selection of web development, digital marketing, and
            product-focused work.
          </p>

          <div className="mt-16">
            <WorkShowcase />
          </div>
        </div>
      </section>
    </main>
  );
}