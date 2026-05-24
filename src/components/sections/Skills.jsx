"use client";
import React, { useRef } from "react";
import Container from "@/src/components/ui/Container";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { motion, useInView } from "framer-motion";
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma,
} from "react-icons/fa6";
import {
  SiTailwindcss, SiNextdotjs, SiTypescript, SiExpress, SiMongodb,
  SiFirebase, SiFramer, SiGsap, SiRedux, SiPostman, SiVercel,
  SiCloudinary, SiOpenai,
} from "react-icons/si";
import {
  TbBrandAdobePhotoshop, TbBrandAdobeXd,
} from "react-icons/tb";
import { MdCode, MdStorage, MdOutlineBrush, MdOutlineSmartToy } from "react-icons/md";

const skillGroups = [
  {
    title: "Frontend",
    icon: <MdCode />,
    color: "from-violet-500/15 to-blue-500/10",
    accent: "#7c3aed",
    items: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3 className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
      { name: "Framer", icon: <SiFramer /> },
      { name: "GSAP", icon: <SiGsap className="text-green-400" /> },
    ],
  },
  {
    title: "Backend",
    icon: <MdStorage />,
    color: "from-emerald-500/15 to-teal-500/10",
    accent: "#059669",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    ],
  },
  {
    title: "Tools",
    icon: <FaGitAlt />,
    color: "from-rose-500/15 to-orange-500/10",
    accent: "#e11d48",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Cloudinary", icon: <SiCloudinary className="text-blue-500" /> },
    ],
  },
  {
    title: "Design",
    icon: <MdOutlineBrush />,
    color: "from-pink-500/15 to-rose-500/10",
    accent: "#db2777",
    items: [
      { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
      { name: "Photoshop", icon: <TbBrandAdobePhotoshop className="text-blue-500" /> },
      { name: "Adobe XD", icon: <TbBrandAdobeXd className="text-pink-500" /> },
    ],
  },
  {
    title: "AI & Productivity",
    icon: <MdOutlineSmartToy />,
    color: "from-amber-500/15 to-yellow-500/10",
    accent: "#d97706",
    items: [
      { name: "AI Tools", icon: <SiOpenai /> },
      { name: "Prompt Engineering", icon: <MdOutlineSmartToy className="text-amber-500" /> },
    ],
  },
];

function SkillCard({ group, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl border border-black/8 dark:border-white/8 bg-white dark:bg-white/4 overflow-hidden hover:border-accent/40 transition-all duration-300"
    >
      {/* Gradient bg */}
      <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative p-5 sm:p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
            style={{ background: `${group.accent}18`, color: group.accent }}
          >
            {group.icon}
          </div>
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider" style={{ color: group.accent }}>
              {group.title}
            </h3>
            <p className="text-[10px] text-secondary/40">{group.items.length} technologies</p>
          </div>
        </div>

        {/* Skills grid */}
        <div className="flex flex-wrap gap-2">
          {group.items.map((item, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 + idx * 0.04, duration: 0.35 }}
              whileHover={{ y: -2, scale: 1.04, transition: { duration: 0.15 } }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg bg-black/4 dark:bg-white/5 border border-black/6 dark:border-white/6 hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-all duration-200 cursor-default"
            >
              <span className="text-base leading-none">{item.icon}</span>
              {item.name}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-[#f8f7ff] dark:bg-[#0c0b18]">
      <Container>
        <SectionHeader text="Skills & Tools" colorWord="Tools"/>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center text-sm text-secondary/60 max-w-md mx-auto mb-4"
        >
          Technologies I use to build modern, scalable and high-performance applications.
        </motion.p>

        {/* Total count pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            20+ Technologies
          </span>
        </motion.div>

        {/* Masonry-ish layout */}
        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <div key={i} className={i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <SkillCard group={group} index={i} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
