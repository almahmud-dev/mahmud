"use client";
import React, { useRef, useEffect, useState } from "react";
import Container from "@/src/components/ui/Container";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FeaturedCard, SecondaryPill } from "../ui/Skillcard";
import { featured, secondary } from "@/src/helper/helper";

gsap.registerPlugin(ScrollTrigger);
// ─── Main Skills Section
export default function Skills() {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const descriptionRef = useRef(null);
  const dividerRef = useRef(null);
  const countPillRef = useRef(null);
  const hasInitialized = useRef(false);

  // ─── Mobile detection ar resize listener
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768; // md breakpoint
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ─── GSAP: Section-level animations (description, divider, count pill)
  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    // Mobile e animations skip
    if (isMobile) {
      gsap.set(
        [descriptionRef.current, dividerRef.current, countPillRef.current],
        {
          opacity: 1,
        },
      );
      return;
    }

    const ctx = gsap.context(() => {
      // Description paragraph: fade in + slide up
      if (descriptionRef.current) {
        gsap.set(descriptionRef.current, { willChange: "transform, opacity" });
        gsap.fromTo(
          descriptionRef.current,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: descriptionRef.current,
              start: "top 92%",
              toggleActions: "play none none none",
              once: true,
            },
            onComplete: () => {
              gsap.set(descriptionRef.current, { clearProps: "willChange" });
            },
          },
        );
      }

      // Divider line: scale-x from left
      if (dividerRef.current) {
        gsap.set(dividerRef.current, { willChange: "transform" });
        gsap.fromTo(
          dividerRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: dividerRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
              once: true,
            },
            onComplete: () => {
              gsap.set(dividerRef.current, { clearProps: "willChange" });
            },
          },
        );
      }

      // Count pill: fade in (delay er jonno section-level timing)
      if (countPillRef.current) {
        gsap.set(countPillRef.current, { willChange: "opacity" });
        gsap.fromTo(
          countPillRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            delay: 0.3,
            scrollTrigger: {
              trigger: countPillRef.current,
              start: "top 92%",
              toggleActions: "play none none none",
              once: true,
            },
            onComplete: () => {
              gsap.set(countPillRef.current, { clearProps: "willChange" });
            },
          },
        );
      }

      // Section header (SectionHeader component e GSAP already ache, but add global context support)
      const headers = sectionRef.current?.querySelectorAll(
        "[data-section-header]",
      );
      if (headers && headers.length > 0) {
        headers.forEach((header) => {
          gsap.set(header, { willChange: "transform, opacity" });
          gsap.fromTo(
            header,
            { opacity: 0, y: 10 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: header,
                start: "top 92%",
                toggleActions: "play none none none",
                once: true,
              },
              onComplete: () => {
                gsap.set(header, { clearProps: "willChange" });
              },
            },
          );
        });
      }
    });

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 md:py-28 bg-[#f8f7ff] dark:bg-[#0c0b18]"
    >
      <Container>
        {/* Section header: "Skills & Tools" */}
        <div data-section-header>
          <SectionHeader text="Skills & Tools" colorWord="Tools" />
        </div>

        {/* Description paragraph */}
        <p
          ref={descriptionRef}
          className="text-center text-sm text-black/45 dark:text-white/45 max-w-lg mx-auto mb-14"
        >
          Technologies I reach for when building modern, production-grade web
          applications.
        </p>

        {/* ─── Featured skills section (Daily drivers) ─── */}
        <div className="mb-3">
          <div className="text-[11px] font-black uppercase tracking-[0.2em] text-black/35 dark:text-white/30 mb-5 flex items-center gap-2">
            <span className="w-4 h-px bg-[--color-accent] inline-block" />
            Daily drivers
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {featured.map((skill, i) => (
              <FeaturedCard
                key={skill.name}
                skill={skill}
                index={i}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>

        {/* ─── Divider line ─── */}
        <div
          ref={dividerRef}
          className="my-10 h-px bg-black/[0.07] dark:bg-white/[0.07] origin-left"
        />

        {/* ─── Secondary skills section (Also in the toolkit) ─── */}
        <div>
          <div className="text-[11px] font-black uppercase tracking-[0.2em] text-black/35 dark:text-white/30 mb-5 flex items-center gap-2">
            <span className="w-4 h-px bg-[--color-accent] inline-block" />
            Also in the toolkit
          </div>

          <div className="flex flex-wrap gap-2.5">
            {secondary.map((skill, i) => (
              <SecondaryPill
                key={skill.name}
                skill={skill}
                index={i}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>

        {/* ─── Technology count pill ─── */}
        <div ref={countPillRef} className="flex justify-center mt-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[--color-accent]/10 border border-[--color-accent]/20 text-[--color-accent] text-xs font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[--color-accent] animate-pulse" />
            {featured.length + secondary.length} Technologies
          </span>
        </div>
      </Container>
    </section>
  );
}
