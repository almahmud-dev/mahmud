"use client";

import { useEffect, useRef } from "react";

// ✅ Mobile detect — mouse tracker mobile এ দরকার নেই, শুধু বন্ধ করে দাও
const isMobile = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: coarse)").matches;

const MouseTracker = ({ className }) => {
  const circleRef = useRef(null);

  useEffect(() => {
    // ✅ Mobile এ সম্পূর্ণ বন্ধ — একটাও event listener লাগবে না
    if (isMobile()) return;

    // ✅ useState বাদ — এখন mouseX/Y শুধু ref এ, কোনো re-render নেই
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = null;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      const speed = 0.1;
      const dx = targetX - currentX;
      const dy = targetY - currentY;

      // ✅ খুব ছোট movement এ animation বন্ধ — CPU বাঁচে
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        currentX += dx * speed;
        currentY += dy * speed;

        if (circleRef.current) {
          // ✅ style.left/top বাদ — translate ব্যবহার করো, layout trigger হয় না
          circleRef.current.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // ✅ Mobile এ কিছুই render করো না
  if (typeof window !== "undefined" && isMobile()) return null;

  return (
    <div
      ref={circleRef}
      aria-hidden="true"
      role="presentation"
      className={`tracker fixed w-10 h-10 bg-accent/10 dark:bg-accent/30 border border-accent/50 rounded-full z-[999] pointer-events-none ${className}`}
      style={{
        left: 0,
        top: 0,
        // ✅ willChange দিলে browser GPU layer আগে থেকে বানিয়ে রাখে
        willChange: "transform",
      }}
    />
  );
};

export default MouseTracker;
