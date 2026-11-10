import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionProvider } from "@/components/providers/motion-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-chef-coral.vercel.app"),
  title: {
    default: "AI Chef Mate — Make room for good food",
    template: "%s | AI Chef Mate",
  },
  description:
    "A thoughtful kitchen companion for turning your ingredients, preferences and time into your next recipe idea.",
  applicationName: "AI Chef Mate",
  icons: { icon: "/favicon.svg" },
  keywords: [
    "recipe inspiration",
    "AI recipe prompt",
    "meal ideas",
    "home cooking",
    "ingredient-based recipes",
  ],
  openGraph: {
    title: "AI Chef Mate — Make room for good food",
    description:
      "A thoughtful way to shape your next kitchen idea around what you love, what you have and the time you have.",
    type: "website",
    siteName: "AI Chef Mate",
    images: ["/images/hero-table.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chef Mate — Make room for good food",
    description: "A thoughtful way to shape your next kitchen idea.",
    images: ["/images/hero-table.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf6f0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <MotionProvider>
          <a className="skip-link" href="#main-content">Skip to content</a>
          <SiteHeader />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
