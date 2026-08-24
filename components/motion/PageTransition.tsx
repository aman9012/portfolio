"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { motionEase } from "./tokens";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({
  children,
}: PageTransitionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        prefersReducedMotion
          ? false
          : {
              opacity: 0,
              y: 8,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.4,
        ease: motionEase.out,
      }}
    >
      {children}
    </motion.div>
  );
}
