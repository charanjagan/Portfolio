import { experience } from "@/lib/data";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol className="space-y-5">
        {experience.map((role) => (
          <li
            key={role.title}
            className="ease-spring relative rounded-3xl bg-white/55 p-6 shadow-glass backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-hover"
            style={{ border: "1px solid rgba(255, 255, 255, 0.45)" }}
          >
            <p className="font-mono text-xs text-ios-blue">{role.period}</p>

            <h3 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900">
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
                  className="relative pl-4 text-sm leading-relaxed text-zinc-600 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-ios-indigo"
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
                    className="glass-subtle rounded-full px-2.5 py-1 font-mono text-[11px] text-zinc-600"
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
