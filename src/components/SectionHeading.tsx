"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
}: {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current?.children ?? [], {
        y: 50,
        opacity: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 88%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className={`mb-16 md:mb-24 ${align === "center" ? "text-center" : ""}`}
    >
      <p className="spaced-heading mb-5">{label}</p>
      <h2 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-xl text-lg text-muted ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
