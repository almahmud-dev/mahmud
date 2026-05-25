"use client";

import Themes from "@/src/components/ui/Themes";
import Loader from "@/src/components/ui/Loader";
import MouseTracker from "@/src/components/ui/MouseTracker";
import ParticlesBackground from "@/src/components/ui/ParticlesBackground";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import { useEffect, useState } from "react";

export function Providers({ children }) {
  const [loading, setLoading] = useState(true);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    if (document.readyState === "complete") handleLoad();
    else window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    const update = () => setMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="overflow-x-clip max-w-screen">
      <ParticlesBackground />
      {!mobile && <MouseTracker />}
      <Themes />
      <div className="noise-bg">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}