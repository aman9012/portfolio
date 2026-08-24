import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Syne } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteMetadata } from "@/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s — ${siteMetadata.title.split(" — ")[0]}`,
  },
  description: siteMetadata.description,
  metadataBase: new URL(siteMetadata.url),
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.url,
    siteName: siteMetadata.title.split(" — ")[0],
    locale: "en_US",
    type: "website",
    images: [{ url: siteMetadata.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="grain-overlay min-h-dvh antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
