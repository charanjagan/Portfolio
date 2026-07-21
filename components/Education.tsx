import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" icon={<GraduationCap size={16} />} title="Education">
      <ol className="space-y-4">
        {education.map((study) => (
          <li
            key={study.degree}
            className="ease-spring rounded-3xl bg-white/55 p-6 shadow-glass backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-hover"
            style={{ border: "1px solid rgba(255, 255, 255, 0.45)" }}
          >
            <p className="font-mono text-xs text-ios-blue">{study.period}</p>

            <h3 className="mt-2 text-base font-semibold tracking-tight text-zinc-900 sm:text-lg">
              {study.degree}
            </h3>

            <p className="mt-0.5 text-sm text-zinc-600">
              {study.school}
              <span className="text-zinc-400"> · {study.location}</span>
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
