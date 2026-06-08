"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/resume";
import SectionHeading from "./SectionHeading";
import ProjectLinks from "./ProjectLinks";

gsap.registerPlugin(ScrollTrigger);

const gradients = [
  "linear-gradient(135deg, #e8e4dc 0%, #d4cfc5 50%, #c4a574 100%)",
  "linear-gradient(135deg, #ede0e4 0%, #d4a8b8 50%, #8a1538 100%)",
  "linear-gradient(135deg, #dde4ed 0%, #c5d0de 50%, #1a3a5c 100%)",
  "linear-gradient(135deg, #dbeafe 0%, #93c5fd 50%, #0ea5e9 100%)",
  "linear-gradient(135deg, #fecaca 0%, #f87171 50%, #dc2626 100%)",
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
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
    <section id="projects" ref={sectionRef} className="section-padding bg-background-alt">
      <div className="container-wide">
        <SectionHeading
          label="Projects"
          title="Selected work"
          subtitle="Production-grade applications built with modern architecture."
        />

        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="project-card card-surface overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div
                  className="relative flex min-h-[180px] items-end p-6 sm:min-h-[240px] sm:p-8 md:min-h-[360px] md:p-12"
                  style={{ background: gradients[index % gradients.length] }}
                >
                  <span className="font-serif text-8xl text-white/30 md:text-9xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12">
                  <p className="spaced-heading mb-3">{project.subtitle}</p>
                  <h3 className="font-serif text-3xl text-foreground sm:text-4xl md:text-5xl">
                    {project.name}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-6">
                    <ProjectLinks live={project.live} github={project.github} />
                  </div>

                  <ul className="mt-6 space-y-2">
                    {project.features.slice(0, 4).map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 text-sm text-foreground md:text-base"
                      >
                        <span className="mt-2 h-px w-4 shrink-0 bg-accent-soft" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-background-alt px-3 py-1 text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
