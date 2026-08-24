import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main";
  size?: "default" | "narrow" | "wide";
};

const sizeClasses = {
  default: "container-base",
  narrow: "container-base container-narrow",
  wide: "container-base container-wide",
};

export function Container({
  children,
  className,
  as: Component = "div",
  size = "default",
}: ContainerProps) {
  return (
    <Component className={cn(sizeClasses[size], className)}>
      {children}
    </Component>
  );
}
