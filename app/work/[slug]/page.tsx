import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    notFound();
  }

  return (
    <main>
      <section className="section-shell pt-32">
        <div className="container-shell">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {project.category.replace("-", " ")}
          </p>

          <h1 className="mt-4 max-w-5xl font-display text-5xl font-semibold tracking-tight md:text-8xl">
            {project.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
            {project.description}
          </p>

          <div className="mt-12 grid gap-8 border-y border-border py-8 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                Services
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-border px-3 py-1.5 text-sm text-muted"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                Technologies
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-border px-3 py-1.5 text-sm text-muted"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}