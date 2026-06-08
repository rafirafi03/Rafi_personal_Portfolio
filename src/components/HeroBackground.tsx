"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroBackground() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll(".hero-path");
    if (!paths) return;

    paths.forEach((path) => {
      const el = path as SVGPathElement;
      const length = el.getTotalLength();
      gsap.set(el, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
    });

    gsap.to(".hero-path", {
      strokeDashoffset: 0,
      duration: 2.2,
      stagger: 0.15,
      ease: "power2.inOut",
      delay: 0.4,
    });

    gsap.to(".hero-blob", {
      x: "+=20",
      y: "+=12",
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: { each: 2, from: "random" },
    });
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="hero-blob absolute -right-20 top-1/4 h-64 w-64 rounded-full bg-accent-soft/20 blur-3xl md:h-96 md:w-96" />
      <div className="hero-blob absolute -left-16 bottom-1/4 h-56 w-56 rounded-full bg-accent/10 blur-3xl md:h-80 md:w-80" />

      <svg
        ref={svgRef}
        className="absolute inset-0 h-full w-full opacity-[0.35] md:opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          className="hero-path"
          d="M0,120 Q200,80 400,120 T800,120 T1200,120 T1600,120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          style={{ color: "var(--accent-soft)" }}
        />
        <path
          className="hero-path"
          d="M0,280 Q300,240 600,280 T1200,280 T1800,280"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
          style={{ color: "var(--border)" }}
        />
        <path
          className="hero-path"
          d="M0,440 Q250,400 500,440 T1000,440 T1500,440"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          style={{ color: "var(--accent)" }}
        />
      </svg>

      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(18,18,18,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(18,18,18,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}
