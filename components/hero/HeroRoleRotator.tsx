"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type HeroRoleRotatorProps = {
  reducedMotion: boolean | null;
  className?: string;
};

const roles = [
  "Web Developer",
  "Digital Marketer",
  "Mobile App Developer",
  "Performance Optimizer",
];

const TYPE_SPEED = 55;
const DELETE_SPEED = 32;
const HOLD_DURATION = 1400;

export function HeroRoleRotator({ reducedMotion, className }: HeroRoleRotatorProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const currentRole = roles[roleIndex];

    if (phase === "typing") {
      if (displayText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, TYPE_SPEED);
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => setPhase("holding"), HOLD_DURATION);
      return () => clearTimeout(timeout);
    }

    if (phase === "holding") {
      const timeout = setTimeout(() => setPhase("deleting"), 0);
      return () => clearTimeout(timeout);
    }

    if (phase === "deleting") {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        }, DELETE_SPEED);
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => {
        setRoleIndex((index) => (index + 1) % roles.length);
        setPhase("typing");
      }, 0);
      return () => clearTimeout(timeout);
    }
  }, [displayText, phase, roleIndex, reducedMotion]);

  return (
    <motion.p
      initial={reducedMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reducedMotion ? 0 : 0.55,
        delay: reducedMotion ? 0 : 0.42,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      aria-live="off"
    >
      <span className="font-mono-label text-muted">I build as a </span>
      <span
        className="font-mono-label text-accent"
        aria-label={`${roles[roleIndex]}, and other roles`}
      >
        {reducedMotion ? roles[0] : displayText}
      </span>
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block h-[0.85em] w-[2px] translate-y-[0.1em] animate-pulse bg-accent"
      />
    </motion.p>
  );
}
