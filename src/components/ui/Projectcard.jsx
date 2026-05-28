"use client";
import { useRef, useCallback } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import gsap from "gsap";

const getStatusStyle = (status) => {
  switch (status) {
    case "Completed":
      return "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30";
    case "Live":
      return "bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30";
    case "In Progress":
      return "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30";
    case "Improving":
      return "bg-violet-500/15 text-violet-600 dark:text-violet-400 border border-violet-500/30";
    case "Contributed":
      return "bg-orange-500/15 text-orange-600 dark:text-orange-400 border border-orange-500/30";
    default:
      return "bg-zinc-500/15 text-zinc-500 border border-zinc-500/20";
  }
};

const ProjectCard = ({ project, priority, isMobileRef }) => {
  const cardRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    if (isMobileRef.current) return;
    gsap.to(cardRef.current, {
      y: -4,
      duration: 0.2,
      ease: "power2.out",
      force3D: true,
      overwrite: true,
    });
  }, [isMobileRef]);

  const handleMouseLeave = useCallback(() => {
    if (isMobileRef.current) return;
    gsap.to(cardRef.current, {
      y: 0,
      duration: 0.25,
      ease: "power2.inOut",
      force3D: true,
      overwrite: true,
    });
  }, [isMobileRef]);

  return (
    <div
      ref={cardRef}
      className="proj-card group flex flex-col rounded-2xl overflow-hidden border border-black/8 dark:border-white/8 bg-white dark:bg-white/5 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/8 transition-all duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-black/50 backdrop-blur-sm text-white border border-white/10">
          {project.category}
        </span>
        <div className="absolute inset-0 bg-[#080810]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:flex flex-col items-center justify-center gap-3 p-4">
          <p className="text-white text-sm text-center leading-relaxed">
            {project.description}
          </p>
          <div className="flex gap-3 mt-2">
            <a
              target="_blank"
              href={project.github || "#"}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black text-xs font-semibold hover:scale-105 transition-transform ${
                !project.github ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <FaGithub className="text-sm" /> Code
            </a>
            <a
              target="_blank"
              href={project.live}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent text-white text-xs font-semibold hover:scale-105 transition-transform"
            >
              <HiArrowUpRight className="text-sm" /> Live
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-3 sm:p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base font-bold leading-snug">{project.title}</h3>
          <span
            className={`px-2 py-0.5 text-[10px] font-semibold rounded-full whitespace-nowrap ${getStatusStyle(project.status)}`}
          >
            {project.status}
          </span>
        </div>
        <p className="md:hidden text-xs xs:text-sm text-secondary/60 mt-1.5 leading-relaxed">
          {project.description}
        </p>
        <div className="flex-1" />
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-lg bg-black/4 dark:bg-white/5 border border-black/8 dark:border-white/8 hover:border-accent/40 hover:text-accent transition-colors cursor-default"
            >
              <span className="text-accent text-base leading-none">
                {t.icon}
              </span>
              {t.name}
            </span>
          ))}
        </div>
        <div className="md:hidden flex gap-2 mt-4">
          <a
            href={project.github || "#"}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl border border-black/10 dark:border-white/10 text-xs font-semibold hover:border-accent/40 hover:text-accent transition-colors"
          >
            <FaGithub /> Code
          </a>
          <a
            href={project.live}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-accent text-white text-xs font-semibold hover:opacity-90 transition-opacity"
          >
            <HiArrowUpRight /> Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
