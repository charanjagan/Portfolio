import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10 sm:py-12">
      <div className="rounded-2xl border border-[#E5E7EB] bg-[#FAFBFC] p-6 shadow-sm sm:p-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
          <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
            Skills
          </span>
          <span className="hidden h-4 w-px bg-paper-400 sm:block" />
          {skills.map((skill) => (
            <span key={skill} className="font-mono text-xs text-zinc-600">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
