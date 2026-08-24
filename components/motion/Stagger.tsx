"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { motionEase } from "./tokens";

interface StaggerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  y?: number;
}

export function Stagger({
  children,
  className,
  delay = 0,
  staggerDelay = 0.08,
  once = true,
}: StaggerProps) {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: prefersReducedMotion ? 0 : delay,
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 20,
}: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants: Variants = {
    hidden: prefersReducedMotion
      ? {
          opacity: 1,
          y: 0,
        }
      : {
          opacity: 0,
          y,
        },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.55,
        ease: motionEase.cinematic,
      },
    },
  };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}