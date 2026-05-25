"use client";
import React from "react";
import Container from "@/src/components/ui/Container";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { FaCode, FaServer, FaLayerGroup } from "react-icons/fa6";
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

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-white dark:bg-[#050508] overflow-hidden"
    >
      {/* Dark mode background grid */}
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Dark mode top accent glow line */}
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
          <span className="text-accent dark:text-[#39ff6a]">fast, reliable,</span>{" "}
          and maintainable applications.
        </motion.h2>

        {/* ── Three-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-start">

          {/* Left column — bio + socials */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3 flex flex-col gap-8"
          >
            <p className="text-sm leading-relaxed text-gray-500 dark:text-white/50">
              I specialize in system architecture and scalable web engineering.
              From backend services to frontend performance, I approach
              development with structure, clarity, and long-term thinking.
            </p>

            {/* Social icon buttons */}
            <div className="flex gap-3">
              {[
                {
                  href: personal.social?.instagram || "#",
                  label: "Instagram",
                  path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
                },
                {
                  href: personal.social?.linkedin || "#",
                  label: "LinkedIn",
                  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                },
                {
                  href: personal.social?.github || "#",
                  label: "GitHub",
                  path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
                },
              ].map(({ href, label, path }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded border border-gray-200 dark:border-white/10 text-gray-500 dark:text-white/40 hover:border-accent dark:hover:border-[#39ff6a] hover:text-accent dark:hover:text-[#39ff6a] hover:bg-accent/5 dark:hover:bg-[#39ff6a]/5 transition-all duration-200"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Center column — photo */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden lg:flex lg:col-span-5 justify-center"
          >
            <div className="relative w-full max-w-sm group">
              {/* Corner bracket decoration */}
              <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-accent dark:border-[#39ff6a] z-20" />
              <span className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-accent dark:border-[#39ff6a] z-20" />
              <span className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-accent dark:border-[#39ff6a] z-20" />
              <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-accent dark:border-[#39ff6a] z-20" />

              <div className="aspect-[3/4] overflow-hidden relative">
                <div className="absolute inset-0 bg-accent/5 dark:bg-[#39ff6a]/5 mix-blend-overlay z-10" />
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
                      <p className="text-[9px] uppercase tracking-widest opacity-70">Available for</p>
                    </div>
                    <p className="text-xs font-semibold">Freelance Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column — secondary bio + stats + CTA */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col gap-8 lg:pt-8"
          >
            {/* Stats row */}
            <div className="flex gap-6">
              {[
                { val: "1+", lbl: "Year Experience" },
                { val: "10+", lbl: "Projects" },
                { val: "5+", lbl: "Happy Clients" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-black text-accent dark:text-[#39ff6a] font-oxanium">{s.val}</span>
                  <span className="text-[10px] text-gray-400 dark:text-white/30 uppercase tracking-wider">{s.lbl}</span>
                </div>
              ))}
            </div>

            <p className="text-sm leading-relaxed text-gray-500 dark:text-white/50">
              Over the years, I've led architectural initiatives, optimized
              high-traffic applications, and contributed to technical
              decision-making that supports product growth. I believe strong
              engineering is defined not just by delivery, but by durability.
            </p>

            {/* CTA button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-3 self-start px-5 py-3 text-sm font-semibold bg-accent dark:bg-[#39ff6a] text-white dark:text-black hover:opacity-90 transition-opacity duration-200 rounded-sm"
            >
              GET IN TOUCH
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}