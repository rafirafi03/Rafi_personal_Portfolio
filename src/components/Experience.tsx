"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "@/data/resume";
import SectionHeading from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-row", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section-padding">
      <div className="container-wide">
        <SectionHeading
          label="Experience"
          title="Where I've worked"
        />

        <div className="divide-y divide-border border-y border-border">
          {experience.map((job, index) => (
            <article
              key={`${job.company}-${index}`}
              className="exp-row group grid gap-4 py-8 sm:gap-6 sm:py-10 md:grid-cols-12 md:gap-8 md:py-14"
            >
              <div className="flex items-baseline justify-between md:col-span-3 md:block">
                <p className="font-serif text-3xl text-foreground/15 sm:text-4xl md:text-5xl">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="spaced-heading md:mt-4">{job.period}</p>
              </div>

              <div className="md:col-span-5">
                <h3 className="font-serif text-xl text-foreground transition-colors group-hover:text-accent sm:text-2xl md:text-3xl">
                  {job.role}
                </h3>
                <p className="mt-2 text-lg text-muted">{job.company}</p>
                <p className="mt-1 text-sm text-muted">{job.location}</p>
              </div>

              <div className="md:col-span-4">
                <ul className="space-y-3">
                  {job.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-relaxed text-muted md:text-base"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
