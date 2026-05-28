"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/src/components/ui/Container";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { projects } from "@/src/data/projectsData";
import ProjectCard from "../ui/Projectcard";
// import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const filters = [
  "All",
  "Client Work",
  "Frontend",
  "Tailwind",
  "React",
  "Next.js",
  "TypeScript",
];

const getInitialCount = () => {
  if (typeof window === "undefined") return 6;
  if (window.innerWidth >= 1536) return 8;
  if (window.innerWidth >= 1024) return 6;
  if (window.innerWidth >= 640) return 4;
  return 3;
};

const LOAD_MORE_COUNT = 3;

const Projects = () => {
  const [active, setActive] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const sectionRef = useRef(null);
  const filtersRef = useRef(null);
  const gridRef = useRef(null);
  const isMobileRef = useRef(false);

  // Mobile check + initial visible count — ekta useEffect e
  useEffect(() => {
    const handleResize = () => {
      isMobileRef.current = window.innerWidth < 768;
      setVisibleCount(getInitialCount());
    };
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter bar scroll animation — mount e ekbar
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        filtersRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
          onStart() {
            filtersRef.current.style.willChange = "opacity, transform";
          },
          onComplete() {
            filtersRef.current.style.willChange = "auto";
          },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Card animation — filter ba visibleCount change hoile re-run
  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".proj-card");
    if (!cards.length) return;

    gsap.killTweensOf(cards);

    gsap.fromTo(
      cards,
      { opacity: 0, y: isMobileRef.current ? 18 : 30, force3D: true },
      {
        opacity: 1,
        y: 0,
        force3D: true,
        duration: 0.5,
        ease: "power3.out",
        stagger: isMobileRef.current ? 0.05 : 0.07,
        onStart() {
          cards.forEach((c) => (c.style.willChange = "opacity, transform"));
        },
        onComplete() {
          cards.forEach((c) => (c.style.willChange = "auto"));
        },
      },
    );
  }, [active, visibleCount]);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.types?.includes(active));

  const visibleProjects = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleFilterChange = useCallback((f) => {
    setActive(f);
    setVisibleCount(getInitialCount());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 bg-white dark:bg-[#080810]"
    >
      <Container>
        <div className="text-center mb-12">
          <SectionHeader text="My Projects" colorWord="Projects" />
          <p className="text-secondary/80 sm:text-[18px] text-sm">
            Filter by category or tech stack
          </p>
        </div>

        <div
          ref={filtersRef}
          style={{ opacity: 0 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => handleFilterChange(f)}
              className={`relative px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-[25px] text-xs sm:text-sm font-semibold border transition-all duration-300
                ${
                  active === f
                    ? "bg-accent text-white border-accent shadow-lg shadow-accent/25"
                    : "border-black/10 dark:border-white/15 hover:border-accent hover:text-accent bg-white dark:bg-white/5"
                }`}
            >
              {f}
              {active === f && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 flex flex-col items-center gap-3">
            <div className="text-4xl opacity-40">😕</div>
            <h3 className="text-xl font-semibold">No projects yet</h3>
            <p className="text-sm text-secondary/60 max-w-sm">
              Looks like there are no projects in this category. Try another
              filter or check back later.
            </p>
            <button
              onClick={() => handleFilterChange("All")}
              className="mt-3 px-5 py-2 rounded-full border border-accent text-accent text-sm font-semibold hover:bg-accent hover:text-white transition"
            >
              Show All Projects
            </button>
          </div>
        ) : (
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {visibleProjects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                priority={i < 3}
                isMobileRef={isMobileRef}
              />
            ))}
          </div>
        )}

        {filtered.length > 0 && (
          <div className="flex flex-col items-center gap-2 mt-10 md:mt-12">
            {hasMore && (
              <button
                onClick={() =>
                  setVisibleCount((prev) => prev + LOAD_MORE_COUNT)
                }
                className="px-7 py-2.5 rounded-full border border-accent text-accent text-sm font-semibold hover:bg-accent hover:text-white transition-all duration-300"
              >
                Show More ({filtered.length - visibleCount} remaining)
              </button>
            )}
            {!hasMore && filtered.length > getInitialCount() && (
              <button
                onClick={() => setVisibleCount(getInitialCount())}
                className="px-7 py-2.5 rounded-full border border-black/10 dark:border-white/10 text-sm font-semibold hover:border-accent hover:text-accent transition-all duration-300"
              >
                Show Less
              </button>
            )}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Projects;
