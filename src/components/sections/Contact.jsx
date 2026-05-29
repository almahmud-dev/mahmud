"use client";
import React, { useRef, useEffect } from "react";
import Container from "@/src/components/ui/Container";
import SectionHeader from "@/src/components/ui/SectionHeader";
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personal } from "@/src/data/personal";

gsap.registerPlugin(ScrollTrigger);

const links = [
  {
    id: 1,
    label: "Email",
    icon: <FaEnvelope />,
    name: personal.email,
    href: personal.emailLink,
  },
  {
    id: 2,
    label: "GitHub",
    icon: <FaGithub />,
    name: personal.social.github.replace("https://github.com/", "github.com/"),
    href: personal.social.github,
  },
  {
    id: 3,
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
    name: personal.social.linkedin.replace("https://www.linkedin.com/", ""),
    href: personal.social.linkedin,
  },
  {
    id: 4,
    label: "Phone",
    icon: <FaPhone />,
    name: personal.phone,
    href: personal.phoneLink,
  },
  {
    id: 5,
    label: "WhatsApp",
    icon: <FaWhatsapp />,
    name: "WhatsApp",
    href: personal.whatsappLink,
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const subtitleRef = useRef(null);
  const linkCardsRef = useRef([]);
  const formPanelRef = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches;

    ctxRef.current = gsap.context(() => {
      // --- Subtitle ---
      gsap.set(subtitleRef.current, {
        opacity: 0,
        y: 22,
        willChange: "transform, opacity",
      });
      gsap.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out",
        force3D: true,
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 88%",
          once: true,
        },
        onComplete() {
          gsap.set(subtitleRef.current, { clearProps: "willChange" });
        },
      });

      // --- Social link cards ---
      const cardY = isMobile ? 16 : 28;
      const cardDuration = isMobile ? 0.4 : 0.52;

      linkCardsRef.current.forEach((el) => {
        if (el)
          gsap.set(el, {
            opacity: 0,
            y: cardY,
            willChange: "transform, opacity",
          });
      });

      gsap.to(linkCardsRef.current.filter(Boolean), {
        opacity: 1,
        y: 0,
        duration: cardDuration,
        ease: "power3.out",
        force3D: true,
        stagger: 0.08,
        scrollTrigger: {
          trigger: linkCardsRef.current[0],
          start: "top 88%",
          once: true,
        },
        onComplete() {
          linkCardsRef.current.forEach((el) => {
            if (el) gsap.set(el, { clearProps: "willChange,transform" });
          });
        },
      });

      // --- Form panel ---
      const formX = isMobile ? 0 : 30;
      const formY = isMobile ? 22 : 0;

      gsap.set(formPanelRef.current, {
        opacity: 0,
        x: formX,
        y: formY,
        willChange: "transform, opacity",
      });
      gsap.to(formPanelRef.current, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: isMobile ? 0.45 : 0.6,
        ease: "power3.out",
        force3D: true,
        scrollTrigger: {
          trigger: formPanelRef.current,
          start: "top 88%",
          once: true,
        },
        onComplete() {
          gsap.set(formPanelRef.current, {
            clearProps: "willChange,transform,opacity",
          });
        },
      });

      // --- Desktop hover micro-animation ---
      if (!isMobile) {
        linkCardsRef.current.forEach((card) => {
          if (!card) return;

          const handleEnter = () => {
            gsap.to(card, {
              x: 4,
              duration: 0.2,
              ease: "power2.out",
              overwrite: true,
              force3D: true,
            });
          };
          const handleLeave = () => {
            gsap.to(card, {
              x: 0,
              duration: 0.2,
              ease: "power2.out",
              overwrite: true,
              force3D: true,
            });
          };

          card.addEventListener("mouseenter", handleEnter);
          card.addEventListener("mouseleave", handleLeave);
          card._gsapEnter = handleEnter;
          card._gsapLeave = handleLeave;
        });
      }
    }, sectionRef);

    return () => {
      linkCardsRef.current.forEach((card) => {
        if (!card) return;
        if (card._gsapEnter)
          card.removeEventListener("mouseenter", card._gsapEnter);
        if (card._gsapLeave)
          card.removeEventListener("mouseleave", card._gsapLeave);
      });
      ctxRef.current?.revert();
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-32 bg-[#f8faff] dark:bg-[#0d0f14]"
    >
      {/* ── Decorative Elements ── */}

      {/* Top Left Blur */}
      <div className="pointer-events-none absolute top-0 left-0 w-[220px] h-[220px] rounded-full bg-[#3b82f6]/30 blur-[140px] dark:bg-blue-400/10  -translate-x-1/3 -translate-y-1/3" />

      {/* Top Right Blur */}
      <div className="pointer-events-none absolute top-0 right-0 w-[220px] h-[220px] rounded-full bg-[#60a5fa]/30 blur-[140px] dark:bg-indigo-400/10 translate-x-1/3 -translate-y-1/3" />

      {/* Left Dots Pattern */}
      <div className="pointer-events-none absolute left-8 top-32 grid grid-cols-6 gap-2 opacity-20 dark:opacity-10">
        {[...Array(36)].map((_, i) => (
          <span
            key={i}
            className="w-1 h-1 rounded-full bg-blue-500 dark:bg-blue-400"
          />
        ))}
      </div>

      {/* Right Dots Pattern */}
      <div className="pointer-events-none absolute right-8 bottom-32 grid grid-cols-6 gap-2 opacity-20 dark:opacity-10">
        {[...Array(36)].map((_, i) => (
          <span
            key={i}
            className="w-1 h-1 rounded-full bg-blue-500 dark:bg-blue-400"
          />
        ))}
      </div>

      {/* Left Floating Circle */}
      <div className="pointer-events-none absolute -top-40 -left-40 z-0 w-[550px] h-[550px] rounded-full bg-blue-500/10 blur-[180px]" />

      {/* Right Floating Circle */}
      <div className="pointer-events-none absolute -top-40 -right-40 z-0 w-[550px] h-[550px] rounded-full bg-violet-500/15 blur-[180px]" />

      {/* ── Main Content ── */}
      <Container>
        <SectionHeader text="Contact Me" colorWord="Me" />

        <p
          ref={subtitleRef}
          className="text-center text-base text-slate-500 dark:text-slate-400 font-medium mb-12 max-w-md mx-auto"
        >
          Have a project in mind or just want to say hi? Let&apos;s connect.
        </p>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Social links column */}
          <div className="flex flex-col gap-4">
            {links.map((link, i) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (linkCardsRef.current[i] = el)}
                className="group flex items-center justify-between px-5 py-4 rounded-2xl
                  hover:-translate-y-1
                  bg-white/80 dark:bg-[#111318]/80
                  backdrop-blur-md
                  border border-slate-200 dark:border-slate-700/60
                  shadow-sm
                  hover:shadow-xl hover:shadow-blue-500/10
                  hover:border-blue-400/30
                  transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center
                    bg-gradient-to-br from-blue-600 to-blue-500
                    text-white shadow-lg shadow-blue-500/20"
                  >
                    {link.icon}
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
                      {link.label}
                    </span>
                    <span className="text-xs text-slate-700 dark:text-slate-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-200 font-medium">
                      {link.name}
                    </span>
                  </div>
                </div>
                <FaArrowRightLong className="text-[10px] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 -rotate-45 text-blue-500" />
              </a>
            ))}
          </div>

          {/* Contact form panel */}
          <div
            ref={formPanelRef}
            className="lg:col-span-2 rounded-[28px]
              bg-white/95 dark:bg-[#111318]/95
              backdrop-blur-xl
              border border-slate-200 dark:border-slate-700/60
              shadow-xl shadow-blue-500/5
              p-8 md:p-10"
          >
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-slate-800 dark:text-slate-100">
              <span className="w-3 h-3 rounded-full bg-blue-600" />
              Send Message
            </h3>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                {["Your Name", "Your Email"].map((ph, i) => (
                  <input
                    key={i}
                    type={i === 1 ? "email" : "text"}
                    placeholder={ph}
                    className="w-full
                      text-slate-700 dark:text-slate-200
                      placeholder:text-slate-400 dark:placeholder:text-slate-500
                      h-14 px-5 rounded-2xl
                      bg-[#f8faff] dark:bg-[#0d0f14]
                      border border-slate-200 dark:border-slate-700/60
                      focus:border-blue-500 dark:focus:border-blue-400
                      focus:ring-4 focus:ring-blue-500/10
                      outline-none transition-all"
                  />
                ))}
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full
                  text-slate-700 dark:text-slate-200
                  placeholder:text-slate-400 dark:placeholder:text-slate-500
                  h-14 px-5 rounded-2xl
                  bg-[#f8faff] dark:bg-[#0d0f14]
                  border border-slate-200 dark:border-slate-700/60
                  focus:border-blue-500 dark:focus:border-blue-400
                  focus:ring-4 focus:ring-blue-500/10
                  outline-none transition-all"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full min-h-[180px] px-5 py-4 rounded-2xl
                  text-slate-700 dark:text-slate-200
                  placeholder:text-slate-400 dark:placeholder:text-slate-500
                  bg-[#f8faff] dark:bg-[#0d0f14]
                  border border-slate-200 dark:border-slate-700/60
                  focus:border-blue-500 dark:focus:border-blue-400
                  focus:ring-4 focus:ring-blue-500/10
                  outline-none resize-none transition-all"
              />

              <button
                type="submit"
                className="w-full py-3.5
                  bg-gradient-to-r from-blue-600 to-blue-500
                  rounded-2xl shadow-lg shadow-blue-500/20
                  text-white font-semibold text-sm
                  hover:shadow-xl hover:shadow-blue-500/30
                  hover:scale-[1.01] active:scale-[0.98]
                  transition-all duration-300"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
