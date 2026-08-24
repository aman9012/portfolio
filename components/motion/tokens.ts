import type { Transition } from "framer-motion";

export const motionDuration = {
  fast: 0.25,
  base: 0.45,
  slow: 0.65,
} as const;

export const motionEase = {
  out: [0.16, 1, 0.3, 1] as const,
  cinematic: [0.22, 1, 0.36, 1] as const,
} as const;

export const revealTransition: Transition = {
  duration: motionDuration.base,
  ease: motionEase.cinematic,
};

export const navigationTransition: Transition = {
  duration: 0.35,
  ease: motionEase.out,
};