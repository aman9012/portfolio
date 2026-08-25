"use client";

import type { MotionStyle } from "framer-motion";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

type HeroInterfaceProps = {
  reducedMotion: boolean | null;
  interfaceStyle: MotionStyle;
  foregroundStyle: MotionStyle;
};

type MetricProps = {
  label: string;
  target: number;
  suffix?: string;
  reducedMotion: boolean | null;
  delay?: number;
  size?: "sm" | "lg";
};

function CountUpMetric({
  label,
  target,
  suffix = "",
  reducedMotion,
  delay = 0,
  size = "sm",
}: MetricProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 1 });
  const count = useMotionValue(reducedMotion ? target : 0);
  const rounded = useTransform(count, (value) => Math.round(value));

  useEffect(() => {
    if (!isInView) return;
    if (reducedMotion) {
      count.set(target);
      return;
    }
    const controls = animate(count, target, {
      duration: 1.1,
      delay,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [isInView, target, reducedMotion, delay, count]);

  return (
    <div>
      <p className="font-mono-label !text-[0.5rem] text-muted">{label}</p>
      <p
        ref={ref}
        className={
          size === "lg"
            ? "mt-2 flex items-baseline gap-1 font-display text-3xl font-semibold text-foreground sm:text-4xl"
            : "mt-1 font-display text-lg font-semibold text-foreground sm:text-xl"
        }
      >
        <motion.span>{rounded}</motion.span>
        {suffix}
      </p>
    </div>
  );
}

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
                <p className="font-mono-label !text-[0.56rem] text-accent">Performance / Snapshot</p>
                <p className="mt-1 hidden font-display text-2xl tracking-tight text-foreground/90 sm:block">Built to perform</p>
              </div>
              <span className="font-mono-label !text-[0.56rem] text-muted">01—03</span>
            </div>

            <motion.div style={foregroundStyle} className="grid grid-cols-[1.15fr_0.85fr] gap-2 sm:gap-3">
              <div className="relative min-h-20 overflow-hidden rounded-md border border-border-strong bg-background/70 p-3 sm:min-h-28 sm:p-4">
                <div className="absolute right-0 top-0 h-14 w-14 border-b border-l border-accent/30" />
                <p className="font-mono-label !text-[0.52rem] text-muted">Lighthouse Score</p>
                <CountUpMetric
                  label=""
                  target={98}
                  suffix="/100"
                  reducedMotion={reducedMotion}
                  size="lg"
                />
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border">
                  <motion.div
                    initial={{ width: reducedMotion ? "98%" : "0%" }}
                    whileInView={{ width: "98%" }}
                    viewport={{ once: true }}
                    transition={{ duration: reducedMotion ? 0 : 1.1, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full bg-accent"
                  />
                </div>
              </div>
              <div className="flex min-h-20 flex-col justify-between gap-3 rounded-md border border-border bg-background/50 p-3 sm:min-h-28 sm:p-4">
                <CountUpMetric label="SEO Score" target={96} reducedMotion={reducedMotion} delay={0.1} />
                <div className="h-px bg-border-strong" />
                <CountUpMetric label="Conversion Lift" target={32} suffix="%+" reducedMotion={reducedMotion} delay={0.2} />
              </div>
            </motion.div>

            <div className="flex items-center justify-between font-mono-label !text-[0.52rem] text-muted">
              <span>SEO · Google Ads · GTM · GA4</span>
              <span className="text-accent">— 01</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
