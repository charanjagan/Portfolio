import { projects, type Project } from "@/lib/data";
import Section from "./Section";

const STATUS_STYLES: Record<string, string> = {
  Live: "bg-emerald-600/10 text-emerald-700",
  "In Progress": "bg-accent-warm/10 text-accent-warm",
};

function TechTag({ label }: { label: string }) {
  return (
    <span className="rounded border border-paper-300 bg-paper-100 px-2 py-0.5 font-mono text-[11px] text-zinc-600">
      {label}
    </span>
  );
}

function Card({ project }: { project: Project }) {
  return (
    <article
      className={`group relative flex flex-col rounded-xl border border-paper-300 bg-paper-50 p-6 shadow-sm transition-all hover:border-paper-400 hover:shadow-md ${
        project.featured ? "sm:col-span-2" : ""
      }`}
    >
      {project.featured && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-accent/[0.05] to-transparent"
        />
      )}

      <div className="relative flex flex-wrap items-center gap-3">
        <h3 className="text-lg font-semibold text-zinc-900">{project.title}</h3>
        {project.status && (
          <span
            className={`rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
              STATUS_STYLES[project.status] ?? "bg-paper-200 text-zinc-500"
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

      <p className="relative mt-1 font-mono text-xs text-accent">{project.blurb}</p>

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
          className="relative mt-5 w-fit font-mono text-xs text-zinc-700 underline-offset-4 transition-colors hover:text-accent hover:underline"
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
