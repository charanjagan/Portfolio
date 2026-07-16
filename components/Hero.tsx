import { Mail } from "lucide-react";
import { Github, Linkedin } from "./icons";
import { profile, type IconKey } from "@/lib/data";

type IconComponent = React.ComponentType<{
  className?: string;
  "aria-hidden"?: boolean;
}>;

const ICONS: Record<IconKey, IconComponent> = {
  mail: Mail,
  linkedin: Linkedin,
  github: Github,
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="hero-grid hero-mask animate-grid-drift pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-16 sm:pt-20">
        <div className="rounded-2xl border border-[#E5E7EB] bg-[#FAFBFC] p-6 shadow-sm sm:p-8">
        <h1 className="animate-fade-up text-5xl font-semibold tracking-tight text-zinc-900 sm:text-7xl">
          {profile.name}
        </h1>

        <ul className="animate-fade-up mt-8 max-w-2xl space-y-2.5 [animation-delay:60ms]">
          {profile.bio.map((line) => (
            <li
              key={line}
              className="relative pl-6 text-[15px] leading-relaxed text-zinc-600 before:absolute before:left-0 before:top-[0.6rem] before:h-1.5 before:w-1.5 before:rotate-45 before:bg-accent/70"
            >
              {line}
            </li>
          ))}
        </ul>

        <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-3 [animation-delay:120ms]">
          <a
            href="#projects"
            className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-paper-50 transition-transform hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-paper-400 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900"
          >
            Resume ↗
          </a>
        </div>

        <div className="animate-fade-up mt-6 flex flex-wrap items-center gap-3 [animation-delay:180ms]">
          {profile.links.map((link) => {
            const Icon = link.icon ? ICONS[link.icon] : null;
            const external = !link.href.startsWith("mailto:");

            return (
              <a
                key={link.label}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                className="inline-flex items-center gap-2 rounded-full border border-paper-300 bg-paper-100 px-4 py-2 text-sm font-medium text-zinc-700 transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
              >
                {Icon && <Icon aria-hidden className="h-4 w-4" />}
                {link.label}
              </a>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
