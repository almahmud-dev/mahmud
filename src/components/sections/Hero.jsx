"use client";
import React, { useState } from "react";
import Container from "@/src/components/ui/Container";
import imgPlace from "@/public/image/image.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { personal } from "@/src/data/personal";
import MagneticButton from "../ui/MagneticButton";

const letterVariants = {
  hidden: { y: 120, opacity: 0, skewY: 10 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    skewY: 0,
    transition: { delay: i * 0.07, duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.55 + i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const imgVariant = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const name = personal.firstName.toLowerCase();

const profession = [
  "Frontend Developer",
  "Performance & Animation",
  "Modern UI Design",
  "Clean Code & Structure",
];

const professionMobile = ["Frontend", "Next.js", "UI Design"];

const stacks = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
];

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section id="hero" className="py-10 sm:py-20 lg:py-30 relative">
      <div className="relative py-26 xs:py-30 md:py-20 xl:py-15 2xl:py-18">
        {/* Photo */}
        <motion.div
          variants={imgVariant}
          initial="hidden"
          animate="visible"
          className="absolute aspect-4/6 top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 
          sm:-translate-y-[60%]
          z-20 
          w-50 xs:w-60 sm:w-78 md:w-70 lg:w-72 xl:w-80 2xl:w-96"
        >
          <Image
            src={imgPlace}
            priority
            placeholder="blur"
            alt={personal.fullName}
            onLoad={() => setImgLoaded(true)}
            fill
            className={`dark:brightness-75 duration-300 object-cover rounded sm:rounded-xl transition-opacity ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
          {/* Gradient for badge readability */}
          <div className="absolute inset-0 rounded sm:rounded-xl bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Open to work badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap"
          >
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-md bg-black/40 border border-white/15 text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium tracking-wide">
                Open to work
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Big name */}
        <h1
          data-heading={name}
          className="relative uppercase text-center mx-auto w-fit font-black italic font-audiowide select-none text-black dark:text-white"
          style={{ fontSize: "clamp(60px, 17vw, 280px)" }}
        >
          <span className="flex justify-center">
            {name.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </h1>
      </div>

      <Container className="p-5 sm:p-0 font-audiowide">
        {/* Roles — mobile */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex lg:hidden items-center justify-between"
        >
          {professionMobile.map((p, i) => (
            <div key={i} className="flex items-center gap-1 sm:gap-2">
              <span className="text-xs hidden sm:block tracking-widest text-accent">
                0{i + 1}.
              </span>
              <span className="text-xs sm:hidden tracking-widest text-accent font-bold">
                /
              </span>
              <span className="font-bold text-xs xs:text-sm sm:text-lg uppercase tracking-tight">
                {p}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Roles — desktop */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="hidden lg:flex flex-wrap items-center justify-between"
        >
          {profession.map((p, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2 xl:gap-3"
            >
              <span className="text-xs tracking-widest text-accent">
                0{i + 1}.
              </span>
              <span className="font-bold xl:text-lg uppercase tracking-tight">
                {p}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="visible"
          className="text-center text-xs sm:text-sm text-secondary/80 mt-4 font-figtree font-normal tracking-normal normal-case"
        >
          Building performant, pixel-perfect UIs with{" "}
          <span className="text-accent font-semibold">
            Next.js & TypeScript
          </span>
          .
        </motion.p>

        {/* Tech stack chips */}
        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-2 mt-4"
        >
          {stacks.map((s, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.06, duration: 0.3 }}
              className="px-2.5 py-1 text-[10px] sm:text-xs font-medium rounded-lg bg-accent/8 border border-accent/20 text-accent/80 dark:text-[#39ff6a] font-figtree tracking-normal normal-case"
            >
              {s}
            </motion.span>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="visible"
          className="flex gap-3 mt-5 xs:mt-6 justify-center font-figtree"
        >
          <MagneticButton
            href="/image/cv.pdf"
            fillColor="#000000"
            textHoverColor="#39ff6a"
            className="px-5 py-2.5 rounded-full bg-accent text-white text-sm font-semibold"
          >
            Download CV
          </MagneticButton>

          <MagneticButton
            href="#contact"
            fillColor="#39ff6a"
            textHoverColor="#000000"
            className="px-5 py-2.5 rounded-full border border-black/40 dark:border-white/30 text-sm font-semibold"
          >
            Contact Me
          </MagneticButton>
        </motion.div>
      </Container>
    </section>
  );
}
