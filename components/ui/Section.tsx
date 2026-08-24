import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
  spacing?: "default" | "sm" | "none";
  "aria-label"?: string;
};

const spacingClasses = {
  default: "section-padding",
  sm: "section-padding-sm",
  none: "",
};

export function Section({
  children,
  className,
  id,
  as: Component = "section",
  spacing = "default",
  "aria-label": ariaLabel,
}: SectionProps) {
  return (
    <Component
      id={id}
      aria-label={ariaLabel}
      className={cn(spacingClasses[spacing], className)}
    >
      {children}
    </Component>
  );
}
