"use client";
import React from "react";
import Container from "@/src/components/ui/Container";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { personal } from "@/src/data/personal";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

const socials = [
  {
    key: "instagram",
    label: "Instagram",
    Icon: FaInstagram,
    href: (p) => p.social?.instagram || "#",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    Icon: FaLinkedinIn,
    href: (p) => p.social?.linkedin || "#",
  },
  {
    key: "github",
    label: "GitHub",
    Icon: FaGithub,
    href: (p) => p.social?.github || "#",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-white dark:bg-[#050508] overflow-hidden"
    >
      {/* Background grid — dark only */}
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
        {/* ── [ ABOUT ] bracket label ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-accent border border-accent/30 px-3 py-1 rounded-sm dark:border-[#39ff6a]/40 dark:text-[#39ff6a]">
            <span className="opacity-60">[</span>
            About
            <span className="opacity-60">]</span>
          </span>
        </motion.div>

        {/* ── Hero headline ── */}
        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl xl:text-[50px] font-semibold leading-[1.05] tracking-tight max-w-4xl mb-14 text-gray-900 dark:text-white"
        >
          Specializing in modern web technologies,{" "}
          <br className="hidden md:block" />
          I turn complex ideas into{" "}
          <span className="text-accent dark:text-[#39ff6a]">
            fast, reliable,
          </span>{" "}
          and maintainable applications.
        </motion.h2>

        {/* ── Three-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[580px] border border-gray-100 dark:border-white/10">

          {/* ── LEFT — bio + socials ── */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-between p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-white/10"
          >
            {/* Stats + Bio grouped together */}
            <div className="flex flex-col gap-6">
              {/* Stats */}
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
                    <span className="text-[10px] text-gray-400 dark:text-white/30 uppercase tracking-wider">
                      {s.lbl}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bio text */}
              <p className="text-sm leading-relaxed text-gray-500 dark:text-white/50">
                I specialize in system architecture and scalable web engineering.
                From backend services to frontend performance, I approach
                development with structure, clarity, and long-term thinking.
              </p>
            </div>

            {/* Social icons */}
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
          </motion.div>

          {/* ── CENTER — profile image ── */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden hidden lg:block outline outline-[1.5px] outline-accent dark:outline-[#39ff6a] group"
          >
            <div className="absolute inset-0 bg-accent/5 dark:bg-[#39ff6a]/5 mix-blend-overlay z-10 pointer-events-none" />
            <img
              src="/image/image.jpg"
              alt={personal.fullName}
              className="w-full h-full object-cover transition duration-700 scale-105 group-hover:scale-100 dark:brightness-75"
            />
            {/* Available badge */}
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
          </motion.div>

          {/* ── RIGHT — secondary bio + CTA ── */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-end p-8 lg:p-10 gap-6 border-t lg:border-t-0 lg:border-l border-gray-100 dark:border-white/10"
          >
            <p className="text-sm leading-relaxed text-gray-500 dark:text-white/50">
              Over the years, I've led architectural initiatives, optimized
              high-traffic applications, and contributed to technical
              decision-making that supports product growth. I believe strong
              engineering is defined not just by delivery, but by durability.
            </p>

            {/* CTA button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-3 self-start px-6 py-3.5 bg-accent dark:bg-[#39ff6a] text-white dark:text-black text-xs font-bold tracking-widest hover:opacity-90 transition-opacity duration-200 rounded-sm"
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
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}