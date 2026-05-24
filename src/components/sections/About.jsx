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
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

const whatIDo = [
  {
    title: "Frontend Engineering",
    desc: "Building fast, scalable and modern web applications with React, Next.js and Tailwind CSS.",
    icon: <FaCode />,
  },
  {
    title: "Backend Development",
    desc: "Developing secure and efficient APIs using Node.js, Express and MongoDB for full-stack applications.",
    icon: <FaServer />,
  },
  {
    title: "Full Stack Projects",
    desc: "Creating complete MERN stack applications from UI to backend with real-world performance and scalability.",
    icon: <FaLayerGroup />,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-[#080810]">
      <Container>
        <SectionHeader text="About Me" colorWord="Me" />

        <section className="flex flex-col gap-12">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center justify-between">
            <div className="lg:w-7/12 xl:w-8/12 flex flex-col gap-5 md:gap-7">
              <motion.span
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-accent uppercase tracking-widest text-xs font-bold"
              >
                Introduction
              </motion.span>

              <motion.h1
                variants={fadeUp}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-semibold leading-none"
              >
                {personal.fullName}
                <span className="text-accent">_</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-base sm:text-lg font-medium max-w-xl leading-relaxed text-secondary"
              >
                I'm a{" "}
                <span className="text-accent font-semibold">Full Stack MERN Developer</span>{" "}
                from Dhaka, building fast, scalable and modern web applications with React, Next.js and Node.js.
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={fadeUp}
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-4 sm:gap-6"
              >
                {[
                  { val: "1+", lbl: "Year Experience" },
                  { val: "10+", lbl: "Projects" },
                  { val: "5+", lbl: "Happy Clients" },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-2xl font-black text-accent font-oxanium">{s.val}</span>
                    <span className="text-xs text-secondary/50 uppercase tracking-wider">{s.lbl}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Photo card */}
            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="hidden lg:block w-4/12 xl:w-3/12"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden group relative">
                <div className="absolute -inset-1 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                <div className="absolute inset-0 bg-accent/5 mix-blend-overlay z-10" />
                <img
                  src="/image/image.jpg"
                  alt={personal.fullName}
                  className="w-full h-full object-cover transition duration-700 scale-105 group-hover:scale-100 dark:brightness-75"
                />
                <div className="absolute bottom-4 right-4 z-20">
                  <div className="backdrop-blur-md bg-white/10 dark:bg-black/30 px-3 py-2.5 rounded-xl border border-white/20 text-white">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <p className="text-[9px] uppercase tracking-widest opacity-70">Available for</p>
                    </div>
                    <p className="text-xs font-semibold">Freelance Projects</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* What I do */}
          <div>
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="uppercase tracking-widest text-accent mb-6 text-xs font-bold"
            >
              What I Do
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {whatIDo.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-5 rounded-2xl border border-black/8 dark:border-white/8 dark:bg-white/4 hover:border-accent/40 hover:bg-accent/4 transition-all duration-300 group cursor-default"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-accent/10 text-accent text-lg group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                  </div>
                  <p className="text-xs text-secondary/70 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
}
