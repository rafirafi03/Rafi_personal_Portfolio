"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalInfo } from "@/data/resume";
import SocialLinks from "./SocialLinks";
import ResumeDownload from "./ResumeDownload";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        y: 50,
        opacity: 0,
        duration: 1.1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-background-alt"
    >
      <div className="container-wide">
        <div className="card-surface mx-auto max-w-3xl px-6 py-14 text-center sm:px-10 sm:py-20 md:py-24">
          <p className="contact-reveal spaced-heading mb-6">Contact</p>

          <h2 className="contact-reveal font-serif text-[clamp(2rem,6vw,4rem)] leading-tight tracking-tight text-foreground">
            Let&apos;s build
            <br />
            <em className="text-accent">something great.</em>
          </h2>

          <p className="contact-reveal mx-auto mt-6 max-w-md text-base text-muted sm:text-lg">
            Open to full-time roles, freelance projects, and collaborations.
          </p>

          <div className="contact-reveal mt-10 flex flex-col items-stretch gap-3 sm:mt-12 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              {personalInfo.email}
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
              className="rounded-full border border-border bg-surface px-8 py-3.5 text-sm text-foreground transition-colors hover:border-accent/30"
            >
              {personalInfo.phone}
            </a>
            <ResumeDownload variant="contact" />
          </div>

          <SocialLinks
            showLabels
            size="md"
            className="contact-reveal mt-8 justify-center"
          />

          <p className="contact-reveal mt-8 text-sm text-muted">
            {personalInfo.location}
          </p>
        </div>
      </div>
    </section>
  );
}
