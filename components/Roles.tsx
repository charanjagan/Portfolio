import { Users } from "lucide-react";
import { responsibilities } from "@/lib/data";
import Section from "./Section";

export default function Roles() {
  return (
    <Section id="roles" icon={<Users size={16} />} title="Roles & Responsibilities">
      <ul className="grid gap-4 sm:grid-cols-2">
        {responsibilities.map((item) => (
          <li
            key={item.org}
            className="ease-spring rounded-3xl bg-white/55 p-5 shadow-glass backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-hover"
            style={{ border: "1px solid rgba(255, 255, 255, 0.45)" }}
          >
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h3 className="text-sm font-semibold tracking-tight text-zinc-900">
                {item.role}
              </h3>
              {item.period && (
                <span className="ml-auto font-mono text-[11px] text-zinc-400">
                  {item.period}
                </span>
              )}
            </div>

            <p className="mt-0.5 font-mono text-xs text-ios-blue">{item.org}</p>

            <p className="mt-2 text-[13px] leading-relaxed text-zinc-600">
              {item.summary}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
