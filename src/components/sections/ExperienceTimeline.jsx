import React from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import ExperienceCard from "../ui/ExperienceCard";
import CertificationCard from "../ui/CertificationCard";

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="relative py-28 overflow-hidden bg-[#f7f7fb] dark:bg-primary-dark"
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
          <div className="absolute left-5.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/60 via-accent/20 to-transparent hidden md:block" />

          <div className="space-y-12">
            <ExperienceCard />
            <CertificationCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
