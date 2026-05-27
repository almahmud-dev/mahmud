"use client";

import { useRef, useCallback } from "react";
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
  // ✅ rect cache করা হয়েছে — বারবার getBoundingClientRect() call নেই
  const rectRef = useRef(null);

  const handleMouseEnter = useCallback((e) => {
    // ✅ একবার rect নিয়ে cache করো
    rectRef.current = e.currentTarget.getBoundingClientRect();
    const dir = e.clientX - rectRef.current.left > rectRef.current.width / 2 ? "right" : "left";

    gsap.fromTo(
      fillRef.current,
      { x: dir === "right" ? "101%" : "-101%" },
      { x: "0%", duration: 0.5, ease: "power3.out", overwrite: true }
    );

    gsap.to(contentRef.current, {
      color: textHoverColor,
      duration: 0.3,
      ease: "power2.out",
      overwrite: true,
    });
  }, [textHoverColor]);

  const handleMouseLeave = useCallback((e) => {
    // ✅ cache করা rect ব্যবহার করো, নতুন করে read করো না
    const rect = rectRef.current;
    if (!rect) return;
    const exitDir = e.clientX - rect.left > rect.width / 2 ? "right" : "left";

    gsap.to(fillRef.current, {
      x: exitDir === "right" ? "101%" : "-101%",
      duration: 0.5,
      ease: "power3.in",
      overwrite: true,
    });

    gsap.to(contentRef.current, {
      color: "",
      duration: 0.3,
      ease: "power2.out",
      overwrite: true,
    });
  }, []);

  return (
    <a
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative items-center justify-center overflow-hidden cursor-pointer ${className}`}
    >
      <span
        ref={fillRef}
        style={{
          backgroundColor: fillColor,
          transform: "translateX(-101%)",
          // ✅ will-change দিলে browser আগে থেকে GPU layer তৈরি রাখে
          willChange: "transform",
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