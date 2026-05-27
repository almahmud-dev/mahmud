"use client";

import { useEffect, useRef, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

// ✅ Mobile detect — resize event ছাড়াই, একবার check করে শেষ
const checkMobile = () =>
  typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const { resolvedTheme } = useTheme();
  const accentRef = useRef("");
  const isMobileRef = useRef(false);

  useEffect(() => {
    // ✅ Mobile একবার check — resize listener নেই
    isMobileRef.current = checkMobile();

    // ✅ Mobile এ particles একদম বন্ধ — init ই করো না
    if (isMobileRef.current) return;

    const initParticles = async () => {
      await loadSlim(window.tsParticles);
      setInit(true);
    };
    initParticles();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateAccent = () => {
      accentRef.current = getComputedStyle(document.documentElement)
        .getPropertyValue("--color-accent")
        .trim();
    };
    updateAccent();

    window.addEventListener("accent-change", updateAccent);
    return () => window.removeEventListener("accent-change", updateAccent);
  }, []);

  // ✅ Mobile এ কিছুই render করো না
  if (isMobileRef.current) return null;
  if (!init) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Particles
      // ✅ key={accent} বাদ — accent বদলালে পুরো component destroy হত
      // accent change handle করতে চাইলে tsParticles.setConfig() API ব্যবহার করো
      className="fixed inset-0 -z-10"
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        // ✅ Desktop এ 60fps যথেষ্ট
        fpsLimit: 60,
        particles: {
          number: {
            // ✅ Mobile এ আসাই হবে না, Desktop এ 80 যথেষ্ট (আগে 150 ছিল)
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            // ✅ accentRef.current ব্যবহার — state নয়, re-render নেই
            value: accentRef.current || "#39ff6a",
          },
          links: {
            enable: true,
            color: isDark ? "#ffffffaa" : "#000000aa",
            opacity: 0.3,
          },
          move: {
            enable: true,
            speed: 0.8,
          },
          size: {
            value: 2,
          },
          opacity: {
            value: 0.6,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
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
        // ✅ detectRetina বন্ধ — retina screen এ 2x particles render করত
        detectRetina: false,
      }}
    />
  );
}