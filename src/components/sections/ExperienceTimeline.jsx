import React from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Image from "next/image";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { PiGraduationCap } from "react-icons/pi";
// import { internshipProjects } from "@/src/data/helper";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import { internshipProjects, internshipImages } from "@/src/helper/helper";

export default function ExperienceTimeline() {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/15 text-green-500 border border-green-500/20";

      case "Live":
        return "bg-blue-500/15 text-blue-500 border border-blue-500/20";

      case "In Progress":
        return "bg-yellow-500/15 text-yellow-500 border border-yellow-500/20";

      default:
        return "bg-gray-500/15 text-gray-400 border border-gray-500/20";
    }
  };

  return (
    <section
      id="experience"
      className="relative py-28 overflow-hidden bg-[#f7f7fb] dark:bg-[#080810]"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        {/* Header */}
        <div className="relative z-10 mb-20">
          <SectionHeader
            label="Experience & Achievements"
            text="My Journey"
            colorWord="Journey"
          />

          <p className="text-secondary/70 mt-5 max-w-2xl mx-auto text-center leading-relaxed">
            A quick overview of my professional experience, frontend journey,
            and certifications that shaped my growth as a developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[22px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/60 via-accent/20 to-transparent hidden md:block" />

          <div className="space-y-12">
            {/* Experience Card */}
            <div className="relative flex gap-8">
              {/* Timeline Dot */}
              <div className="hidden md:flex flex-col items-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-lg shadow-accent/30 border border-accent/30">
                  <HiOutlineBriefcase className="text-2xl" />
                </div>

                <div className="mt-4 text-center">
                  <h4 className="font-black text-accent text-xl">2026</h4>

                  <p className="text-xs text-secondary mt-1">Jan – Apr</p>
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 rounded-[28px] border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl p-7 sm:p-10 shadow-[0_10px_60px_rgba(124,58,237,0.08)]">
                {/* Top */}
                <div className="flex flex-col lg:flex-row gap-10">
                  {/* Left */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-2xl sm:text-3xl font-black">
                        Frontend Development Intern
                      </h3>

                      <span className="px-4 py-1 rounded-full bg-accent/10 dark:bg-lime-500 dark:text-white/80 text-accent text-xs font-bold border border-accent/10">
                        4 Months
                      </span>
                    </div>

                    <h4 className="text-accent font-bold mt-3 text-lg">
                      Creative IT Institute <br />
                      <span className="text-secondary">Dhaka, Bangladesh</span>
                    </h4>

                    <div className="flex items-center gap-2 text-secondary/80 text-sm mt-2">
                      <span>OnSite</span>
                      <span>•</span>
                      <span>Internship</span>
                    </div>

                    <p className="text-secondary leading-[1.9] mt-6">
                      Worked on real-world frontend projects using React.js,
                      Next.js, Tailwind CSS, JavaScript, and TypeScript,
                      focusing on responsive user interfaces and reusable
                      component architecture. Gained practical experience with
                      Firebase authentication, Cloudinary image optimization,
                      Git & GitHub version control, and collaborative team
                      workflows. Also worked with WordPress (CMS), domain &
                      hosting management, and client communication while
                      continuously learning new technologies through
                      documentation and hands-on problem solving.
                    </p>

                    {/* Responsibilities */}
                    <div className="mt-8">
                      <h5 className="font-bold uppercase tracking-widest text-sm mb-5 text-accent">
                        Key Responsibilities
                      </h5>

                      <div className="space-y-3">
                        {[
                          "Developed scalable and reusable frontend components for production-level applications",
                          "Collaborated with teams using Git & GitHub workflows, pull requests, and version control practices",
                          "Implemented secure Firebase authentication and optimized application performance across devices",
                          "Managed Cloudinary-based image optimization for faster loading and better user experience",
                          "Worked with WordPress CMS, domain configuration, and hosting deployment environments",
                          "Handled client requirements, project revisions, and real-world frontend problem solving",
                          "Followed modern development practices by reading documentation and adapting to new technologies quickly",
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 text-secondary leading-relaxed"
                          >
                            <span className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="lg:w-[320px] flex flex-col gap-4">
                    {internshipImages.map((img, i) => (
                      <div
                        key={img.id}
                        className="relative rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-xl group"
                      >
                        <Image
                          src={img.image}
                          alt={`Internship Work ${i + 1}`}
                          width={500}
                          height={300}
                          loading="lazy"
                          quality={75}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div className="mt-12">
                  <h5 className="font-bold uppercase tracking-widest text-sm mb-6 text-accent">
                    Projects Worked On
                  </h5>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {internshipProjects.map((project, i) => (
                      <div
                        key={i}
                        className="group flex flex-col rounded-2xl overflow-hidden border border-black/8 dark:border-white/8 bg-white dark:bg-white/5 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/8 hover:-translate-y-1 transition-all duration-300"
                      >
                        {/* Image + Desktop Hover Overlay */}
                        <div className="relative w-full aspect-video overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />

                          {/* Category Badge */}
                          <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-black/50 backdrop-blur-sm text-white border border-white/10">
                            {project.category}
                          </span>

                          {/* Desktop hover overlay */}
                          <div className="absolute inset-0 bg-[#080810]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:flex flex-col items-center justify-center gap-3 p-4">
                            <p className="text-white text-sm text-center leading-relaxed">
                              {project.description}
                            </p>
                            <div className="flex gap-3 mt-2">
                              {project.github ? (
                                <a
                                  target="_blank"
                                  href={project.github}
                                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black text-xs font-semibold hover:scale-105 transition-transform"
                                >
                                  <FaGithub className="text-sm" /> Code
                                </a>
                              ) : (
                                <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/20 text-white/50 text-xs font-semibold cursor-not-allowed border border-white/10">
                                  <FaGithub className="text-sm" /> Private
                                </span>
                              )}
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

                        {/* Card Body */}
                        <div className="flex flex-col flex-1 p-3 sm:p-4">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="text-base font-bold leading-snug">
                              {project.title}
                            </h4>
                            <span
                              className={`px-2 py-0.5 text-[10px] font-semibold rounded-full whitespace-nowrap ${getStatusStyle(project.status)}`}
                            >
                              {project.status}
                            </span>
                          </div>

                          {/* Mobile: description */}
                          <p className="md:hidden text-xs text-secondary/60 mt-1.5 leading-relaxed">
                            {project.description}
                          </p>

                          <div className="flex-1" />

                          {/* Tech Stack */}
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

                          {/* Mobile: buttons */}
                          <div className="md:hidden flex gap-2 mt-4">
                            {project.github ? (
                              <a
                                href={project.github}
                                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl border border-black/10 dark:border-white/10 text-xs font-semibold hover:border-accent/40 hover:text-accent transition-colors"
                              >
                                <FaGithub /> Code
                              </a>
                            ) : (
                              <span className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl border border-black/10 dark:border-white/10 text-xs font-semibold opacity-40 cursor-not-allowed">
                                <FaGithub /> Private
                              </span>
                            )}
                            <a
                              href={project.live}
                              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-accent text-white text-xs font-semibold hover:opacity-90 transition-opacity"
                            >
                              <HiArrowUpRight /> Live
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* NSDA */}
            <div className="relative flex gap-8">
              {/* Timeline */}
              <div className="hidden md:flex flex-col items-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#2563eb] text-white flex items-center justify-center shadow-lg shadow-blue-500/30 border border-blue-500/30">
                  <PiGraduationCap className="text-2xl" />
                </div>

                <div className="mt-4 text-center">
                  <h4 className="font-black text-[#2563eb] text-xl">2026</h4>

                  <p className="text-xs text-secondary mt-1">April</p>
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 rounded-[28px] border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl p-7 sm:p-10 shadow-[0_10px_60px_rgba(37,99,235,0.08)]">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div>
                    <h3 className="text-3xl font-black">NSDA Level-3</h3>

                    <h4 className="text-[#2563eb] font-bold mt-3 text-lg">
                      National Skill Development Authority
                    </h4>

                    <p className="text-secondary leading-[1.9] mt-6">
                      Successfully completed the NSDA Level-3 certification in
                      Software & IT Enabled Services, strengthening my frontend
                      development knowledge and practical industry skills.
                    </p>

                    <button className="mt-7 px-6 py-3 rounded-2xl border border-[#2563eb]/20 bg-[#2563eb]/10 text-[#2563eb] font-semibold hover:bg-[#2563eb] hover:text-white transition-all duration-300">
                      Certificate of Achievement
                    </button>
                  </div>

                  <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                      src="/image/nsda.png"
                      alt="Certificate"
                      width={500}
                      height={300}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
