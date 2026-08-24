"use client";

import type { PointerEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { HeroActions } from "./HeroActions";
import { HeroHeadline } from "./HeroHeadline";
import { HeroInterface } from "./HeroInterface";
import { HeroScrollIndicator } from "./HeroScrollIndicator";

const heroTransition = {
  duration: 0.55,
  ease: [0.16, 1, 0.3, 1] as const,
};

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const interfaceX = useSpring(pointerX, { stiffness: 120, damping: 24, mass: 0.4 });
  const interfaceY = useSpring(pointerY, { stiffness: 120, damping: 24, mass: 0.4 });
  const foregroundX = useTransform(interfaceX, (value) => value * 1.35);
  const foregroundY = useTransform(interfaceY, (value) => value * 1.35);

  const resetParallax = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (
      prefersReducedMotion ||
      event.pointerType !== "mouse" ||
      window.innerWidth < 768 ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const normalizedX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const normalizedY = (event.clientY - bounds.top) / bounds.height - 0.5;

    pointerX.set(normalizedX * 10);
    pointerY.set(normalizedY * 8);
  };

  return (
    <section
      aria-labelledby="hero-heading"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetParallax}
      className="relative isolate flex min-h-[calc(100svh-4rem)] overflow-hidden md:min-h-[calc(100svh-5rem)]"
    >
      <motion.div
        aria-hidden="true"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...heroTransition, duration: 0.7 }}
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 55% 48% at 74% 46%, rgba(201, 169, 98, 0.09), transparent 68%), radial-gradient(ellipse 40% 34% at 8% 92%, rgba(255, 255, 255, 0.035), transparent 72%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-border/60"
      />

      <div className="container-base relative z-10 grid w-full grid-rows-[auto_auto_auto_1fr_auto] gap-5 py-7 sm:py-9 md:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.92fr)] md:grid-rows-[1fr_auto] md:gap-x-10 md:py-10 lg:gap-x-16">
        <div className="relative z-20 flex flex-col justify-center md:col-start-1 md:row-start-1">
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...heroTransition, delay: prefersReducedMotion ? 0 : 0.14 }}
            className="font-mono-label mb-4 text-accent md:mb-6"
          >
            Aman Yadav
          </motion.p>

          <HeroHeadline reducedMotion={prefersReducedMotion} />

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...heroTransition, delay: prefersReducedMotion ? 0 : 0.57 }}
            className="mt-5 max-w-md font-mono-label leading-6 text-muted md:mt-7 md:max-w-lg"
          >
            <span className="block sm:inline">Web Development</span>
            <span className="hidden px-2 text-accent sm:inline">·</span>
            <span className="block sm:inline">Digital Marketing</span>
            <span className="hidden px-2 text-accent sm:inline">·</span>
            <span className="block sm:inline">Creative Direction</span>
          </motion.p>
        </div>

        <HeroInterface
          reducedMotion={prefersReducedMotion}
          interfaceStyle={{ x: interfaceX, y: interfaceY }}
          foregroundStyle={{ x: foregroundX, y: foregroundY }}
        />

        <HeroActions
          reducedMotion={prefersReducedMotion}
          className="md:col-start-1 md:row-start-2 md:mt-0 md:self-end md:pb-10"
        />

        <HeroScrollIndicator reducedMotion={prefersReducedMotion} />
      </div>
    </section>
  );
}
