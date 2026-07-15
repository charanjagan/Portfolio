import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <div className="border-y border-ink-800 bg-ink-900/40">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-3 gap-y-3 px-6 py-5">
        <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-600">
          Skills
        </span>
        <span className="hidden h-4 w-px bg-ink-700 sm:block" />
        {skills.map((skill) => (
          <span key={skill} className="font-mono text-xs text-zinc-400">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
