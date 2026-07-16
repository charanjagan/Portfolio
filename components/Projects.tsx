import { projects, type Project } from "@/lib/data";
import Section from "./Section";

const STATUS_STYLES: Record<string, string> = {
  Live: "bg-emerald-500/15 text-emerald-700",
  "In Progress": "bg-ios-purple/15 text-ios-purple",
};

function TechTag({ label }: { label: string }) {
  return (
    <span className="glass-subtle rounded-full px-2.5 py-1 font-mono text-[11px] text-zinc-600">
      {label}
    </span>
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

      <div className="relative flex flex-wrap items-center gap-3">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
          {project.title}
        </h3>
        {project.status && (
          <span
            className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
              STATUS_STYLES[project.status] ?? "bg-zinc-500/10 text-zinc-500"
            }`}
          >
            {project.status}
          </span>
        )}
        {project.period && (
          <span className="ml-auto font-mono text-[11px] text-zinc-400">
            {project.period}
          </span>
        )}
      </div>

      <p className="relative mt-1 font-mono text-xs text-ios-blue">{project.blurb}</p>

      <p className="relative mt-3 font-mono text-xs text-accent-warm">
        <span className="text-zinc-400">{"// "}</span>
        {project.quip}
      </p>

      <p className="relative mt-3 text-sm leading-relaxed text-zinc-600">
        {project.description}
      </p>

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <TechTag key={tech} label={tech} />
        ))}
      </div>

      {project.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-5 w-fit font-mono text-xs text-zinc-700 underline-offset-4 transition-colors hover:text-ios-blue hover:underline"
        >
          {project.hrefLabel ?? project.href} ↗
        </a>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" index="01" title="Projects">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
