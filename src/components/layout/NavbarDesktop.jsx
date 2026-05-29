"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { HiOutlineBars3BottomRight, HiXMark } from "react-icons/hi2";
import Container from "@/src/components/ui/Container";
import Logo from "@/public/svg/Logo";
import MagneticButton from "../ui/MagneticButton";
import { navItems } from "./Navbar";

export default function NavbarDesktop({ scrolled, active, handleNav, open, setOpen }) {
  const pillRef = useRef(null);
  const btnRefs = useRef([]);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 640) return;
    const idx = navItems.findIndex((n) => n.id === active);
    if (idx === -1) return;
    const btn = btnRefs.current[idx];
    const pill = pillRef.current;
    if (!btn || !pill) return;
    const nav = btn.closest(".nav-pill-track");
    if (!nav) return;
    const btnRect = btn.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();
    const targetX = btnRect.left - navRect.left;
    const targetW = btnRect.width;
    if (!initializedRef.current) {
      gsap.set(pill, { x: targetX, width: targetW, opacity: 1 });
      initializedRef.current = true;
    } else {
      gsap.to(pill, {
        x: targetX,
        width: targetW,
        duration: 0.35,
        ease: "power3.out",
        overwrite: true,
        force3D: true,
      });
    }
  }, [active]);

  return (
    <nav className="sticky top-0 z-[100]">
      <div
        className={`absolute inset-0 -z-10 transition-[backdrop-filter,background-color,border-color,box-shadow] duration-500 ${
          scrolled
            ? "backdrop-blur-md md:backdrop-blur-xl bg-white/80 dark:bg-[#080810]/85 border-b border-black/6 dark:border-white/6 shadow-sm shadow-black/5"
            : ""
        }`}
      />

      <Container className="h-14 px-0! flex items-center justify-between">
        <div className="flex items-center gap-8 px-4">
          <button onClick={() => handleNav("hero")}>
            <Logo
              className="w-[70px] md:w-[60px] h-auto"
              accentColor="var(--color-accent)"
            />
          </button>

          <div className="nav-pill-track hidden sm:flex items-center gap-1 bg-black/4 dark:bg-white/5 rounded-full px-1.5 py-1 border border-black/6 dark:border-white/6 relative">
            <span
              ref={pillRef}
              className="absolute top-1 bottom-1 bg-accent rounded-full pointer-events-none"
              style={{ opacity: 0, zIndex: 0, left: 0, width: 0 }}
              aria-hidden="true"
            />
            {navItems.map((item, i) => (
              <button
                key={item.id}
                ref={(el) => (btnRefs.current[i] = el)}
                onClick={() => handleNav(item.id)}
                className="relative px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors duration-200"
                style={{ zIndex: 1 }}
              >
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    active === item.id
                      ? "text-white"
                      : "text-secondary hover:text-accent"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 px-4">
         <div className="hidden lg:block">
           <MagneticButton
            href="#contact"
            fillColor="#F5F0E8"
            textHoverColor="#000000"
            className="self-start px-7 py-4 bg-lime-400 text-black text-xs font-bold tracking-widest rounded-sm"
          >
            LET'S TALK
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="w-4 h-4"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </MagneticButton>
         </div>

          {/* Hamburger button — Navbar er vitore and sm: er nice dekhabe */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="sm:hidden flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 hover:border-accent hover:text-accent transition-[border-color,color] duration-200"
          >
            {open ? (
              <HiXMark className="text-lg" />
            ) : (
              <HiOutlineBars3BottomRight className="text-lg" />
            )}
            <span>{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </Container>
    </nav>
  );
}