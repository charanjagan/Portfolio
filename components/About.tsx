import { User } from "lucide-react";
import { profile } from "@/lib/data";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" icon={<User size={20} />} title="About">
      <div className="max-w-3xl space-y-3">
        {profile.about.map((line) => (
          <p key={line} className="text-[15px] leading-relaxed text-zinc-600">
            {line}
          </p>
        ))}
      </div>
    </Section>
  );
}
