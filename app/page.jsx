import dynamic from "next/dynamic";
import Hero from "@/src/components/sections/Hero";

const About = dynamic(() => import("@/src/components/sections/About"));
const ExperienceTimeline = dynamic(() => import("@/src/components/sections/ExperienceTimeline"));
const Skills = dynamic(() => import("@/src/components/sections/Skills"));
const Projects = dynamic(() => import("@/src/components/sections/Projects"));
const Testimonials = dynamic(() => import("@/src/components/sections/Testimonials"));
const Faq = dynamic(() => import("@/src/components/sections/Faq"));
const Contact = dynamic(() => import("@/src/components/sections/Contact"));

export default function Page() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ExperienceTimeline/>
      <Testimonials />
      <Faq />
      <Contact />
    </div>
  );
}
