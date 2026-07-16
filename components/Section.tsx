import Reveal from "./Reveal";

export default function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <Reveal className="glass rounded-3xl p-6 shadow-glass sm:p-8">
        <div className="mb-8 flex items-baseline gap-3">
          <span className="rounded-full bg-white/60 px-2.5 py-1 font-mono text-[11px] tracking-wide text-ios-blue">
            {index}
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            {title}
          </h2>
        </div>
        {children}
      </Reveal>
    </section>
  );
}
