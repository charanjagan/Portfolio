import { Sparkles } from "lucide-react";
import { skills } from "@/lib/data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
      <Reveal className="glass rounded-3xl p-6 shadow-glass sm:p-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
          <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
            Skills
          </span>
          <span className="hidden h-4 w-px bg-zinc-300/60 sm:block" />
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="ease-spring glass-subtle inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium text-zinc-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:text-ios-blue"
              >
                <Sparkles aria-hidden className="h-3 w-3 text-ios-blue" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
