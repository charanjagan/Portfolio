import { education } from "@/lib/data";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" index="03" title="Education">
      <ol className="relative border-l border-ink-700">
        {education.map((study) => (
          <li key={study.degree} className="relative pb-10 pl-8 last:pb-0">
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-ink-950" />

            <p className="font-mono text-xs text-accent">{study.period}</p>

            <h3 className="mt-2 text-base font-semibold text-white sm:text-lg">
              {study.degree}
            </h3>

            <p className="mt-0.5 text-sm text-zinc-400">
              {study.school}
              <span className="text-zinc-600"> · {study.location}</span>
            </p>

            <p className="mt-2 font-mono text-xs text-zinc-300">{study.result}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
