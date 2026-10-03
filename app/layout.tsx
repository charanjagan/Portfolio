import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { education, profile } from "@/lib/data";
import { siteDescription, siteTitle, siteUrl } from "@/lib/site";
import GradientBackground from "@/components/GradientBackground";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Charan Jagan",
    "portfolio",
    "PickMySeat",
    "Purdue University",
    "MS ECE",
    "Electrical and Computer Engineering",
    "AI engineer",
    "data engineer",
    "CEG",
    "Anna University",
    "Next.js",
    "data analytics",
  ],
  authors: [{ name: profile.name }],
  alternates: { canonical: "/" },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: profile.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

const sameAs = profile.links
  .filter((link) => link.icon === "linkedin" || link.icon === "github")
  .map((link) => link.href);

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  jobTitle: "AI & Data Engineer",
  description: siteDescription,
  alumniOf: education.map((study) => ({
    "@type": "CollegeOrUniversity",
    name: study.school,
  })),
  sameAs,
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <GradientBackground />
        <div className="relative z-10">{children}</div>
        {/* The /_vercel/* script endpoints only exist on Vercel deployments. */}
        {process.env.VERCEL && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}
