"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Themes from "@/src/components/ui/Themes";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

// ✅ Heavy client-only libs (tsParticles / GSAP-free mouse tracker) — SSR-এ লাগবেই না,
// dynamic + ssr:false দিয়ে main bundle থেকে আলাদা chunk এ split হবে (initial JS কমবে)
const ParticlesBackground = dynamic(
  () => import("@/src/components/ui/ParticlesBackground"),
  { ssr: false }
);
const MouseTracker = dynamic(
  () => import("@/src/components/ui/MouseTracker"),
  { ssr: false }
);

export function Providers({ children }) {
  // ✅ isMobile আগে module-level এ evaluate হতো (server="false", client="real value")
  // eta hydration mismatch dito. Ekhon: SSR + first client render duitai "false" die
  // shuru hoy (consistent), mount howar por real value set hoy — no mismatch.
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
  }, []);

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
