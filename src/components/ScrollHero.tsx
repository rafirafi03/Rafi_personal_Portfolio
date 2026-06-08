"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalInfo } from "@/data/resume";
import HeroBackground from "./HeroBackground";
import ResumeDownload from "./ResumeDownload";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>(".hero-line-inner");

      gsap.set(lines, { yPercent: 110 });
      gsap.to(lines, {
        yPercent: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: "power4.out",
        delay: 0.15,
      });

      gsap.from(".hero-fade", {
        opacity: 0,
        y: 24,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.6,
      });

      gsap.to(contentRef.current, {
        y: -60,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".hero-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nameParts = ["Ahamad", "Rafi MP"];

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-[160vh] sm:h-[180vh] md:h-[200vh]"
    >
      <div className="gradient-mesh sticky top-0 flex h-screen min-h-[600px] w-full flex-col overflow-hidden">
        <HeroBackground />

        <div
          ref={contentRef}
          className="container-wide relative z-10 flex flex-1 flex-col justify-center px-5 pb-24 pt-28 md:px-10 md:pb-20 md:pt-32"
        >
          <p className="hero-fade spaced-heading mb-6 md:mb-8">
            {personalInfo.title}
          </p>

          <h1 className="max-w-4xl font-serif text-[clamp(2.5rem,10vw,6rem)] leading-[0.95] tracking-tight text-foreground">
            {nameParts.map((part, i) => (
              <span key={part} className="line-reveal block overflow-hidden">
                <span className="hero-line-inner inline-block">
                  {i === 1 ? (
                    <>
                      <em className="text-accent">Rafi</em> MP
                    </>
                  ) : (
                    part
                  )}
                </span>
              </span>
            ))}
          </h1>

          <p className="hero-fade mt-6 max-w-lg text-base leading-relaxed text-muted sm:mt-8 sm:text-lg md:max-w-xl md:text-xl">
            Designing and building scalable web applications — from polished
            interfaces to production-ready microservices.
          </p>

          <div className="hero-fade mt-8 flex flex-col gap-6 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href="#projects"
              className="inline-flex w-fit items-center gap-3 rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-medium text-foreground shadow-sm transition-all hover:border-accent/30 hover:shadow-md"
            >
              View work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <ResumeDownload variant="hero" />

            <div className="text-sm text-muted">
              <p>{personalInfo.location}</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="mt-1 block transition-colors hover:text-foreground"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 px-5 md:px-10">
          <div className="container-wide flex items-end justify-between pb-8">
            <div className="hidden h-px flex-1 origin-left scale-x-0 bg-accent-soft/60 hero-progress sm:block" />
            <div className="flex w-full flex-col items-center gap-2 sm:w-auto">
              <span className="spaced-heading scroll-hint">Scroll</span>
              <div className="h-10 w-px bg-gradient-to-b from-foreground/25 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
