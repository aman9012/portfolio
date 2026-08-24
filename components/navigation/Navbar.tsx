"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigationTransition } from "@/components/motion";
import { primaryNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const scrollThreshold = 24;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    let animationFrame: number | null = null;

    const updateScrollState = () => {
      const nextIsScrolled = window.scrollY > scrollThreshold;
      setIsScrolled((current) =>
        current === nextIsScrolled ? current : nextIsScrolled,
      );
    };

    const handleScroll = () => {
      if (animationFrame !== null) return;

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = null;
        updateScrollState();
      });
    };

    updateScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (mediaQuery.matches) setIsOpen(false);
    };

    closeOnDesktop();
    mediaQuery.addEventListener("change", closeOnDesktop);
    return () => mediaQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const body = document.body;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const menuTransition = prefersReducedMotion
    ? { duration: 0 }
    : navigationTransition;
  const menuItemOffset = prefersReducedMotion ? 0 : 10;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <motion.nav
        aria-label="Primary navigation"
        animate={{ y: isScrolled ? 12 : 0 }}
        transition={navigationTransition}
        className={cn(
          "pointer-events-auto border-b border-transparent bg-background/75 backdrop-blur-md transition-[background-color,border-color,box-shadow,border-radius] duration-300 md:mx-4 md:bg-transparent md:backdrop-blur-none",
          isScrolled &&
            "border-border/70 bg-background/80 shadow-subtle md:rounded-xl md:bg-background/80 md:backdrop-blur-md",
        )}
      >
        <div className="container-base flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="font-display text-sm font-semibold tracking-widest text-foreground uppercase transition-colors hover:text-accent md:text-base"
          >
            {siteConfig.name}
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative block font-mono-label text-muted/75 transition-[color,opacity,transform] duration-200 hover:translate-y-[-1px] hover:text-foreground hover:opacity-100 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:text-foreground focus-visible:opacity-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors duration-200 hover:bg-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.span
                key={isOpen ? "close" : "open"}
                initial={prefersReducedMotion ? false : { opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, rotate: 45 }}
                transition={menuTransition}
                className="flex"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={menuTransition}
            className="pointer-events-auto fixed inset-x-0 top-16 bottom-0 bg-background/80 backdrop-blur-sm md:hidden"
          >
            <motion.nav
              initial={prefersReducedMotion ? false : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
              transition={menuTransition}
              aria-label="Mobile navigation links"
              className="border-b border-border/70 bg-background/95 shadow-subtle"
            >
              <ul className="container-base flex flex-col gap-1 py-4">
                {primaryNavigation.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: menuItemOffset }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0, y: menuItemOffset }}
                    transition={{
                      ...menuTransition,
                      delay: prefersReducedMotion ? 0 : index * 0.045,
                    }}
                  >
                    <Link
                      href={item.href}
                      className="block rounded-md px-3 py-3 font-mono-label text-muted transition-colors duration-200 hover:bg-elevated hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
