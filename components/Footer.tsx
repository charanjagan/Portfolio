import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-paper-300">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
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
              className="text-zinc-600 underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
