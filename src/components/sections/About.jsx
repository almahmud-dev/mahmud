"use client";
import React, { useEffect, useRef } from "react";
import Container from "@/src/components/ui/Container";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { personal } from "@/src/data/personal";
import MagneticButton from "../ui/MagneticButton";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroImage, socials } from "@/src/helper/helper";

gsap.registerPlugin(ScrollTrigger);

function buildST(trigger, isMobile, overrides = {}) {
  return {
    trigger,
    start: isMobile ? "top 92%" : "top 85%",
    // bottom top — element fully viewport theke ber hole reverse
    end: "bottom top",
    ...(isMobile
      ? { once: true }
      : { toggleActions: "play none none reverse" }),
    ...overrides,
  };
}

export default function About() {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headlineRef = useRef(null);
  const leftColRef = useRef(null);
  const centerColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;

    const ctx = gsap.context(() => {
      // ── Badge ──
      gsap.set(badgeRef.current, { willChange: "transform, opacity" });
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: buildST(badgeRef.current, isMobile),
          onComplete: isMobile
            ? () =>
                gsap.set(badgeRef.current, {
                  clearProps: "willChange,transform",
                })
            : undefined,
        },
      );

      // ── Headline ──
      gsap.set(headlineRef.current, { willChange: "transform, opacity" });
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: isMobile ? 24 : 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: buildST(headlineRef.current, isMobile),
          onComplete: isMobile
            ? () =>
                gsap.set(headlineRef.current, {
                  clearProps: "willChange,transform",
                })
            : undefined,
        },
      );

      // ── Three columns ──
      const cols = [
        leftColRef.current,
        centerColRef.current,
        rightColRef.current,
      ];

      gsap.set(cols, { willChange: "transform, opacity" });
      gsap.fromTo(
        cols,
        { opacity: 0, y: isMobile ? 28 : 44 },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.55 : 0.65,
          stagger: isMobile ? 0.09 : 0.12,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: buildST(sectionRef.current, isMobile, {
            start: isMobile ? "top 88%" : "top 78%",
          }),
          onComplete: isMobile
            ? () => gsap.set(cols, { clearProps: "willChange,transform" })
            : undefined,
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-20 bg-white dark:bg-[#050508] overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="pointer-events-none absolute top-0 left-1/4 w-96 h-px hidden dark:block bg-gradient-to-r from-transparent via-[#39ff6a]/40 to-transparent" />

      <Container>
        {/* ── [ ABOUT ] badge ── */}
        <div ref={badgeRef} className="mb-8">
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-accent border border-accent/30 px-3 py-1 rounded-sm dark:border-[#39ff6a]/40 dark:text-[#39ff6a]">
            <span className="opacity-60">[</span>
            About
            <span className="opacity-60">]</span>
          </span>
        </div>

        {/* ── Headline ── */}
        <div className="overflow-hidden mb-14">
          <h2
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-[50px] font-semibold leading-[1.05] tracking-tight max-w-4xl text-gray-900 dark:text-white"
          >
            Specializing in modern web technologies,{" "}
            <br className="hidden md:block" />I turn complex ideas into{" "}
            <span className="text-accent dark:text-[#39ff6a]">
              fast, reliable,
            </span>{" "}
            and maintainable applications.
          </h2>
        </div>

        {/* ── Three-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[580px] border border-gray-100 dark:border-white/10">
          {/* LEFT */}
          <div
            ref={leftColRef}
            className="flex flex-col justify-between p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-white/10"
          >
            <div className="flex flex-col gap-6">
              <div className="flex gap-6">
                {[
                  { val: "1+", lbl: "Year Experience" },
                  { val: "10+", lbl: "Projects" },
                  { val: "5+", lbl: "Happy Clients" },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-2xl font-black text-accent dark:text-[#39ff6a] font-oxanium">
                      {s.val}
                    </span>
                    <span className="text-[10px] text-black/60 dark:text-white/80 uppercase tracking-wider">
                      {s.lbl}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-black dark:text-white/80">
                I specialize in frontend development, creating responsive and
                intuitive web experiences with a strong focus on performance,
                accessibility, and clean code.
              </p>
            </div>
            <div className="flex gap-3">
              {socials.map(({ key, label, Icon, href }) => (
                <a
                  key={key}
                  href={href(personal)}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded border border-gray-200 dark:border-white/10 text-gray-500 dark:text-white/40 hover:border-accent dark:hover:border-[#39ff6a] hover:text-accent dark:hover:text-[#39ff6a] hover:bg-accent/5 dark:hover:bg-[#39ff6a]/5 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* CENTER */}
          <div
            ref={centerColRef}
            className="relative overflow-hidden outline outline-[1.5px] outline-accent dark:outline-[#39ff6a] group min-h-[580px]"
          >
            <div className="absolute inset-0 bg-accent/5 dark:bg-[#39ff6a]/5 mix-blend-overlay z-10 pointer-events-none" />
            <Image
              src={heroImage}
              alt={personal.fullName}
              fill
              sizes="33vw"
              className="object-cover object-top transition duration-700 scale-105 group-hover:scale-100 dark:brightness-75"
              priority
            />
            <div className="absolute bottom-4 right-4 z-20">
              <div className="backdrop-blur-md bg-white/10 dark:bg-black/40 px-3 py-2.5 rounded-xl border border-white/20 dark:border-white/10 text-gray-800 dark:text-white">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-[9px] uppercase tracking-widest opacity-70">
                    Available for
                  </p>
                </div>
                <p className="text-xs font-semibold">Freelance Projects</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            ref={rightColRef}
            className="flex flex-col justify-end p-8 lg:p-10 gap-6 border-t lg:border-t-0 lg:border-l border-gray-100 dark:border-white/10"
          >
            <p className="text-sm leading-relaxed text-black dark:text-white/80">
              Over time, I've focused on improving user interfaces, optimizing
              performance, and refining frontend experiences. I enjoy building
              interfaces that are not only functional but also smooth and
              user-friendly.
            </p>
            <MagneticButton
              href="#contact"
              fillColor="#F5F0E8"
              textHoverColor="#000000"
              className="self-start px-7 py-4.5 bg-lime-400 text-black text-xs font-bold tracking-widest rounded-sm"
            >
              GET IN TOUCH
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="w-4 h-4"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </MagneticButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
