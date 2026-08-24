import type { Project } from "@/data/projects";

interface ProjectVisualProps {
  project: Project;
}

export function ProjectVisual({
  project,
}: ProjectVisualProps) {
  return (
    <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-secondary">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.12),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05),transparent_30%)]" />

      <div className="absolute inset-6 rounded-xl border border-border/70 bg-background/60 p-5 backdrop-blur-sm transition-transform duration-700 ease-out group-hover:scale-[1.015]">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-muted/60" />
            <span className="h-2 w-2 rounded-full bg-muted/40" />
            <span className="h-2 w-2 rounded-full bg-muted/30" />
          </div>

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
            {project.category.replace("-", " ")}
          </span>
        </div>

        <div className="flex h-[calc(100%-48px)] items-center justify-center">
          <div className="text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Digital Experience
            </p>

            <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
              {project.title}
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/40 to-transparent" />
    </div>
  );
}