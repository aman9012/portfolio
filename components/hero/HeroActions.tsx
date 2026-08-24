"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui";
import { cn } from "@/lib/utils";

type HeroActionsProps = {
  reducedMotion: boolean | null;
  className?: string;
};

export function HeroActions({ reducedMotion, className }: HeroActionsProps) {
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reducedMotion ? 0 : 0.45,
        delay: reducedMotion ? 0 : 0.82,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn("mt-6 flex flex-wrap items-center gap-3 md:mt-9", className)}
    >
      <ButtonLink
        href="/work"
        className="group min-w-32 hover:-translate-y-0.5 hover:shadow-glow"
      >
        View Work
        <ArrowUpRight
          size={16}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </ButtonLink>
      <ButtonLink href="/contact" variant="secondary" className="min-w-28 hover:-translate-y-0.5">
        Contact
      </ButtonLink>
    </motion.div>
  );
}
