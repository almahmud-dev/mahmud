"use client";
import React, { useEffect, useState, useRef } from "react";
import Container from "@/src/components/ui/Container";
import Logo from "@/public/svg/Logo";
import { motion, AnimatePresence } from "framer-motion";
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

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Active section detection
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

  useEffect(() => {
    if (open) {
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
    }
  }, [open]);

  const handleNav = (id) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const socials = [
    {
      icon: <FaEnvelope />,
      label: personal.email,
      href: personal.emailLink,
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: personal.social.github,
    },
    {
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      href: personal.social.linkedin,
    },
    {
      icon: <FaPhone />,
      label: personal.phone,
      href: personal.phoneLink,
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      href: personal.social.whatsapp,
    },
  ];

  return (
    <nav className="sticky top-0 z-[100]">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 -z-10 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-white/80 dark:bg-[#080810]/85 border-b border-black/6 dark:border-white/6 shadow-sm shadow-black/5"
            : ""
        }`}
      />

      <Container className="h-14 px-0! flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-8 px-4">
          <button onClick={() => handleNav("hero")}>
            <Logo
              className="w-[70px] md:w-[60px] h-auto"
              accentColor="var(--color-accent)"
            />
          </button>

          {/* Desktop nav - pill style */}
          <div className="hidden sm:flex items-center gap-1 bg-black/4 dark:bg-white/5 rounded-full px-1.5 py-1 border border-black/6 dark:border-white/6">
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="relative px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-accent rounded-full"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    active === item.id
                      ? "text-white"
                      : "text-secondary hover:text-accent"
                  }`}
                >
                  {item.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Right side */}
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

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setOpen((v) => !v)}
            whileTap={{ scale: 0.9 }}
            className="sm:hidden flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 hover:border-accent hover:text-accent transition-all duration-200"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <HiXMark className="text-lg" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <HiOutlineBars3BottomRight className="text-lg" />
                </motion.span>
              )}
            </AnimatePresence>
            {open ? "Close" : "Menu"}
          </motion.button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-14 left-0 w-full h-[calc(100dvh-3.5rem)] bg-white/97 dark:bg-[#080810]/97 backdrop-blur-2xl flex flex-col z-50"
          >
            {/* Nav items */}
            <div className="flex-1 flex flex-col justify-center px-6 gap-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.055,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`group flex items-center justify-between w-full py-3 px-4 rounded-2xl transition-all duration-200 text-left ${
                    active === item.id
                      ? "bg-accent/10 text-accent"
                      : "hover:bg-black/4 dark:hover:bg-white/4"
                  }`}
                >
                  <span className="text-2xl xs:text-3xl font-bold uppercase tracking-tight">
                    {item.label}
                  </span>
                  <span
                    className={`text-sm font-mono transition-opacity ${active === item.id ? "opacity-100 text-accent" : "opacity-30"}`}
                  >
                    0{i + 1}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Social links at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
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
                      s.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-xl bg-black/4 dark:bg-white/5 border border-black/8 dark:border-white/8 hover:border-accent hover:text-accent transition-all duration-200"
                  >
                    <span className="text-accent">{s.icon}</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
