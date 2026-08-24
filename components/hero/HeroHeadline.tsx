"use client";

import { motion } from "framer-motion";

type HeroHeadlineProps = {
  reducedMotion: boolean | null;
};

const lines = ["Building", "Digital", "Experiences"];

export function HeroHeadline({ reducedMotion }: HeroHeadlineProps) {
  return (
    <h1
      id="hero-heading"
      className="font-display text-[clamp(3.25rem,5.8vw,7.75rem)] font-semibold leading-[0.83] tracking-[-0.055em] text-foreground uppercase"
    >
      {lines.map((line, index) => (
        <span key={line} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            initial={reducedMotion ? false : { opacity: 0, y: "110%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reducedMotion ? 0 : 0.62,
              delay: reducedMotion ? 0 : 0.24 + index * 0.11,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="block"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
