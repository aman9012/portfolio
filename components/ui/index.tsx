import Link from "next/link";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  index,
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {index && (
        <span className="font-mono-label text-accent">{index}</span>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-lg text-muted md:text-xl">{subtitle}</p>
      )}
    </div>
  );
}

type PageHeaderProps = {
  title: string;
  description?: string;
  className?: string;
};

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <header className={cn("mb-16", className)}>
      <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-lg text-muted md:text-xl">
          {description}
        </p>
      )}
    </header>
  );
}

type PlaceholderBlockProps = {
  message: string;
  className?: string;
};

export function PlaceholderBlock({ message, className }: PlaceholderBlockProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-secondary/50 p-8 text-center",
        className,
      )}
    >
      <p className="placeholder-content text-sm">{message}</p>
    </div>
  );
}

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonLinkProps) {
  const variants = {
    primary:
      "bg-accent text-fg-inverse hover:bg-accent-hover border border-transparent",
    secondary:
      "bg-transparent text-foreground border border-border hover:border-border-strong hover:bg-elevated/50",
    ghost: "bg-transparent text-muted hover:text-foreground",
  };

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-[var(--duration-base)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
    variants[variant],
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
