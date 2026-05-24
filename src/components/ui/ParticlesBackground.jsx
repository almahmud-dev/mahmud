"use client";

import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { resolvedTheme } = useTheme();
  const [accent, setAccent] = useState("");

  useEffect(() => {
    const initParticles = async () => {
      await loadSlim(window.tsParticles);
      setInit(true);
    };
    initParticles();
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const updateAccent = () => {
      const color = getComputedStyle(document.documentElement)
        .getPropertyValue("--color-accent")
        .trim();
      setAccent(color);
    };
    updateAccent();
    window.addEventListener("accent-change", updateAccent);
    return () => {
      window.removeEventListener("accent-change", updateAccent);
    };
  }, []);

  if (!init) return null;
  const isDark = resolvedTheme === "dark";

  return (
    <Particles
      key={accent}
      className="fixed inset-0 -z-10"
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: {
            value: isMobile ? 30 : 150,
            density: {
              enable: !isMobile,
              value_area: 800,
            },
          },

          color: {
            value: accent,
          },

          links: {
            enable: true,
            color: isDark ? "#ffffffaa" : "#000000aa",
            opacity: 0.3,
          },

          move: {
            enable: true,
            speed: isMobile ? 0.5 : 0.8, // 🔥 smoother
          },

          size: {
            value: isMobile ? 1.2 : 2,
          },

          opacity: {
            value: 0.6,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: !isMobile,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 120,
              links: { opacity: 1 },
            },
          },
        },
      }}
    />
  );
}
