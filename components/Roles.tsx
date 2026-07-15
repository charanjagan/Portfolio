import { responsibilities } from "@/lib/data";
import Section from "./Section";

export default function Roles() {
  return (
    <Section id="roles" index="03" title="Roles & Responsibilities">
      <ul className="grid gap-x-10 gap-y-px sm:grid-cols-2">
        {responsibilities.map((item) => (
          <li
            key={item.org}
            className="border-t border-ink-800 py-5 first:border-t-0 sm:[&:nth-child(2)]:border-t-0"
          >
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h3 className="text-sm font-semibold text-white">{item.role}</h3>
              {item.period && (
                <span className="ml-auto font-mono text-[11px] text-zinc-600">
                  {item.period}
                </span>
              )}
            </div>

            <p className="mt-0.5 font-mono text-xs text-accent">{item.org}</p>

            <p className="mt-2 text-[13px] leading-relaxed text-zinc-500">
              {item.summary}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
