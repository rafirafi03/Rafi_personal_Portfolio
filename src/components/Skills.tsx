"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "@/data/resume";

gsap.registerPlugin(ScrollTrigger);

const allSkills = [
  ...skills.languages,
  ...skills.frontend,
  ...skills.backend,
  ...skills.databases,
  ...skills.architecture,
  ...skills.devops,
  ...skills.tools,
];

const categories = [
  { key: "languages" as const, label: "Languages" },
  { key: "frontend" as const, label: "Frontend" },
  { key: "backend" as const, label: "Backend" },
  { key: "databases" as const, label: "Databases" },
  { key: "architecture" as const, label: "Architecture" },
  { key: "devops" as const, label: "DevOps" },
  { key: "tools" as const, label: "Tools" },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-row", {
        x: -40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const marqueeItems = [...allSkills, ...allSkills];

  return (
    <section id="skills" ref={sectionRef} className="overflow-hidden bg-background-alt py-28 md:py-36">
      <div className="container-wide mb-16 px-5 md:mb-24 md:px-10">
        <p className="spaced-heading mb-5">Skills</p>
        <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-6xl">
          Technical toolkit
        </h2>
      </div>

      <div className="mb-20 overflow-hidden border-y border-border py-6">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
          {marqueeItems.map((skill, i) => (
            <span
              key={`${skill}-${i}`}
              className="font-serif text-3xl text-foreground/20 md:text-5xl"
            >
              {skill}
              <span className="mx-6 text-accent-soft">·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container-wide grid gap-px bg-border px-5 md:grid-cols-2 md:px-10 lg:grid-cols-3">
        {categories.map(({ key, label }) => (
          <div
            key={key}
            className="skill-row bg-background-alt p-8 md:p-10"
          >
            <p className="spaced-heading mb-6">{label}</p>
            <ul className="space-y-2">
              {skills[key].map((item) => (
                <li
                  key={item}
                  className="text-base text-foreground md:text-lg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
