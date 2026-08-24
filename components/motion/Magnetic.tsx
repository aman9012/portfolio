"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import type { ReactNode, PointerEvent } from "react";
import { useEffect, useState } from "react";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function Magnetic({
  children,
  className,
  strength = 6,
}: MagneticProps) {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 320,
    damping: 24,
    mass: 0.25,
  });

  const springY = useSpring(y, {
    stiffness: 320,
    damping: 24,
    mass: 0.25,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );

    const update = () => {
      setEnabled(mediaQuery.matches && !prefersReducedMotion);
    };

    update();
    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, [prefersReducedMotion]);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!enabled) return;

    const bounds = event.currentTarget.getBoundingClientRect();

    const relativeX =
      (event.clientX - bounds.left) / bounds.width - 0.5;

    const relativeY =
      (event.clientY - bounds.top) / bounds.height - 0.5;

    x.set(relativeX * strength);
    y.set(relativeY * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      style={{
        x: enabled ? springX : 0,
        y: enabled ? springY : 0,
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  );
}