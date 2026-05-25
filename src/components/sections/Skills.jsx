"use client";
import React, { useRef, useEffect } from "react";
import Container from "@/src/components/ui/Container";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa6";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
  SiFramer,
  SiRedux,
  SiVercel,
  SiCloudinary,
  SiOpenai,
} from "react-icons/si";
import { MdOutlineSmartToy } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

// ─── Data

// "Featured" skills — shown large with icon + name + tier
const featured = [
  {
    name: "React",
    icon: <FaReact />,
    color: "#61dafb",
    tier: "Expert",
    year: "2 yrs",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: null,
    tier: "Expert",
    year: "1 yrs",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "#f0c000",
    tier: "Expert",
    year: "1+ yrs",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "#3178c6",
    tier: "Proficient",
    year: "1 yr",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "#06b6d4",
    tier: "Expert",
    year: "2 yrs",
  },
  
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "#e34f26",
    tier: "Expert",
    year: "2 yrs",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "#1572b6",
    tier: "Expert",
    year: "2 yrs",
  },
  {
    name: "Framer Motion",
    icon: <SiFramer />,
    color: null,
    tier: "Proficient",
    year: "1 yr",
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    color: "#ffca28",
    tier: "Proficient",
    year: "1 yr",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    color: "#764abc",
    tier: "Proficient",
    year: "1 yr",
  },
];

// "Also use" skills — compact pills
const secondary = [
  { name: "Vercel", icon: <SiVercel />, color: null },
  { name: "Cloudinary", icon: <SiCloudinary />, color: "#3448c5" },
  { name: "Figma", icon: <FaFigma />, color: "#f24e1e" },
  { name: "AI Tools", icon: <SiOpenai />, color: null },
  { name: "Prompt Eng", icon: <MdOutlineSmartToy />, color: "#f59e0b" },
];

const tierColor = {
  Expert:
    "text-violet-600 dark:text-violet-400 bg-violet-500/10 dark:bg-violet-400/12",
  Proficient: "text-sky-600 dark:text-sky-400 bg-sky-500/10 dark:bg-sky-400/12",
  Familiar:
    "text-amber-600 dark:text-amber-400 bg-amber-500/10 dark:bg-amber-400/12",
};

// ─── Featured card ────────────────────────────────────────────────────────────

function FeaturedCard({ skill, index }) {
  const ref = useRef(null);

  // GSAP: card slides up + fades in on scroll, staggered by index
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 36 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
        delay: index * 0.06,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      },
    );
  }, [index]);

  return (
    <div
      ref={ref}
      className="group relative flex flex-col gap-3 p-4 sm:p-5 rounded-2xl border border-black/[0.07] dark:border-white/[0.07] bg-white dark:bg-white/[0.03] overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-1 hover:border-[--color-accent]/35 hover:shadow-lg hover:shadow-black/[0.07] dark:hover:shadow-black/30"
      style={{ opacity: 0 }} // GSAP controls opacity
    >
      {/* Radial glow behind icon on hover */}
      <div
        className="absolute -top-6 -left-6 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
        style={{ background: skill.color || "#7c3aed" }}
      />

      {/* Icon */}
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

      {/* Name + year */}
      <div className="relative z-10">
        <p className="text-sm font-bold text-black dark:text-white leading-tight">
          {skill.name}
        </p>
        <p className="text-[11px] text-black/35 dark:text-white/30 mt-0.5">
          {skill.year}
        </p>
      </div>

      {/* Tier badge */}
      <span
        className={`relative z-10 self-start text-[10px] font-bold px-2 py-0.5 rounded-lg ${tierColor[skill.tier]}`}
      >
        {skill.tier}
      </span>

      {/* Bottom accent line — slides in on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[--color-accent] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
}

// ─── Secondary pill ───────────────────────────────────────────────────────────

function SecondaryPill({ skill, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.88 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "back.out(1.4)",
        delay: index * 0.04,
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          toggleActions: "play none none none",
        },
      },
    );
  }, [index]);

  return (
    <div
      ref={ref}
      className="group flex items-center gap-2 px-3.5 py-2 rounded-xl border border-black/[0.07] dark:border-white/[0.07] bg-white dark:bg-white/[0.03] cursor-default transition-all duration-200 hover:border-[--color-accent]/30 hover:bg-[--color-accent]/[0.04]"
      style={{ opacity: 0 }}
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

// ─── Main component ───────────────────────────────────────────────────────────

export default function Skills() {
  const headingRef = useRef(null);

  // GSAP: animate the divider line between sections
  useEffect(() => {
    const line = document.querySelector("#skills-divider");
    if (!line) return;

    gsap.fromTo(
      line,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: line,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  return (
    <section
      id="skills"
      className="py-20 md:py-28 bg-[#f8f7ff] dark:bg-[#0c0b18]"
    >
      <Container>
        <SectionHeader text="Skills & Tools" colorWord="Tools" />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-black/45 dark:text-white/45 max-w-lg mx-auto mb-14"
        >
          Technologies I reach for when building modern, production-grade web
          applications.
        </motion.p>

        {/* ── Featured skills ── */}
        <div className="mb-3">
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-[11px] font-black uppercase tracking-[0.2em] text-black/35 dark:text-white/30 mb-5 flex items-center gap-2"
          >
            <span className="w-4 h-px bg-[--color-accent] inline-block" />
            Daily drivers
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {featured.map((skill, i) => (
              <FeaturedCard key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          id="skills-divider"
          className="my-10 h-px bg-black/[0.07] dark:bg-white/[0.07] origin-left"
        />

        {/* ── Secondary skills ── */}
        <div>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-[11px] font-black uppercase tracking-[0.2em] text-black/35 dark:text-white/30 mb-5 flex items-center gap-2"
          >
            <span className="w-4 h-px bg-[--color-accent] inline-block" />
            Also in the toolkit
          </motion.p>

          <div className="flex flex-wrap gap-2.5">
            {secondary.map((skill, i) => (
              <SecondaryPill key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </div>

        {/* ── Total count pill ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-14"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[--color-accent]/10 border border-[--color-accent]/20 text-[--color-accent] text-xs font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[--color-accent] animate-pulse" />
            {featured.length + secondary.length} Technologies
          </span>
        </motion.div>
      </Container>
    </section>
  );
}
