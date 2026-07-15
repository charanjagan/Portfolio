import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/lib/data";
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

const title = `${profile.name} — Portfolio`;

export const metadata: Metadata = {
  metadataBase: new URL("https://charanjagan.vercel.app"),
  title,
  description: `${profile.tagline}. Creator of PickMySeat.`,
  keywords: [
    "Charan Jagan",
    "portfolio",
    "PickMySeat",
    "ECE",
    "CEG",
    "Anna University",
    "Next.js",
    "data analytics",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title,
    description: profile.tagline,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.tagline,
  },
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
      <body>{children}</body>
    </html>
  );
}
