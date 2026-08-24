import type { ReactNode } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <Navbar />
      <div className="flex min-h-dvh flex-col pt-16 md:pt-20">{children}</div>
      <Footer />
    </>
  );
}
