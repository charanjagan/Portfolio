"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin } from "./icons";
import { navItems, profile } from "@/lib/data";

const SOCIALS = [
  { label: "LinkedIn", Icon: Linkedin },
  { label: "GitHub", Icon: Github },
].flatMap(({ label, Icon }) => {
  const link = profile.links.find((l) => l.label === label);
  return link ? [{ label, href: link.href, Icon }] : [];
});

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:pt-5">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
        <a
          href="#home"
          className={`glass rounded-full px-4 py-2.5 font-mono text-sm tracking-tight text-zinc-900 shadow-glass transition-shadow ${
            scrolled ? "shadow-glass-lg" : ""
          }`}
        >
          charan<span className="text-ios-blue">.</span>jagan
        </a>

        <nav
          className={`glass-strong relative hidden items-center gap-1 rounded-full p-1.5 shadow-glass transition-shadow lg:flex ${
            scrolled ? "shadow-glass-lg" : ""
          }`}
        >
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium tracking-tight transition-colors"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-ios-blue to-ios-indigo shadow-glass"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    isActive ? "text-white" : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className={`ease-spring glass hidden h-11 w-11 items-center justify-center rounded-full text-zinc-600 shadow-glass transition-all duration-300 hover:-translate-y-0.5 hover:text-ios-blue hover:shadow-glass-hover sm:flex ${
                scrolled ? "shadow-glass-lg" : ""
              }`}
            >
              <Icon aria-hidden className="h-[18px] w-[18px]" />
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="ease-spring rounded-full bg-gradient-to-r from-ios-blue to-ios-indigo px-5 py-2.5 text-sm font-semibold tracking-tight text-white shadow-glass transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glass-hover"
          >
            Contact
          </a>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className={`glass flex h-11 w-11 items-center justify-center rounded-full text-zinc-600 shadow-glass transition-shadow hover:text-zinc-900 lg:hidden ${
              scrolled ? "shadow-glass-lg" : ""
            }`}
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-200 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-4 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-200 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass-strong mx-auto mt-3 max-w-5xl rounded-3xl p-3 shadow-glass-lg lg:hidden"
          >
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                      active === item.href
                        ? "bg-gradient-to-r from-ios-blue to-ios-indigo text-white"
                        : "text-zinc-600 hover:bg-white/50 hover:text-zinc-900"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-zinc-600 transition-colors hover:bg-white/50 hover:text-zinc-900"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="mt-2 flex gap-2 px-2 pb-1 sm:hidden">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass flex h-11 w-11 items-center justify-center rounded-full text-zinc-600 shadow-glass transition-colors hover:text-ios-blue"
                >
                  <Icon aria-hidden className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
