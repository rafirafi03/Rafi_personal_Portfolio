"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, personalInfo } from "@/data/resume";
import { useScroll } from "./ScrollProvider";
import ResumeDownload from "./ResumeDownload";

const menuContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
  exit: { opacity: 0 },
};

const menuItem = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: { opacity: 0, y: 8, transition: { duration: 0.2 } },
};

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
        scrolled || menuOpen
          ? "border-b border-border bg-background/95 backdrop-blur-xl"
          : "bg-background/40 backdrop-blur-sm"
      }`}
    >
      <nav className="container-wide flex items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <button
          onClick={() => handleNav("#hero")}
          className="relative z-[80] font-serif text-xl tracking-tight text-foreground md:text-2xl"
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
          className="relative z-[80] ml-2 flex h-10 w-10 items-center justify-center lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`absolute block h-px w-6 bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45" : "-translate-y-[5px]"}`}
          />
          <span
            className={`absolute block h-px w-6 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0 scale-0" : ""}`}
          />
          <span
            className={`absolute block h-px w-6 bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45" : "translate-y-[5px]"}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] bg-foreground/30 backdrop-blur-[2px] lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-0 right-0 top-[65px] z-[70] max-h-[calc(100vh-65px)] overflow-y-auto border-b border-border bg-background shadow-[0_24px_48px_rgba(18,18,18,0.12)] lg:hidden"
            >
              <motion.ul
                variants={menuContainer}
                initial="hidden"
                animate="show"
                exit="exit"
                className="container-wide flex flex-col px-5 py-8"
              >
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    variants={menuItem}
                    className="border-b border-border/60 last:border-b-0"
                  >
                    <button
                      onClick={() => handleNav(link.href)}
                      className="group flex w-full items-center justify-between py-5 text-left"
                    >
                      <span className="font-serif text-3xl text-foreground transition-colors group-hover:text-accent">
                        {link.label}
                      </span>
                      <span className="spaced-heading !text-[0.55rem] text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </button>
                  </motion.li>
                ))}

                <motion.li
                  variants={menuItem}
                  className="mt-6 flex flex-col gap-3 pt-2"
                >
                  <ResumeDownload
                    variant="contact"
                    className="w-full justify-center"
                    onClick={() => setMenuOpen(false)}
                  />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-block w-full rounded-full border border-accent/20 bg-surface py-3.5 text-center text-sm font-medium text-accent shadow-sm"
                  >
                    Contact
                  </a>
                </motion.li>
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
