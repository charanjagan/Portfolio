import { Sparkles } from "lucide-react";
import { skills } from "@/lib/data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
      <Reveal className="glass rounded-3xl p-6 shadow-glass sm:p-8">
        <h2 className="font-mono text-[11px] font-normal uppercase tracking-widest text-zinc-500">
          Skills
        </h2>

        <dl className="mt-4 space-y-3">
          {skills.map((group) => (
            <div
              key={group.label}
              className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4"
            >
              <dt className="shrink-0 font-mono text-[11px] uppercase tracking-widest text-accent sm:w-28">
                {group.label}
              </dt>
              <dd className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="ease-spring glass-subtle inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium text-zinc-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
                  >
                    <Sparkles aria-hidden className="h-3 w-3 text-ios-blue" />
                    {skill}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  );
}
