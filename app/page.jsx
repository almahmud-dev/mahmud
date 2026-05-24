import React from "react";
import dynamic from "next/dynamic";

import Hero from "@/src/components/sections/Hero";
import About from "@/src/components/sections/About";

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
      <Testimonials />
      <Faq />
      <Contact />
    </div>
  );
}
