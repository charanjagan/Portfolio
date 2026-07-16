import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-4 pb-8 pt-2 sm:px-6">
      <div className="glass mx-auto flex max-w-5xl flex-col gap-4 rounded-3xl px-6 py-6 shadow-glass sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-zinc-500">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Tailwind.
        </p>

        <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs">
          {profile.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-zinc-600 underline-offset-4 transition-colors hover:text-ios-blue hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
