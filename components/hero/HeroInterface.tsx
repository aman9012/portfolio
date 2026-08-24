"use client";

import type { MotionStyle } from "framer-motion";
import { motion } from "framer-motion";

type HeroInterfaceProps = {
  reducedMotion: boolean | null;
  interfaceStyle: MotionStyle;
  foregroundStyle: MotionStyle;
};

export function HeroInterface({
  reducedMotion,
  interfaceStyle,
  foregroundStyle,
}: HeroInterfaceProps) {
  return (
    <motion.div
      aria-hidden="true"
      data-hero-interface
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reducedMotion ? 0 : 0.62,
        delay: reducedMotion ? 0 : 0.67,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={interfaceStyle}
      className="relative self-center md:col-start-2 md:row-start-1"
    >
      <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-accent/8 blur-3xl" />
      <div className="overflow-hidden rounded-xl border border-border-strong/70 bg-secondary/75 shadow-elevated backdrop-blur-sm">
        <div className="flex h-9 items-center justify-between border-b border-border px-3 sm:px-4">
          <div className="flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/45" />
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/25" />
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/15" />
          </div>
          <span className="font-mono-label !text-[0.58rem] text-muted">Digital / 01</span>
        </div>

        <div className="relative h-39 overflow-hidden p-3 sm:h-48 sm:p-4 md:h-[min(39vh,25rem)] md:p-5">
          <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:28px_28px]" />
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-mono-label !text-[0.56rem] text-accent">Project / UI Composition</p>
                <p className="mt-1 hidden font-display text-2xl tracking-tight text-foreground/90 sm:block">Digital environment</p>
              </div>
              <span className="font-mono-label !text-[0.56rem] text-muted">01—03</span>
            </div>

            <motion.div style={foregroundStyle} className="grid grid-cols-[1.15fr_0.85fr] gap-2 sm:gap-3">
              <div className="relative min-h-20 overflow-hidden rounded-md border border-border-strong bg-background/70 p-3 sm:min-h-28 sm:p-4">
                <div className="absolute right-0 top-0 h-14 w-14 border-b border-l border-accent/30" />
                <p className="font-mono-label !text-[0.52rem] text-muted">Project Preview</p>
                <div className="mt-3 h-1.5 w-3/4 bg-foreground/80" />
                <div className="mt-2 h-px w-1/2 bg-accent/80" />
                <div className="mt-4 hidden grid-cols-3 gap-1 sm:grid">
                  <span className="h-8 bg-foreground/10" />
                  <span className="h-8 bg-foreground/5" />
                  <span className="h-8 bg-accent/15" />
                </div>
              </div>
              <div className="flex min-h-20 flex-col justify-between rounded-md border border-border bg-background/50 p-3 sm:min-h-28 sm:p-4">
                <p className="font-mono-label !text-[0.52rem] text-muted">Interface / Data</p>
                <div className="space-y-2">
                  <div className="flex items-end gap-1.5">
                    <span className="h-4 w-1/5 bg-foreground/20" />
                    <span className="h-7 w-1/5 bg-foreground/35" />
                    <span className="h-10 w-1/5 bg-accent/70" />
                    <span className="h-6 w-1/5 bg-foreground/25" />
                  </div>
                  <div className="h-px bg-border-strong" />
                </div>
              </div>
            </motion.div>

            <div className="flex items-center justify-between font-mono-label !text-[0.52rem] text-muted">
              <span>System / Active</span>
              <span className="text-accent">— 01</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
