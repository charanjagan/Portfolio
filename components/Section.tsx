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
    <section id={id} className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <div className="rounded-2xl border border-[#E5E7EB] bg-[#FAFBFC] p-6 shadow-sm sm:p-8">
        <div className="mb-10 flex items-baseline gap-4">
          <span className="font-mono text-xs text-accent">{index}</span>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            {title}
          </h2>
          <span className="h-px flex-1 bg-paper-300" />
        </div>
        {children}
      </div>
    </section>
  );
}
