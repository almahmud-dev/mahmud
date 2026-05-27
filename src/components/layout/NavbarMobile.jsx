"use client";
import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
import { personal } from "@/src/data/personal";
import { navItems } from "./Navbar";

export default function NavbarMobile({ active, handleNav, open, setOpen }) {
  const mobileMenuRef = useRef(null);
  const menuTlRef = useRef(null);
  const navItemRefs = useRef([]);
  const socialRef = useRef(null);

  // ─── Mount: initial GSAP state ────────────────────────────────────────────
  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (menu) gsap.set(menu, { display: "none", clipPath: "inset(0 0 100% 0)" });
  }, []);

  // ─── Unmount: timeline kill ───────────────────────────────────────────────
  useEffect(() => {
    return () => {
      if (menuTlRef.current) menuTlRef.current.kill();
    };
  }, []);

  // ─── Body scroll lock ─────────────────────────────────────────────────────
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

  // ─── Open/Close animation ─────────────────────────────────────────────────
  useEffect(() => {
    const menu = mobileMenuRef.current;
    const items = navItemRefs.current.filter(Boolean);
    const social = socialRef.current;
    if (!menu) return;

    if (menuTlRef.current) menuTlRef.current.kill();

    if (open) {
      gsap.set(menu, { display: "flex", willChange: "clip-path" });

      menuTlRef.current = gsap.timeline({
        onComplete: () => {
          gsap.set(menu, { willChange: "auto" });
          gsap.set(items, { clearProps: "willChange" });
          if (social) gsap.set(social, { clearProps: "willChange" });
        },
      });

      menuTlRef.current
        .fromTo(
          menu,
          { clipPath: "inset(0 0 100% 0)" },
          { clipPath: "inset(0 0 0% 0)", duration: 0.42, ease: "power4.out" },
        )
        .fromTo(
          items,
          { opacity: 0, x: 48, force3D: true, willChange: "transform, opacity" },
          { opacity: 1, x: 0, duration: 0.38, stagger: 0.05, ease: "power3.out", force3D: true },
          "-=0.22",
        )
        .fromTo(
          social,
          { opacity: 0, y: 18, force3D: true, willChange: "transform, opacity" },
          { opacity: 1, y: 0, duration: 0.35, ease: "power3.out", force3D: true },
          "-=0.18",
        );
    } else {
      menuTlRef.current = gsap.timeline({
        onComplete: () => gsap.set(menu, { display: "none", willChange: "auto" }),
      });

      menuTlRef.current.to(menu, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.38,
        ease: "power4.in",
        willChange: "clip-path",
        onComplete: () => gsap.set(menu, { willChange: "auto" }),
      });
    }
  }, [open]);

  const socials = [
    { icon: <FaEnvelope />, label: personal.email, href: personal.emailLink },
    { icon: <FaGithub />, label: "GitHub", href: personal.social.github },
    { icon: <FaLinkedinIn />, label: "LinkedIn", href: personal.social.linkedin },
    { icon: <FaPhone />, label: personal.phone, href: personal.phoneLink },
    { icon: <FaWhatsapp />, label: "WhatsApp", href: personal.social.whatsapp },
  ];

  return (
    <div
      ref={mobileMenuRef}
      className="fixed top-14 left-0 w-full h-[calc(100dvh-3.5rem)] bg-white/97 dark:bg-[#080810]/97 backdrop-blur-md flex-col z-50"
      style={{ display: "none" }}
    >
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
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-xl bg-black/4 dark:bg-white/5 border border-black/8 dark:border-white/8 hover:border-accent hover:text-accent transition-[border-color,color] duration-200"
            >
              <span className="text-accent">{s.icon}</span>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}