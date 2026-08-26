import Link from "next/link";
import { footerNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { formatDisciplines } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30">
      <Container className="py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
  <div className="flex flex-col gap-2">
    <p className="font-display text-lg font-semibold text-foreground">
      {siteConfig.name}
    </p>

    <p className="text-sm text-muted">
      {formatDisciplines(siteConfig.disciplines)}
    </p>
  </div>

  <div className="flex flex-col gap-3">
    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
      Connect
    </p>

    <div className="flex flex-wrap gap-x-6 gap-y-2">
      <a
        href={siteConfig.socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-muted transition-colors hover:text-foreground"
      >
        LinkedIn
      </a>

      <a
        href={siteConfig.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-muted transition-colors hover:text-foreground"
      >
        GitHub
      </a>

      <a
        href={`mailto:${siteConfig.email}`}
        className="text-sm text-muted transition-colors hover:text-foreground"
      >
        Email
      </a>
    </div>
  </div>

  <nav aria-label="Footer navigation">
    <ul className="flex flex-wrap gap-x-6 gap-y-2">
      {footerNavigation.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
</div>

        <div className="mt-8 border-t border-border pt-8">
          <p className="text-xs text-muted">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
