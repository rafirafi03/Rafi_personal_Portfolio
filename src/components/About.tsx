"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalInfo, expertise } from "@/data/resume";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-block", {
        y: 70,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding">
      <div className="container-wide">
        <SectionHeading
          label="About"
          title="Building products that last"
        />

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="about-block lg:col-span-7">
            <p className="font-serif text-2xl leading-relaxed text-foreground md:text-3xl md:leading-snug">
              {personalInfo.summary}
            </p>
          </div>

          <div className="about-block lg:col-span-5">
            <div className="card-surface p-8 md:p-10">
              <dl className="space-y-6">
                <div>
                  <dt className="spaced-heading mb-2">Location</dt>
                  <dd className="text-lg text-foreground">
                    {personalInfo.location}
                  </dd>
                </div>
                <div className="divider" />
                <div>
                  <dt className="spaced-heading mb-2">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-lg text-foreground transition-opacity hover:opacity-60"
                    >
                      {personalInfo.email}
                    </a>
                  </dd>
                </div>
                <div className="divider" />
                <div>
                  <dt className="spaced-heading mb-2">Phone</dt>
                  <dd>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                      className="text-lg text-foreground transition-opacity hover:opacity-60"
                    >
                      {personalInfo.phone}
                    </a>
                  </dd>
                </div>
                <div className="divider" />
                <div>
                  <dt className="spaced-heading mb-3">Connect</dt>
                  <dd>
                    <SocialLinks size="sm" />
                  </dd>
                </div>
                <div className="divider" />
                <div>
                  <dt className="spaced-heading mb-3">Focus areas</dt>
                  <dd className="flex flex-wrap gap-2">
                    {expertise.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-background-alt px-4 py-1.5 text-sm text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
