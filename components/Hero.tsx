import { Mail } from "lucide-react";
import { Github, Linkedin } from "./icons";
import { profile, type IconKey } from "@/lib/data";
import Reveal from "./Reveal";

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
    <section className="relative overflow-hidden px-4 pb-16 pt-8 sm:px-6">
      <Reveal className="glass mx-auto max-w-5xl rounded-3xl p-6 shadow-glass-lg sm:p-10">
        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 sm:text-7xl">
          {profile.name}
        </h1>

        <ul className="mt-8 max-w-2xl space-y-2.5">
          {profile.bio.map((line) => (
            <li
              key={line}
              className="relative pl-6 text-[15px] leading-relaxed text-zinc-600 before:absolute before:left-0 before:top-[0.6rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-ios-blue"
            >
              {line}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="ease-spring rounded-full bg-gradient-to-r from-ios-blue to-ios-indigo px-6 py-3 text-sm font-semibold tracking-tight text-white shadow-glass transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glass-hover"
          >
            View Projects
          </a>
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="ease-spring glass rounded-full px-6 py-3 text-sm font-semibold tracking-tight text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-zinc-900 hover:shadow-glass"
          >
            Resume ↗
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
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
                title={link.label}
                className="ease-spring glass flex h-11 w-11 items-center justify-center rounded-full text-zinc-600 shadow-glass transition-all duration-300 hover:-translate-y-0.5 hover:text-ios-blue hover:shadow-glass-hover"
              >
                {Icon && <Icon aria-hidden className="h-5 w-5" />}
              </a>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
