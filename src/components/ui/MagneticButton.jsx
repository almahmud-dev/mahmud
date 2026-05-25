"use client";

import { useRef } from "react";
import gsap from "gsap";

export default function MagneticButton({
  children,
  href = "#",
  className = "",
  fillColor = "#ffffff",
  textHoverColor = "#000000",
}) {
  const fillRef = useRef(null);
  const contentRef = useRef(null);

  function getEnterDirection(e, element) {
    const rect = element.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    return mouseX > rect.width / 2 ? "right" : "left";
  }

  function handleMouseEnter(e) {
    const dir = getEnterDirection(e, e.currentTarget);

    gsap.fromTo(
      fillRef.current,
      { x: dir === "right" ? "101%" : "-101%" },
      { x: "0%", duration: 0.5, ease: "power3.out" },
    );

    gsap.to(contentRef.current, {
      color: textHoverColor,
      duration: 0.3,
      ease: "power2.out",
    });
  }

  function handleMouseLeave(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const exitDir = mouseX > rect.width / 2 ? "right" : "left";

    gsap.to(fillRef.current, {
      x: exitDir === "right" ? "101%" : "-101%",
      duration: 0.5,
      ease: "power3.in",
    });

    gsap.to(contentRef.current, {
      color: "",
      duration: 0.3,
      ease: "power2.out",
    });
  }

  return (
    <a
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex items-center justify-center overflow-hidden cursor-pointer ${className}`}
    >
      <span
        ref={fillRef}
        style={{
          backgroundColor: fillColor,
          transform: "translateX(-101%)",
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      />

      <span ref={contentRef} className="relative z-10 flex items-center gap-3">
        {children}
      </span>
    </a>
  );
}
