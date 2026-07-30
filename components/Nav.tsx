"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/data/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-5xl flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-display font-semibold text-lg text-text">
          VC<span className="text-amber">_</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 font-mono text-sm text-text-muted">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-cyan transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.resumeUrl}
          className="font-mono text-sm rounded-md border border-amber/40 px-3.5 py-1.5 text-amber hover:bg-amber/10 transition-colors"
        >
          resume.pdf
        </a>
      </nav>
    </header>
  );
}
