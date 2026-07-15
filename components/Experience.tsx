import { experience } from "@/lib/data";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol className="relative border-l border-paper-300">
        {experience.map((role) => (
          <li key={role.title} className="relative pb-12 pl-8 last:pb-0">
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-paper-50" />

            <p className="font-mono text-xs text-accent">{role.period}</p>

            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              {role.title}
            </h3>

            <p className="mt-0.5 text-sm text-zinc-600">
              {role.org}
              <span className="text-zinc-400"> · {role.location}</span>
            </p>

            <ul className="mt-4 space-y-2">
              {role.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="relative pl-4 text-sm leading-relaxed text-zinc-600 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-paper-400"
                >
                  {bullet}
                </li>
              ))}
            </ul>

            {role.tech && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {role.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-paper-300 bg-paper-100 px-2 py-0.5 font-mono text-[11px] text-zinc-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
