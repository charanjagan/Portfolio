import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: "#ffffff",
          100: "#f7f8fa",
          200: "#eef1f5",
          300: "#e0e4ea",
          400: "#c8ced8",
        },
        // Both accents are darkened well past their dark-theme values so they
        // clear 4.5:1 on white at the small sizes they're used at.
        accent: {
          DEFAULT: "#0369a1",
          warm: "#b45309",
        },
        ios: {
          blue: "#0A84FF",
          indigo: "#5E5CE6",
          purple: "#AF52DE",
          pink: "#FF2D92",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "system-ui",
          "sans-serif",
        ],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glass: "0 8px 32px rgba(31, 41, 55, 0.10)",
        "glass-lg": "0 20px 50px rgba(31, 41, 55, 0.16)",
        "glass-hover": "0 24px 60px rgba(31, 41, 55, 0.20)",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        blink: "blink 1.1s step-end infinite",
        "blob-float-1": "blob-float-1 26s ease-in-out infinite alternate",
        "blob-float-2": "blob-float-2 32s ease-in-out infinite alternate",
        "blob-float-3": "blob-float-3 22s ease-in-out infinite alternate",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "blob-float-1": {
          "0%": { transform: "translate(-5%, -8%) scale(1)" },
          "100%": { transform: "translate(8%, 10%) scale(1.15)" },
        },
        "blob-float-2": {
          "0%": { transform: "translate(6%, 4%) scale(1.1)" },
          "100%": { transform: "translate(-10%, -6%) scale(0.95)" },
        },
        "blob-float-3": {
          "0%": { transform: "translate(-4%, 6%) scale(0.9)" },
          "100%": { transform: "translate(6%, -10%) scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
