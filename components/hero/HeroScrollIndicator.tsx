"use client";

import { motion } from "framer-motion";

type HeroScrollIndicatorProps = {
  reducedMotion: boolean | null;
};

export function HeroScrollIndicator({ reducedMotion }: HeroScrollIndicatorProps) {
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reducedMotion ? 0 : 0.4,
        delay: reducedMotion ? 0 : 0.95,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative z-20 flex items-end gap-3 self-end md:col-start-2 md:row-start-2 md:justify-self-end"
    >
      <span className="font-mono-label !text-[0.6rem] text-muted">Scroll to explore</span>
      <span className="flex h-8 w-px overflow-hidden bg-border" aria-hidden="true">
        <motion.span
          animate={reducedMotion ? { y: 0 } : { y: ["-100%", "100%"] }}
          transition={
            reducedMotion
              ? { duration: 0 }
              : { duration: 1.7, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.8 }
          }
          className="h-1/2 w-full bg-accent"
        />
      </span>
    </motion.div>
  );
}
