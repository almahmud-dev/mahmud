"use client";

import Themes from "@/src/components/ui/Themes";
import MouseTracker from "@/src/components/ui/MouseTracker";
import ParticlesBackground from "@/src/components/ui/ParticlesBackground";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

const isMobile =
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: coarse)").matches;

export function Providers({ children }) {
  return (
    <div className="overflow-x-clip max-w-screen">
      <ParticlesBackground />
      {!isMobile && <MouseTracker />}
      <Themes />
      <div className="noise-bg">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}