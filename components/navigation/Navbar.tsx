"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { primaryNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Primary navigation"
        className="border-b border-border/50 bg-background/80 backdrop-blur-md"
      >
        <div className="container-base flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="font-display text-sm font-semibold tracking-widest text-foreground uppercase transition-colors hover:text-accent md:text-base"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 md:flex">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-mono-label text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-elevated md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={cn(
          "border-b border-border bg-background/95 backdrop-blur-md md:hidden",
          isOpen ? "block" : "hidden",
        )}
        aria-hidden={!isOpen}
      >
        <ul className="container-base flex flex-col gap-1 py-4">
          {primaryNavigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-md px-3 py-3 font-mono-label text-muted transition-colors hover:bg-elevated hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
