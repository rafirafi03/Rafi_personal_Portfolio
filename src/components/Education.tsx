"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { education } from "@/data/resume";
import SectionHeading from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".edu-item", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-padding">
      <div className="container-wide" ref={ref}>
        <SectionHeading label="Education" title="Learning path" />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu) => (
            <div key={edu.program} className="edu-item card-surface p-8 md:p-10">
              <p className="spaced-heading mb-4">{edu.period}</p>
              <h3 className="font-serif text-2xl text-foreground md:text-3xl">
                {edu.program}
              </h3>
              <p className="mt-3 text-muted">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
