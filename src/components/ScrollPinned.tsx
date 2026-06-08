"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    label: "Frontend",
    title: "Interfaces",
    body: "React, Next.js, and TypeScript — responsive, accessible, and crafted with care.",
  },
  {
    label: "Backend",
    title: "Systems",
    body: "Node.js microservices with Clean Architecture, gRPC, and message queues.",
  },
  {
    label: "DevOps",
    title: "Deploy",
    body: "Docker, Kubernetes on AWS — CI/CD pipelines that ship with confidence.",
  },
];

export default function ScrollPinned() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        const panelEls = gsap.utils.toArray<HTMLElement>(".pin-panel");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${panelEls.length * 80}%`,
            pin: true,
            scrub: 1,
          },
        });

        panelEls.forEach((panel, i) => {
          if (i === 0) {
            tl.to(panel, { autoAlpha: 1, duration: 0.01 });
          } else {
            tl.to(panelEls[i - 1], {
              autoAlpha: 0,
              y: -24,
              duration: 0.5,
            }).fromTo(
              panel,
              { autoAlpha: 0, y: 32 },
              { autoAlpha: 1, y: 0, duration: 0.5 },
              "<0.15"
            );
          }
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-background-alt">
      <div className="flex min-h-0 items-center py-20 md:min-h-screen md:py-0">
        <div className="container-wide grid w-full gap-10 px-5 md:grid-cols-2 md:gap-12 md:px-10">
          <div>
            <p className="spaced-heading mb-4 md:mb-6">One stack</p>
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl md:text-7xl">
              Every layer,
              <br />
              <em className="text-accent">unified.</em>
            </h2>
            <p className="mt-4 max-w-sm text-sm text-muted sm:text-base md:mt-6">
              From UI polish to cloud infrastructure — a complete approach to
              modern web development.
            </p>
          </div>

          <div className="relative space-y-10 md:h-[340px] md:space-y-0 lg:h-[380px]">
            {panels.map((panel, i) => (
              <div
                key={panel.title}
                className={`pin-panel flex flex-col justify-center md:absolute md:inset-0 ${
                  i > 0 ? "md:opacity-0" : ""
                }`}
              >
                <p className="spaced-heading mb-3 md:mb-4">{panel.label}</p>
                <h3 className="font-serif text-4xl text-foreground sm:text-5xl md:text-7xl lg:text-8xl">
                  {panel.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted md:mt-6 md:text-lg">
                  {panel.body}
                </p>
                <div className="mt-6 h-px w-12 bg-accent-soft md:mt-8 md:w-16" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
