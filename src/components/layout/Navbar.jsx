"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Container from "@/src/components/ui/Container";
import Logo from "@/public/svg/Logo";
import { HiOutlineBars3BottomRight, HiXMark } from "react-icons/hi2";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
import { personal } from "@/src/data/personal";
import MagneticButton from "../ui/MagneticButton";
import gsap from "gsap";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Reviews" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  // ─── Refs ────────────────────────────────────────────────────────────────
  const mobileMenuRef = useRef(null); // full-screen drawer
  const menuTlRef = useRef(null); // active GSAP timeline — kill on re-run
  const navItemRefs = useRef([]); // mobile nav item buttons
  const socialRef = useRef(null); // social strip at bottom
  const menuBtnRef = useRef(null); // hamburger / close button
  const iconOpenRef = useRef(null); // bars icon span
  const iconCloseRef = useRef(null); // X icon span
  const pillRef = useRef(null); // desktop sliding pill
  const btnRefs = useRef([]); // desktop nav buttons
  const initializedRef = useRef(false); // pill prothombar snap hoyeche kina
  const scrolledRef = useRef(false); // stale closure avoid: setScrolled er আগে compare

  // ─── Mount: menu hide, icons initial state set ───────────────────────────
  // useEffect dependency [] — only once on mount
  useEffect(() => {
    // SSR flash avoid korte inline style e display:none dewa ache
    // GSAP set redundant, but just in case hydration mismatch hoy
    const menu = mobileMenuRef.current;
    const iconO = iconOpenRef.current;
    const iconC = iconCloseRef.current;
    if (menu)
      gsap.set(menu, { display: "none", clipPath: "inset(0 0 100% 0)" });
    if (iconO) gsap.set(iconO, { opacity: 1, rotate: 0 });
    if (iconC) gsap.set(iconC, { opacity: 0, rotate: -90 });
  }, []);

  // ─── Unmount: active timeline kill ───────────────────────────────────────
  useEffect(() => {
    return () => {
      if (menuTlRef.current) menuTlRef.current.kill();
    };
  }, []);

  // ─── Scroll: backdrop + active section detection ─────────────────────────
  useEffect(() => {
    const onScroll = () => {
      // scrolledRef diye compare: stale closure problem nai, unnecessary re-render nai
      const next = window.scrollY > 30;
      if (next !== scrolledRef.current) {
        scrolledRef.current = next;
        setScrolled(next);
      }

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPos) {
          setActive(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ─── Desktop pill: active change e correct position e move kore ──────────
  // Bug fix: age activeIdxRef === idx check e sবসময় snap hoto.
  // Ekhon শুধু initializedRef check — prothombar snap, porertheke animate.
  useEffect(() => {
    // Mobile e pill nai, desktop only — unnecessary BoundingClientRect call bando
    if (window.innerWidth < 640) return;

    const idx = navItems.findIndex((n) => n.id === active);
    if (idx === -1) return;

    const btn = btnRefs.current[idx];
    const pill = pillRef.current;
    if (!btn || !pill) return;

    const nav = btn.closest(".nav-pill-track");
    if (!nav) return;

    // getBoundingClientRect diye exact position measure kora hoy
    // scroll ba resize e offset theke calculate korle error hoy
    const btnRect = btn.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    const targetX = btnRect.left - navRect.left;
    const targetW = btnRect.width;

    if (!initializedRef.current) {
      // Prothombar: no animation, just snap to position
      gsap.set(pill, { x: targetX, width: targetW, opacity: 1 });
      initializedRef.current = true;
    } else {
      // Porerbar theke: smooth slide
      gsap.to(pill, {
        x: targetX,
        width: targetW,
        duration: 0.35,
        ease: "power3.out",
        overwrite: true, // concurrent tween cancel kore
        force3D: true,
      });
    }
  }, [active]);

  // ─── Body scroll lock: mobile menu open hole page freeze ─────────────────
  useEffect(() => {
    if (!open) return;

    const y = window.scrollY;
    Object.assign(document.body.style, {
      position: "fixed",
      top: `-${y}px`,
      left: "0",
      right: "0",
      width: "100%",
    });
    return () => {
      Object.assign(document.body.style, {
        position: "",
        top: "",
        left: "",
        right: "",
        width: "",
      });
      window.scrollTo(0, y);
    };
  }, [open]);

  // ─── Mobile menu: open/close GSAP timeline ───────────────────────────────
  useEffect(() => {
    const menu = mobileMenuRef.current;
    const items = navItemRefs.current.filter(Boolean);
    const social = socialRef.current;
    const iconO = iconOpenRef.current;
    const iconC = iconCloseRef.current;

    if (!menu) return;

    // Ageer chala timeline kill kore — rapid tap handle kore
    if (menuTlRef.current) menuTlRef.current.kill();

    if (open) {
      // ── OPEN ────────────────────────────────────────────────────────────
      // willChange set: GPU layer prepare
      gsap.set(menu, { display: "flex", willChange: "clip-path" });

      menuTlRef.current = gsap.timeline({
        onComplete: () => {
          // Animation shesh: willChange release, memory bachano
          gsap.set(menu, { willChange: "auto" });
          gsap.set(items, { clearProps: "willChange" });
          gsap.set(social, { clearProps: "willChange" });
        },
      });

      menuTlRef.current
        // Drawer: niche theke clip open hoy
        .fromTo(
          menu,
          { clipPath: "inset(0 0 100% 0)" },
          { clipPath: "inset(0 0 0% 0)", duration: 0.42, ease: "power4.out" },
        )
        // Nav items: right theke left e stagger
        .fromTo(
          items,
          {
            opacity: 0,
            x: 48,
            force3D: true,
            willChange: "transform, opacity",
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.38,
            stagger: 0.05,
            ease: "power3.out",
            force3D: true,
          },
          "-=0.22",
        )
        // Social strip: fade up
        .fromTo(
          social,
          {
            opacity: 0,
            y: 18,
            force3D: true,
            willChange: "transform, opacity",
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power3.out",
            force3D: true,
          },
          "-=0.18",
        );

      // Icon swap: bars rotate out → X rotate in
      gsap.to(iconO, {
        rotate: 90,
        opacity: 0,
        duration: 0.15,
        ease: "power2.in",
      });
      gsap.fromTo(
        iconC,
        { rotate: -90, opacity: 0 },
        {
          rotate: 0,
          opacity: 1,
          duration: 0.18,
          ease: "power2.out",
          delay: 0.12,
        },
      );
    } else {
      // ── CLOSE ───────────────────────────────────────────────────────────
      menuTlRef.current = gsap.timeline({
        onComplete: () => {
          gsap.set(menu, { display: "none", willChange: "auto" });
        },
      });

      menuTlRef.current.to(menu, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.38,
        ease: "power4.in",
        willChange: "clip-path",
        onComplete: () => gsap.set(menu, { willChange: "auto" }),
      });

      // Icon swap: X rotate out → bars rotate in
      gsap.to(iconC, {
        rotate: 90,
        opacity: 0,
        duration: 0.15,
        ease: "power2.in",
      });
      gsap.fromTo(
        iconO,
        { rotate: -90, opacity: 0 },
        {
          rotate: 0,
          opacity: 1,
          duration: 0.18,
          ease: "power2.out",
          delay: 0.12,
        },
      );
    }
  }, [open]);

  // ─── Menu button: tap press/release feedback ─────────────────────────────
  // onPointerDown/Up/Leave — mouse + touch dono te kaje
  const handleMenuBtnDown = useCallback(() => {
    gsap.to(menuBtnRef.current, {
      scale: 0.88,
      duration: 0.08,
      ease: "power2.in",
      force3D: true,
      overwrite: true,
    });
  }, []);

  const handleMenuBtnUp = useCallback(() => {
    gsap.to(menuBtnRef.current, {
      scale: 1,
      duration: 0.35,
      ease: "elastic.out(1.2, 0.5)",
      force3D: true,
      overwrite: true,
    });
  }, []);

  // ─── Smooth scroll to section ─────────────────────────────────────────────
  const handleNav = useCallback((id) => {
    setOpen(false);
    // Close animation shesh hobar por scroll — 300ms gap
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }, []);

  const socials = [
    { icon: <FaEnvelope />, label: personal.email, href: personal.emailLink },
    { icon: <FaGithub />, label: "GitHub", href: personal.social.github },
    {
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      href: personal.social.linkedin,
    },
    { icon: <FaPhone />, label: personal.phone, href: personal.phoneLink },
    { icon: <FaWhatsapp />, label: "WhatsApp", href: personal.social.whatsapp },
  ];

  return (
    <nav className="sticky top-0 z-[100]">
      {/* Backdrop blur — scrolled hole active hoy */}
      <div
        className={`absolute inset-0 -z-10 transition-[backdrop-filter,background-color,border-color,box-shadow] duration-500 ${
          scrolled
            ? "backdrop-blur-md md:backdrop-blur-xl bg-white/80 dark:bg-[#080810]/85 border-b border-black/6 dark:border-white/6 shadow-sm shadow-black/5"
            : ""
        }`}
      />

      <Container className="h-14 px-0! flex items-center justify-between">
        {/* ── Logo + Desktop Nav ────────────────────────────────────────── */}
        <div className="flex items-center gap-8 px-4">
          <button onClick={() => handleNav("hero")}>
            <Logo
              className="w-[70px] md:w-[60px] h-auto"
              accentColor="var(--color-accent)"
            />
          </button>

          {/*
            Desktop nav pill track:
            - "nav-pill-track" class ta getBoundingClientRect() er reference hisebe use hoy
            - Pill span ta absolutely positioned, GSAP e x + width animate hoy
            - Pill er top/bottom fixed (top-1 bottom-1), শুধু x আর width change hoy
            - z-index: pill 0, buttons 1 — button click e problem nai
          */}
          <div className="nav-pill-track hidden sm:flex items-center gap-1 bg-black/4 dark:bg-white/5 rounded-full px-1.5 py-1 border border-black/6 dark:border-white/6 relative">
            {/* Sliding pill — GSAP controlled, opacity 0 theke start */}
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

        {/* ── Right: CTA + Mobile Menu Button ──────────────────────────── */}
        <div className="flex items-center gap-3 px-4">
          <MagneticButton
            href="#contact"
            fillColor="#F5F0E8"
            textHoverColor="#000000"
            className="hidden lg:block self-start px-7 py-4 bg-lime-400 text-black text-xs font-bold tracking-widest rounded-sm"
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

          {/*
            Mobile menu button:
            - motion.button → plain button + GSAP onPointerDown/Up
            - willChange: transform static e set — button always GPU layer e
              (button chhoto, memory impact negligible, frequent tap e worth it)
            - Icon duto ekisathe DOM e thake, absolutely positioned
              GSAP rotate + opacity diye swap, no layout shift
          */}
          <button
            ref={menuBtnRef}
            onClick={() => setOpen((v) => !v)}
            onPointerDown={handleMenuBtnDown}
            onPointerUp={handleMenuBtnUp}
            onPointerLeave={handleMenuBtnUp}
            className="sm:hidden flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 hover:border-accent hover:text-accent transition-[border-color,color] duration-200"
            style={{ willChange: "transform" }}
          >
            {/* Icon container: fixed size jate text shift na kore */}
            <span className="relative w-[1.125rem] h-[1.125rem] flex-shrink-0">
              <span
                ref={iconOpenRef}
                className="absolute inset-0 flex items-center justify-center"
              >
                <HiOutlineBars3BottomRight className="text-lg" />
              </span>
              <span
                ref={iconCloseRef}
                className="absolute inset-0 flex items-center justify-center"
              >
                <HiXMark className="text-lg" />
              </span>
            </span>
            {/* Text: open state diye React e switch — no GSAP needed here */}
            <span>{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </Container>

      {/* ── Mobile Fullscreen Menu ─────────────────────────────────────────
        - display:none inline style: SSR flash prevent
        - GSAP e display:flex set kore, clipPath animate kore open/close
        - willChange lifecycle: set before animate, clear onComplete
        - flex-col class ta always ache, display none/flex GSAP control kore
      ──────────────────────────────────────────────────────────────────── */}
      <div
        ref={mobileMenuRef}
        className="fixed top-14 left-0 w-full h-[calc(100dvh-3.5rem)] bg-white/97 dark:bg-[#080810]/97 backdrop-blur-md md:backdrop-blur-2xl flex-col z-50"
        style={{ display: "none" }}
      >
        {/* Nav items — center vertically */}
        <div className="flex-1 flex flex-col justify-center px-6 gap-1">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              ref={(el) => (navItemRefs.current[i] = el)}
              onClick={() => handleNav(item.id)}
              className={`group flex items-center justify-between w-full py-3 px-4 rounded-2xl transition-colors duration-200 text-left ${
                active === item.id
                  ? "bg-accent/10 text-accent"
                  : "hover:bg-black/4 dark:hover:bg-white/4"
              }`}
              // willChange GSAP e fromTo er from property tে set hoy, static e nai
            >
              <span className="text-2xl xs:text-3xl font-bold uppercase tracking-tight">
                {item.label}
              </span>
              <span
                className={`text-sm font-mono transition-opacity ${
                  active === item.id ? "opacity-100 text-accent" : "opacity-30"
                }`}
              >
                0{i + 1}
              </span>
            </button>
          ))}
        </div>

        {/* Social links strip */}
        <div
          ref={socialRef}
          className="px-6 pb-6 pt-4 border-t border-black/8 dark:border-white/8"
        >
          <p className="text-xs text-secondary/40 uppercase tracking-widest mb-3 font-semibold">
            Connect
          </p>
          <div className="flex flex-wrap gap-2">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  s.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-xl bg-black/4 dark:bg-white/5 border border-black/8 dark:border-white/8 hover:border-accent hover:text-accent transition-[border-color,color] duration-200"
              >
                <span className="text-accent">{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
