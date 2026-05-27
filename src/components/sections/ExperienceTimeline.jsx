import React from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

export default function ExperienceTimeline() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#f7f7fb] dark:bg-[#080810]">
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
                  💼
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

                      <span className="px-4 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold border border-accent/10">
                        4 Months
                      </span>
                    </div>

                    <h4 className="text-accent font-bold mt-3 text-lg">
                      Creative IT Institute <br/>
                      <span className="text-secondary">Dhaka, Bangladesh</span>
                    </h4>

                    <div className="flex items-center gap-2 text-secondary/80 text-sm mt-2">
                      <span>OnSite</span>
                      <span>•</span>
                      <span>Internship</span>
                    </div>

                    <p className="text-secondary leading-[1.9] mt-6">
                      Worked on real-world frontend projects using React.js,
                      Next.js, Tailwind CSS, JavaScript, and TypeScript. Focused
                      on building responsive user interfaces, reusable
                      components, Firebase authentication, Cloudinary image
                      optimization, and performance-focused frontend
                      experiences.
                    </p>

                    {/* Responsibilities */}
                    <div className="mt-8">
                      <h5 className="font-bold uppercase tracking-widest text-sm mb-5 text-accent">
                        Key Responsibilities
                      </h5>

                      <div className="space-y-3">
                        {[
                          "Built responsive and reusable UI components",
                          "Integrated Firebase authentication systems",
                          "Optimized images and assets using Cloudinary",
                          "Focused on mobile-first and performance-driven development",
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 text-secondary"
                          >
                            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="lg:w-[320px]">
                    <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                      <img
                        src="/your-internship-image.jpg"
                        alt="Internship"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="mt-12">
                  <h5 className="font-bold uppercase tracking-widest text-sm mb-6 text-accent">
                    Projects Worked On
                  </h5>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {[
                      {
                        title: "Learning Management System",
                        tech: "React.js • Tailwind CSS",
                        img: "/project1.jpg",
                      },
                      {
                        title: "Institute Website Redesign",
                        tech: "Next.js • Firebase",
                        img: "/project2.jpg",
                      },
                      {
                        title: "Admin Dashboard",
                        tech: "React.js • Chart.js",
                        img: "/project3.jpg",
                      },
                    ].map((project, i) => (
                      <div
                        key={i}
                        className="group rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] hover:-translate-y-1 transition-all duration-300"
                      >
                        <div className="overflow-hidden">
                          <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-44 object-cover group-hover:scale-105 transition-all duration-500"
                          />
                        </div>

                        <div className="p-4">
                          <h4 className="font-bold">{project.title}</h4>

                          <p className="text-accent text-sm mt-1">
                            {project.tech}
                          </p>
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
                  🎓
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
                    <img
                      src="/your-certificate.jpg"
                      alt="Certificate"
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
