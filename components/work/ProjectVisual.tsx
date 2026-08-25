import Image from "next/image";
import type { Project } from "@/types/project";
import {
  formatProjectCategory,
  formatProjectIndex,
  getProjectCoverSrc,
} from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectVisualProps = {
  project: Project;
  index?: number;
  priority?: boolean;
  showCaption?: boolean;
  className?: string;
};

function visualSeed(slug: string) {
  return slug.split("").reduce((total, character) => total + character.charCodeAt(0), 0);
}

export function ProjectVisual({
  project,
  index = 0,
  priority = false,
  showCaption = true,
  className,
}: ProjectVisualProps) {
  const coverSrc = getProjectCoverSrc(project);
  const seed = visualSeed(project.slug);
  const accentX = 18 + (seed % 48);
  const accentY = 16 + ((seed * 3) % 42);
  const label = formatProjectCategory(project.category);
  const number = formatProjectIndex(index);

  return (
    <div
      className={cn(
        "relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-secondary",
        className,
      )}
    >
      {coverSrc ? (
        <Image
          src={coverSrc}
          alt={`${project.title} cover`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 55vw, (min-width: 768px) 80vw, 100vw"
          className="object-cover transition-transform duration-[var(--duration-cinematic)] ease-[var(--ease-out)] motion-safe:group-hover:scale-[1.035]"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 transition-transform duration-[var(--duration-cinematic)] ease-[var(--ease-out)] motion-safe:group-hover:scale-[1.03]"
        >
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(ellipse 42% 38% at ${accentX}% ${accentY}%, rgba(201,169,98,0.16), transparent 62%)`,
            }}
          />
          <div className="absolute inset-y-[18%] left-[10%] w-px bg-accent/35" />
          <div className="absolute inset-x-[10%] top-[22%] h-px bg-border-strong" />
          <div className="absolute right-[12%] bottom-[20%] h-16 w-16 rounded-full border border-border-accent/80" />
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-background/10" />

      {showCaption ? (
        <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <p className="font-mono-label text-muted">{label}</p>
            {project.status === "concept" ? (
              <span className="font-mono-label text-accent">Concept</span>
            ) : (
              <span className="font-mono-label text-muted">{project.year}</span>
            )}
          </div>

          <div className="flex items-end justify-between gap-4">
            <p className="max-w-[12rem] font-display text-xl font-semibold leading-tight tracking-tight text-foreground sm:max-w-xs sm:text-2xl">
              {project.title}
            </p>
            <span className="font-display text-4xl font-semibold leading-none tracking-tight text-foreground/18 sm:text-5xl">
              {number}
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
