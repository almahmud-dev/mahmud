"use client";
import React, { useState, useEffect, useRef } from "react";

const MouseTracker = ({ className }) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const circleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let requestId;

    const animate = () => {
      if (circleRef.current) {
        const currentX = parseFloat(circleRef.current.style.left) || 0;
        const currentY = parseFloat(circleRef.current.style.top) || 0;

        const speed = 0.06; 
        const dx = mouseX - currentX;
        const dy = mouseY - currentY;

        circleRef.current.style.left = currentX + dx * speed + "px";
        circleRef.current.style.top = currentY + dy * speed + "px";
      }

      requestId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(requestId);
  }, [mouseX, mouseY]);

  return (
    <>
      <div
        ref={circleRef}
        className={` tracker fixed w-10 h-10 bg-accent/10 dark:bg-accent/30 border border-accent/50 rounded-full -translate-1/2  z-999 pointer-events-none  ${className}`}
        style={{ left: "0px", top: "0px", transition: "transform 0.4s" }}
      ></div>
    </>
  );
};

export default MouseTracker;