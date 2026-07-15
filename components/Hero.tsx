"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const ROTATING = [
  "seat predictors for 550+ colleges",
  "routing engines for 247 commuters",
  "eyes for people who cannot see",
  "cars that drive themselves",
];

function useRotatingText(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const done = !deleting && text === word;
    const cleared = deleting && text === "";

    const delay = done ? 1900 : cleared ? 200 : deleting ? 28 : 55;

    const timer = setTimeout(() => {
      if (done) {
        setDeleting(true);
      } else if (cleared) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      } else {
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1),
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return text;
}

export default function Hero() {
  const typed = useRotatingText(ROTATING);

  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden
        className="hero-grid hero-mask animate-grid-drift pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-36 sm:pt-44">
        <p className="animate-fade-up font-mono text-xs text-accent">
          <span className="text-zinc-600">$</span> whoami
        </p>

        <h1 className="animate-fade-up mt-4 text-5xl font-semibold tracking-tight text-white sm:text-7xl [animation-delay:60ms]">
          {profile.name}
        </h1>

        <p className="animate-fade-up mt-5 max-w-2xl text-balance text-lg leading-relaxed text-zinc-400 sm:text-xl [animation-delay:120ms]">
          {profile.tagline}
        </p>

        <p className="animate-fade-up mt-6 font-mono text-sm text-zinc-500 [animation-delay:180ms]">
          currently building{" "}
          <span className="text-accent-warm">{typed}</span>
          <span className="animate-blink ml-0.5 inline-block w-2 text-accent-warm">
            ▍
          </span>
        </p>

        <div className="animate-fade-up mt-10 max-w-2xl space-y-2 border-l border-ink-700 pl-5 text-[15px] leading-relaxed text-zinc-400 [animation-delay:240ms]">
          {profile.bio.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-3 [animation-delay:300ms]">
          <a
            href="#projects"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink-600 px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
          >
            Resume ↗
          </a>
        </div>

        <div className="animate-fade-up mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm [animation-delay:360ms]">
          {profile.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-zinc-500 underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
