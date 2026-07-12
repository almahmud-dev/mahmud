"use client";
import React, { useRef, useEffect } from "react";
import Container from "@/src/components/ui/Container";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FeaturedCard, SecondaryPill } from "../ui/Skillcard";
import { featured, secondary } from "@/src/helper";

gsap.registerPlugin(ScrollTrigger);

// ─── Main Skills Section
export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // Reduced motion hole sob statically visible rekhe deya, animation skip
      if (prefersReducedMotion) {
        gsap.set(
          ".skills-header, .skills-description, .skills-divider, .skills-featured-card, .skills-secondary-pill, .skills-count-pill",
          { opacity: 1, x: 0, y: 0, scaleX: 1 },
        );
        return;
      }

      // 1. Section header fade + slide up
      gsap.fromTo(
        ".skills-header",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // 2. Description paragraph fade + slide up
      gsap.fromTo(
        ".skills-description",
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          delay: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // 3. Featured cards stagger in
      gsap.fromTo(
        ".skills-featured-card",
        { opacity: 0, y: isMobile ? 16 : 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".skills-featured-grid",
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // 4. Divider line scale-x from left
      gsap.fromTo(
        ".skills-divider",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power2.out",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: ".skills-divider",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // 5. Secondary pills stagger in
      gsap.fromTo(
        ".skills-secondary-pill",
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".skills-secondary-grid",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // 6. Technology count pill fade in
      gsap.fromTo(
        ".skills-count-pill",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: ".skills-count-pill",
            start: "top 92%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 md:py-28 bg-[#f8f7ff] dark:bg-[#0c0b18]"
    >
      <Container>
        {/* Section header: "Skills & Tools" */}
        <div className="skills-header">
          <SectionHeader text="Skills & Tools" colorWord="Tools" />
        </div>

        {/* Description paragraph */}
        <p className="skills-description text-center text-sm text-black/45 dark:text-white/45 max-w-lg mx-auto mb-14">
          Technologies I reach for when building modern, production-grade web
          applications.
        </p>

        {/* ─── Featured skills section (Daily drivers) ─── */}
        <div className="mb-3">
          <div className="text-[11px] font-black uppercase tracking-[0.2em] text-black/35 dark:text-white/30 mb-5 flex items-center gap-2">
            <span className="w-4 h-px bg-[--color-accent] inline-block" />
            Daily drivers
          </div>

          <div className="skills-featured-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {featured.map((skill, i) => (
              <div className="skills-featured-card" key={skill.name}>
                <FeaturedCard skill={skill} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* ─── Divider line ─── */}
        <div className="skills-divider my-10 h-px bg-black/[0.07] dark:bg-white/[0.07] origin-left" />

        {/* ─── Secondary skills section (Also in the toolkit) ─── */}
        <div>
          <div className="text-[11px] font-black uppercase tracking-[0.2em] text-black/35 dark:text-white/30 mb-5 flex items-center gap-2">
            <span className="w-4 h-px bg-[--color-accent] inline-block" />
            Also in the toolkit
          </div>

          <div className="skills-secondary-grid flex flex-wrap gap-2.5">
            {secondary.map((skill, i) => (
              <div className="skills-secondary-pill" key={skill.name}>
                <SecondaryPill skill={skill} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* ─── Technology count pill ─── */}
        <div className="skills-count-pill flex justify-center mt-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[--color-accent]/10 border border-[--color-accent]/20 text-[--color-accent] text-xs font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[--color-accent] animate-pulse" />
            {featured.length + secondary.length} Technologies
          </span>
        </div>
      </Container>
    </section>
  );
}
