"use client";

import { useEffect, useState } from "react";
import { navLinks, personalInfo } from "@/data/resume";
import { useScroll } from "./ScrollProvider";
import ResumeDownload from "./ResumeDownload";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollTo } = useScroll() ?? {};

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    if (scrollTo) scrollTo(href);
    else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-background/40 backdrop-blur-sm"
      }`}
    >
      <nav className="container-wide flex items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <button
          onClick={() => handleNav("#hero")}
          className="font-serif text-xl tracking-tight text-foreground md:text-2xl"
        >
          Rafi
        </button>

        <ul className="hidden items-center gap-8 lg:flex lg:gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="spaced-heading transition-colors hover:text-foreground"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 sm:flex">
          <ResumeDownload variant="nav" />
          <a
            href={`mailto:${personalInfo.email}`}
            className="rounded-full border border-accent/20 bg-surface px-5 py-2.5 text-xs font-medium text-accent shadow-sm transition-all hover:border-accent/40 hover:shadow-md"
          >
            Contact
          </a>
        </div>

        <button
          className="relative ml-2 h-8 w-8 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`absolute left-1 top-2 block h-px w-6 bg-foreground transition-all ${menuOpen ? "top-4 rotate-45" : ""}`}
          />
          <span
            className={`absolute left-1 top-4 block h-px w-6 bg-foreground transition-all ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`absolute left-1 top-6 block h-px w-6 bg-foreground transition-all ${menuOpen ? "top-4 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 top-[57px] z-40 border-t border-border bg-background/98 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-1 px-5 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="w-full py-4 text-left font-serif text-2xl text-foreground"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="mt-4 flex flex-col gap-3 border-t border-border pt-6">
              <ResumeDownload
                variant="contact"
                className="w-full"
                onClick={() => setMenuOpen(false)}
              />
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-block w-full rounded-full border border-accent/20 bg-surface py-3.5 text-center text-sm font-medium text-accent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
