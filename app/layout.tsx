import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
  metadataBase: new URL("https://charanjagan.vercel.app"),
  title: "Charan Jagan — Portfolio",
  description:
    "ECE undergrad @ CEG, Anna University — building at the intersection of AI, data, and full-stack products. Creator of PickMySeat.",
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
  authors: [{ name: "Charan Jagan" }],
  openGraph: {
    title: "Charan Jagan — Portfolio",
    description:
      "ECE undergrad @ CEG, Anna University — building at the intersection of AI, data, and full-stack products.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charan Jagan — Portfolio",
    description:
      "ECE undergrad @ CEG, Anna University — building at the intersection of AI, data, and full-stack products.",
  },
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
