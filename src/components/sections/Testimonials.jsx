"use client";
import React, { useState, useEffect, useRef } from "react";
import Container from "@/src/components/ui/Container";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { testimonials } from "@/src/helper/helper";



const TOTAL    = testimonials.length;
const AUTO_MS  = 4000;

function mod(n, m) {
  return ((n % m) + m) % m;
}

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array(count).fill(null).map((_, i) => (
        <FaStar key={i} className="text-amber-400 text-sm" />
      ))}
    </div>
  );
}

// Each card gets a style based on its position relative to active
function getCardStyle(pos) {
  // pos: -1 = left side, 0 = center, 1 = right side, else hidden
  if (pos === 0) {
    return {
      transform: "translateX(-50%) translateX(0px) scale(1)",
      opacity: 1,
      zIndex: 10,
      filter: "blur(0px)",
    };
  }
  if (pos === -1) {
    return {
      transform: "translateX(-50%) translateX(-320px) scale(0.8)",
      opacity: 0.22,
      zIndex: 0,
      filter: "blur(1px)",
    };
  }
  if (pos === 1) {
    return {
      transform: "translateX(-50%) translateX(320px) scale(0.8)",
      opacity: 0.22,
      zIndex: 0,
      filter: "blur(1px)",
    };
  }
  // hidden cards
  return {
    transform: "translateX(-50%) translateX(0px) scale(0.8)",
    opacity: 0,
    zIndex: 0,
    filter: "blur(1px)",
  };
}

function TestimonialCard({ t, pos }) {
  const style = getCardStyle(pos);

  return (
    <div
      className="absolute top-0 left-1/2 w-[290px] sm:w-[370px] lg:w-[460px] rounded-2xl border border-black/10 dark:border-white/8 bg-white dark:bg-white/6 p-7 flex flex-col gap-5"
      style={{
        ...style,
        transition: "transform 0.65s cubic-bezier(0.77,0,0.175,1), opacity 0.65s cubic-bezier(0.77,0,0.175,1), filter 0.65s ease",
        boxShadow: pos === 0 ? "0 8px 40px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <div className="flex items-start justify-between">
        <FaQuoteLeft className={`text-2xl ${pos === 0 ? "text-accent/50" : "text-black/10 dark:text-white/10"}`} />
        <Stars count={t.rating} />
      </div>

      <span className={`self-start text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
        pos === 0 ? "bg-accent/10 text-accent" : "bg-black/5 dark:bg-white/5 text-secondary/30"
      }`}>
        "{t.highlight}"
      </span>

      <p className={`text-sm leading-relaxed font-medium ${pos === 0 ? "text-foreground/80" : "text-secondary/50"}`}>
        {t.text}
      </p>

      <div className="flex items-center gap-3 pt-4 mt-auto border-t border-black/5 dark:border-white/5">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${t.avatarBg}`}>
          {t.avatar}
        </div>
        <div>
          <p className={`text-sm font-semibold ${pos !== 0 ? "text-secondary/40" : ""}`}>{t.name}</p>
          <p className="text-xs text-secondary/40">{t.role}, {t.company}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive]   = useState(0);
  const isPaused              = useRef(false);

  // getPos: what position is card[i] relative to active?
  const getPos = (i, curr) => {
    if (i === curr)               return 0;
    if (i === mod(curr - 1, TOTAL)) return -1;
    if (i === mod(curr + 1, TOTAL)) return 1;
    return 99; // hidden
  };

  const next = () => setActive((a) => mod(a + 1, TOTAL));
  const prev = () => setActive((a) => mod(a - 1, TOTAL));

  // Auto slide — depends only on setActive (stable), no stale closure
  useEffect(() => {
    const id = setInterval(() => {
      if (!isPaused.current) {
        setActive((a) => mod(a + 1, TOTAL));
      }
    }, AUTO_MS);
    return () => clearInterval(id);
  }, []); // empty deps — setActive is always stable

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-[#f8f7ff] dark:bg-[#0c0b18] overflow-hidden"
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
    >
      <Container>
        <SectionHeader text="People Say" colorWord="Say" />

        <p className="text-center text-sm text-secondary/60 max-w-md mx-auto mt-3 mb-16">
          What clients and collaborators say about working with me.
        </p>

        {/* Stage */}
        <div className="relative mx-auto w-full" style={{ height: 400 }}>
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={i}
              t={t}
              pos={getPos(i, active)}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-5 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-black/12 dark:border-white/12 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-200 hover:bg-accent/5 active:scale-90"
            aria-label="Previous"
          >
            <HiChevronLeft className="text-lg" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-7 h-2 bg-accent"
                    : "w-2 h-2 bg-black/15 dark:bg-white/15 hover:bg-accent/40"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-black/12 dark:border-white/12 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-200 hover:bg-accent/5 active:scale-90"
            aria-label="Next"
          >
            <HiChevronRight className="text-lg" />
          </button>
        </div>

        <p className="text-center text-xs text-secondary/40 tracking-widest mt-3 font-medium">
          {String(active + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-black/8 dark:border-white/8">
          {[
            { value: "100%", label: "Client Satisfaction" },
            { value: "10+",  label: "Projects Completed"  },
            { value: "5★",   label: "Average Rating"      },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-bold text-accent font-oxanium">{s.value}</p>
              <p className="text-xs text-secondary/50 uppercase tracking-wider mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}