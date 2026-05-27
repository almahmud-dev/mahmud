"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Container from "@/src/components/ui/Container";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus } from "react-icons/fi";
import { faqData } from "@/src/helper/helper";
import MagneticButton from "../ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

// ─── Single FAQ Item

function FaqItem({ item, index, isOpen, onToggle }) {
  const bodyRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;

    // Chole ashle puropuri bondo kori
    if (tweenRef.current) tweenRef.current.kill();

    if (isOpen) {
      // Height 0 set korার আগে scrollHeight store kori — nahole 0 asbe
      const targetHeight = el.scrollHeight;

      gsap.set(el, { height: 0, opacity: 0, willChange: "height, opacity" });

      tweenRef.current = gsap.to(el, {
        height: targetHeight,
        opacity: 1,
        duration: 0.38,
        ease: "power3.out",
        force3D: true,
        onComplete: () => {
          // Auto height — resize e content adjust hobe
          gsap.set(el, { height: "auto", willChange: "auto" });
        },
      });
    } else {
      // Close er somoy current height theke shuru
      gsap.set(el, { height: el.offsetHeight, willChange: "height, opacity" });

      tweenRef.current = gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.32,
        ease: "power3.inOut",
        force3D: true,
        onComplete: () => {
          gsap.set(el, { willChange: "auto" });
        },
      });
    }

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, [isOpen]);

  return (
    <div
      className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-accent/40 shadow-sm shadow-accent/5"
          : "border-black/8 dark:border-white/8"
      }`}
    >
      {/* Accessibility er jonno aria-expanded + aria-controls */}
      <button
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        className={`w-full flex justify-between items-center px-5 sm:px-6 py-4 sm:py-5 text-left transition-all duration-300 ${
          isOpen
            ? "bg-accent/6 dark:bg-accent/10"
            : "bg-[#f8f7ff] dark:bg-white/4 hover:bg-accent/4 dark:hover:bg-white/6"
        }`}
      >
        <span
          className={`font-semibold text-sm sm:text-base pr-4 transition-colors duration-200 ${
            isOpen ? "text-accent" : ""
          }`}
        >
          {item.question}
        </span>

        {/* Plus/Minus CSS opacity + rotate diye swap — FM lagbe na */}
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
            isOpen
              ? "bg-accent text-white border-accent"
              : "bg-transparent border-black/15 dark:border-white/15 text-secondary hover:border-accent hover:text-accent"
          }`}
        >
          <span
            style={{
              display: "block",
              transition: "opacity 0.2s, transform 0.2s",
              opacity: isOpen ? 0 : 1,
              transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
              position: "absolute",
            }}
          >
            <FiPlus className="text-sm" />
          </span>
          <span
            style={{
              display: "block",
              transition: "opacity 0.2s, transform 0.2s",
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "rotate(0deg)" : "rotate(-90deg)",
            }}
          >
            <FiMinus className="text-sm" />
          </span>
        </span>
      </button>

      {/* Answer body — aria-hidden screen reader er jonno */}
      <div
        id={`faq-answer-${index}`}
        ref={bodyRef}
        aria-hidden={!isOpen}
        style={{ height: 0, opacity: 0, overflow: "hidden" }}
        className="bg-white dark:bg-[#080810]"
      >
        <p className="px-5 sm:px-6 py-4 text-sm text-secondary leading-relaxed border-t border-black/5 dark:border-white/80">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

// ─── Main FAQ Section

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const listRef = useRef(null);
  const ctaRef = useRef(null);
  const itemRefs = useRef([]);

  // useCallback — re-render e noto function create hobe na
  const toggle = useCallback(
    (i) => setActiveIndex((prev) => (prev === i ? null : i)),
    [],
  );

  useEffect(() => {
    // Mobile detect — pointer: coarse mane touch device
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;

    // SectionHeader render + paint shesh howar pore refresh
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    const list = listRef.current;
    const cta = ctaRef.current;

    // Null ref filter — unmount er age render na hole skip
    const items = itemRefs.current.filter(Boolean);

    if (!list || !cta || items.length === 0) return;

    const ctx = gsap.context(() => {
      // FAQ items — stagger diye ek er pore ek
      gsap.fromTo(
        items,
        { opacity: 0, y: 64 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.09,
          force3D: true,
          willChange: "transform, opacity",
          scrollTrigger: {
            trigger: list,
            start: isMobile ? "top 92%" : "top 88%",
            once: true, // Mobile + desktop duitatei once — scroll up e re-trigger lagbe na
          },
          onComplete() {
            // Animation shesh — willChange clear kori, GPU memory free
            gsap.set(items, { willChange: "auto" });
          },
        },
      );

      // CTA block
      gsap.fromTo(
        cta,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          force3D: true,
          willChange: "transform, opacity",
          scrollTrigger: {
            trigger: cta,
            start: isMobile ? "top 95%" : "top 92%",
            once: true,
          },
          onComplete() {
            gsap.set(cta, { willChange: "auto" });
          },
        },
      );
    });

    return () => {
      clearTimeout(timer);
      // itemRefs array cleanup — purer stale ref clear
      itemRefs.current = [];
      ctx.revert();
    };
  }, []);

  return (
    <section id="faq" className="relative bg-white dark:bg-[#080810]">
      {/* SectionHeader nijeyi animate hoy — Projects section er moto same pattern */}
      <div className="text-center mb-12">
        <SectionHeader text="FAQ" colorWord="FAQ" />
        <h2 className="text-3xl font-bold text-center mb-4">
          Frequently Asked{" "}
          <span className="text-accent dark:text-[#39ff6a]">Questions</span>
        </h2>
        <p className="text-secondary/80 text-sm max-w-md mx-auto">
          Transparent insights into my process, technical stack, and
          availability.
        </p>
      </div>
      <Container className="max-w-3xl!">
        {/* FAQ list — ref diye ScrollTrigger trigger point */}
        <div ref={listRef} className="space-y-3">
          {faqData.map((item, index) => (
            // ref callback — itemRefs array te directly store
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              style={{ opacity: 0 }}
            >
              <FaqItem
                item={item}
                index={index}
                isOpen={activeIndex === index}
                onToggle={toggle}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className="mt-12 py-7 px-6 sm:px-10 rounded-2xl bg-accent/6 dark:bg-accent/10 border border-accent/20 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{ opacity: 0 }}
        >
          <div className="text-center sm:text-left">
            <h4 className="text-xl font-bold">Have a project in mind?</h4>

            <p className="text-secondary/80 dark:text-white/80 text-sm mt-1 max-w-md">
              Whether it’s a modern landing page or a complete frontend
              application, I’d love to hear about your idea and help bring it to
              life.
            </p>
          </div>

          <MagneticButton
            href="#contact"
            fillColor="#F5F0E8"
            textHoverColor="#000000"
            className="self-start px-7 py-4.5 bg-accent text-white text-xs font-bold tracking-widest rounded-lg"
          >
            Let’s Talk
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
      </Container>
    </section>
  );
}
