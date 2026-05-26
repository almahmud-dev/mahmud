"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({
  label,
  text,
  colorWord,
  className = "",
}) {
  let content;

  if (colorWord) {
    const idx = text.indexOf(colorWord);
    if (idx === -1) {
      content = (
        <>
          {text}
          <span className="text-accent">_</span>
        </>
      );
    } else {
      const before = text.slice(0, idx);
      const after = text.slice(idx + colorWord.length);
      content = (
        <>
          {before}
          <span className="text-accent">{colorWord}</span>
          {after}
          <span className="text-accent">_</span>
        </>
      );
    }
  } else {
    content = (
      <>
        {text}
        <span className="text-accent">_</span>
      </>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`relative text-center py-4 sm:py-6 mb-2 ${className}`}
    >
      <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center font-black text-accent/6 dark:text-accent/12 text-[14vw] sm:text-[10vw] lg:text-[8vw] uppercase tracking-widest pointer-events-none select-none whitespace-nowrap overflow-hidden">
        {text}
      </span>
      <p className="relative z-10 mb-4 text-[18px] font-bold uppercase tracking-[4px] text-red-500 dark:text-[#39ff6a]">
        {label}
      </p>
      <h2 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide capitalize">
        {content}
      </h2>
    </motion.div>
  );
}
