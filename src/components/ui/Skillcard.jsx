"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── FeaturedCard: Boro card jo daily driver skills er jonno
export function FeaturedCard({ skill, index, isMobile }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const hasAnimated = useRef(false);

  // GSAP: card slide up + fade in on scroll (staggered by index)
  useEffect(() => {
    if (!cardRef.current || hasAnimated.current) return;

    // Mobile e animation disable
    if (isMobile) {
      gsap.set(cardRef.current, { opacity: 1, y: 0 });
      return;
    }

    hasAnimated.current = true;
    const ctx = gsap.context(() => {
      gsap.set(cardRef.current, { willChange: "transform, opacity" });

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: index * 0.08,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 72%",
            toggleActions: "play none none none",
            once: true,
          },
          onComplete: () => {
            gsap.set(cardRef.current, { clearProps: "willChange" });
          },
        },
      );
    });

    return () => ctx.revert();
  }, [index, isMobile]);

  // Hover: glow effect animation
  const handleMouseEnter = () => {
    if (isMobile || !glowRef.current) return;

    gsap.to(glowRef.current, {
      opacity: 0.4,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (isMobile || !glowRef.current) return;

    gsap.to(glowRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={cardRef}
      className="group relative flex flex-col gap-3 p-4 sm:p-5 rounded-2xl border border-black/[0.07] dark:border-white/[0.07] bg-white dark:bg-white/[0.03] overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-1 hover:border-[--color-accent]/35 hover:shadow-lg hover:shadow-black/[0.07] dark:hover:shadow-black/30"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Radial glow: hover e appear hoy */}
      <div
        ref={glowRef}
        className="absolute -top-6 -left-6 w-24 h-24 rounded-full blur-2xl opacity-0 pointer-events-none"
        style={{ background: skill.color || "#7c3aed" }}
      />

      {/* Icon container */}
      <div
        className="relative z-10 w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${skill.color || "#888"}18` }}
      >
        <span
          className="text-2xl leading-none"
          style={{ color: skill.color || undefined }}
        >
          {skill.icon}
        </span>
      </div>

      {/* Skill name + experience year */}
      <div className="relative z-10">
        <p className="text-sm font-bold text-black dark:text-white leading-tight">
          {skill.name}
        </p>
        <p className="text-[11px] text-black/35 dark:text-white/30 mt-0.5">
          {skill.year}
        </p>
      </div>

      {/* Tier badge (Expert/Proficient/Familiar) */}
      <span
        className={`relative z-10 self-start text-[10px] font-bold px-2 py-0.5 rounded-lg ${
          skill.tier === "Expert"
            ? "text-violet-600 dark:text-violet-400 bg-violet-500/10 dark:bg-violet-400/12"
            : skill.tier === "Proficient"
              ? "text-sky-600 dark:text-sky-400 bg-sky-500/10 dark:bg-sky-400/12"
              : "text-amber-600 dark:text-amber-400 bg-amber-500/10 dark:bg-amber-400/12"
        }`}
      >
        {skill.tier}
      </span>

      {/* Bottom accent line: hover e slide in */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[--color-accent] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
}

// ─── SecondaryPill: Choto pill jo "Also in the toolkit" er jonno
export function SecondaryPill({ skill, index, isMobile }) {
  const pillRef = useRef(null);
  const hasAnimated = useRef(false);

  // GSAP: pill scale + fade in (back ease for bounce effect)
  useEffect(() => {
    if (!pillRef.current || hasAnimated.current) return;

    // Mobile e animation disable
    if (isMobile) {
      gsap.set(pillRef.current, { opacity: 1, scale: 1 });
      return;
    }

    hasAnimated.current = true;
    const ctx = gsap.context(() => {
      gsap.set(pillRef.current, { willChange: "transform, opacity" });

      gsap.fromTo(
        pillRef.current,
        { opacity: 0, scale: 0.88 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.4)",
          delay: index * 0.04,
          scrollTrigger: {
            trigger: pillRef.current,
            start: "top 92%",
            toggleActions: "play none none none",
            once: true,
          },
          onComplete: () => {
            gsap.set(pillRef.current, { clearProps: "willChange" });
          },
        },
      );
    });

    return () => ctx.revert();
  }, [index, isMobile]);

  return (
    <div
      ref={pillRef}
      className="group flex items-center gap-2 px-3.5 py-2 rounded-xl border border-black/[0.07] dark:border-white/[0.07] bg-white dark:bg-white/[0.03] cursor-default transition-all duration-200 hover:border-[--color-accent]/30 hover:bg-[--color-accent]/[0.04]"
    >
      <span
        className="text-base leading-none transition-transform duration-200 group-hover:scale-110"
        style={{ color: skill.color || undefined }}
      >
        {skill.icon}
      </span>
      <span className="text-xs font-semibold text-black/70 dark:text-white/65 group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
        {skill.name}
      </span>
    </div>
  );
}
