import Image from "next/image";
import { FolderKanban, Lock, TrendingUp } from "lucide-react";
import { Github } from "./icons";
import { profile, projects, type Project } from "@/lib/data";
import Section from "./Section";

const STATUS_STYLES: Record<string, string> = {
  Live: "bg-emerald-500/15 text-emerald-800",
  "In Progress": "bg-ios-purple/15 text-[#7e22ce]",
};

const LINK_CLASS =
  "inline-flex items-center gap-1.5 rounded font-mono text-xs text-zinc-700 underline-offset-4 transition-colors hover:text-accent hover:underline";

function TechTag({ label }: { label: string }) {
  return (
    <span className="glass-subtle rounded-full px-2.5 py-1 font-mono text-[11px] text-zinc-600">
      {label}
    </span>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  if (!project.href && !project.repo && !project.privateRepo) return null;

  return (
    <div className="relative mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
      {project.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} live site (opens in a new tab)`}
          className={LINK_CLASS}
        >
          {project.hrefLabel ?? project.href} ↗
        </a>
      )}

      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} source on GitHub (opens in a new tab)`}
          className={LINK_CLASS}
        >
          <Github aria-hidden className="h-3.5 w-3.5" />
          GitHub ↗
        </a>
      )}

      {project.privateRepo &&
        (project.href ? (
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-600">
            <Lock aria-hidden className="h-3.5 w-3.5" />
            Private repo
          </span>
        ) : (
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent(
              `Demo request: ${project.title}`,
            )}`}
            className={LINK_CLASS}
          >
            <Lock aria-hidden className="h-3.5 w-3.5" />
            Private repo — demo on request
          </a>
        ))}
    </div>
  );
}

function Card({ project }: { project: Project }) {
  return (
    <article
      className={`ease-spring group relative flex flex-col rounded-3xl bg-white/55 p-6 shadow-glass backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glass-hover ${
        project.featured ? "sm:col-span-2" : ""
      }`}
      style={{ border: "1px solid rgba(255, 255, 255, 0.45)" }}
    >
      {project.featured && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-ios-blue/[0.06] to-ios-pink/[0.04]"
        />
      )}

      <div
        className={`relative mb-5 overflow-hidden rounded-2xl bg-white/40 ${
          project.featured ? "aspect-[16/9] sm:aspect-[21/9]" : "aspect-[16/9]"
        }`}
        style={{ border: "1px solid rgba(255, 255, 255, 0.45)" }}
      >
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes={
            project.featured
              ? "(min-width: 1024px) 912px, 100vw"
              : "(min-width: 1024px) 448px, (min-width: 640px) 50vw, 100vw"
          }
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="relative flex flex-wrap items-center gap-3">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
          {project.title}
        </h3>
        {project.status && (
          <span
            className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
              STATUS_STYLES[project.status] ?? "bg-zinc-500/10 text-zinc-600"
            }`}
          >
            {project.status}
          </span>
        )}
        {project.period && (
          <span className="ml-auto font-mono text-[11px] text-zinc-500">
            {project.period}
          </span>
        )}
      </div>

      <p className="relative mt-1 font-mono text-xs text-accent">{project.blurb}</p>

      <p className="relative mt-3 font-mono text-xs text-accent-warm">
        <span aria-hidden className="text-zinc-500">
          {"// "}
        </span>
        {project.quip}
      </p>

      <p className="relative mt-2 text-sm font-medium text-zinc-800">
        {project.summary}
      </p>

      {project.impact && (
        <p className="relative mt-2 flex items-start gap-1.5 font-mono text-xs text-emerald-800">
          <TrendingUp aria-hidden className="mt-px h-3.5 w-3.5 shrink-0" />
          <span>
            <span className="sr-only">Impact: </span>
            {project.impact}
          </span>
        </p>
      )}

      <p className="relative mt-3 text-sm leading-relaxed text-zinc-600">
        {project.description}
      </p>

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <TechTag key={tech} label={tech} />
        ))}
      </div>

      <ProjectLinks project={project} />
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" icon={<FolderKanban size={20} />} title="Projects">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
