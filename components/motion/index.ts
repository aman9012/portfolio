/**
 * Motion utilities and providers — Phase 4
 *
 * Shared animation variants, scroll hooks, and reduced-motion helpers
 * will be implemented here.
 */

import type { Transition } from "framer-motion";
export { Reveal } from "./Reveal";

/** Shared, restrained transition used by global navigation motion. */
export const navigationTransition: Transition = {
  duration: 0.35,
  ease: [0.16, 1, 0.3, 1],
};
