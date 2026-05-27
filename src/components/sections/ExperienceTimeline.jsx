import React from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import Image from "next/image";

export default function ExperienceTimeline() {
  const images = ["/image/work1.png", "/image/info.png", "/image/inter.png"];
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
                  <div className="lg:w-[320px] flex flex-col gap-5">
                    {images.map((img, i) => (
                      <div
                        key={i}
                        className="rounded-lg overflow-hidden border border-white/10 shadow-2xl"
                      >
                        <Image
                          src={img}
                          alt={`Internship Work ${i + 1}`}
                          width={500}
                          height={300}
                          className="w-full h-full object-cover"
                        />
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
                    {[
                      {
                        title: "Learning Management System",
                        tech: "React.js • Tailwind CSS",
                        img: "https://res.cloudinary.com/dlqvctrgm/image/upload/f_auto,q_auto,w_1200/v1779868816/eduact_kllduz.png",
                      },
                      {
                        title: "Institute Website Redesign",
                        tech: "Next.js • Firebase",
                        img: "https://res.cloudinary.com/dlqvctrgm/image/upload/f_auto,q_auto,w_1200/v1779868766/profile2_kme5er.jpg",
                      },
                      {
                        title: "Admin Dashboard",
                        tech: "React.js • Chart.js",
                        img: "https://res.cloudinary.com/dlqvctrgm/image/upload/f_auto,q_auto,w_1200/v1779868766/profile2_kme5er.jpg",
                      },
                    ].map((project, i) => (
                      <div
                        key={i}
                        className="group rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] hover:-translate-y-1 transition-all duration-300"
                      >
                        <div className="overflow-hidden">
                          <Image
                            src={project.img}
                            alt={project.title}
                            width={500}
                            height={300}
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
