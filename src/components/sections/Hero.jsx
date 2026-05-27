"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Container from "@/src/components/ui/Container";
import imgPlace from "@/public/image/image.jpg";
import Image from "next/image";
import { personal } from "@/src/data/personal";
import MagneticButton from "../ui/MagneticButton";

const name = personal.firstName.toLowerCase();

const profession = [
  "Frontend Developer",
  "Performance & Animation",
  "Modern UI Design",
  "Clean Code & Structure",
];

const professionMobile = ["Frontend", "Next.js", "UI Design"];

const stacks = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
];

export default function Hero() {
  const photoRef   = useRef(null);
  const lettersRef = useRef([]); // name er proti ta letter er ref
  const rolesRef   = useRef(null);
  const taglineRef = useRef(null);
  const chipsRef   = useRef([]); // stack chips er ref array
  const buttonsRef = useRef(null);
  const badgeRef   = useRef(null);

  useEffect(() => {
    // null hote pare emon gula age filter kore nao
    const letters = lettersRef.current.filter(Boolean);
    const chips   = chipsRef.current.filter(Boolean);

    // animate hobe emon sob element e willChange set koro
    // browser age theke GPU layer ready rakhbe
    gsap.set(
      [photoRef.current, badgeRef.current, rolesRef.current,
       taglineRef.current, buttonsRef.current, ...letters, ...chips],
      { willChange: "transform, opacity" }
    );

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", force3D: true },
        onComplete() {
          // animation shesh - willChange ar dorkar nai, GPU memory free koro
          gsap.set(
            [photoRef.current, badgeRef.current, rolesRef.current,
             taglineRef.current, buttonsRef.current, ...letters, ...chips],
            { willChange: "auto", clearProps: "willChange" }
          );
        },
      });

      // photo fade + scale
      tl.fromTo(photoRef.current,
        { opacity: 0, scale: 1.06 },
        { opacity: 1, scale: 1, duration: 0.9 }
      )
      // name er letter gula ekta stagger tween e - alada alada animation na
      .fromTo(letters,
        { y: 120, opacity: 0, skewY: 10 },
        { y: 0, opacity: 1, skewY: 0, duration: 0.75, stagger: 0.07 },
        "<" // photo er sathe ekoi somoy shuru
      )
      .fromTo(rolesRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(taglineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.45"
      )
      // chips o stagger e - ekta tween e sob
      .fromTo(chips,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.3, stagger: 0.06 },
        "-=0.4"
      )
      .fromTo(buttonsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      )
      // badge sob sesh e ashbe
      .fromTo(badgeRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.2"
      );
    });

    // unmount e sob animation kill - memory leak nai
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="py-10 sm:py-20 lg:py-30 relative overflow-x-hidden">
      <div className="relative py-26 xs:py-30 md:py-20 xl:py-15 2xl:py-18">

        <div
          ref={photoRef}
          style={{ opacity: 0 }}
          className="absolute aspect-4/6 top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            sm:-translate-y-[60%]
            z-20
            w-50 xs:w-60 sm:w-78 md:w-70 lg:w-72 xl:w-80 2xl:w-96"
        >
          <Image
            src={imgPlace}
            priority
            placeholder="blur"
            alt={personal.fullName}
            fill
            sizes="(max-width: 480px) 200px, (max-width: 640px) 240px,
                   (max-width: 768px) 312px, (max-width: 1024px) 280px,
                   (max-width: 1280px) 288px, 384px"
            className="dark:brightness-85 object-cover rounded sm:rounded-xl"
          />
          <div className="absolute inset-0 rounded sm:rounded-xl bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          <div
            ref={badgeRef}
            style={{ opacity: 0 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap"
          >
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-md bg-black/40 border border-white/15 text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-medium tracking-wide">
                Open to work
              </span>
            </div>
          </div>
        </div>

        {/* overflow-hidden rakha hoyeche - letter y:120 theke ashar time scroll bar na ashe */}
        <h1
          data-heading={name}
          className="relative uppercase text-center mx-auto w-fit font-black italic font-audiowide select-none text-black dark:text-white"
          style={{ fontSize: "clamp(60px, 17vw, 280px)" }}
        >
          <span className="flex justify-center">
            {name.split("").map((letter, i) => (
              <span
                key={i}
                ref={(el) => { if (el) lettersRef.current[i] = el; }}
                style={{ display: "inline-block", opacity: 0 }}
              >
                {letter}
              </span>
            ))}
          </span>
        </h1>
      </div>

      <Container className="p-5 sm:p-0 font-audiowide">

        {/* ekta ref e mobile + desktop duto layout - alada alada animate na */}
        <div ref={rolesRef} style={{ opacity: 0 }}>
          <div className="flex lg:hidden items-center justify-between">
            {professionMobile.map((p, i) => (
              <div key={i} className="flex items-center gap-1 sm:gap-2">
                <span className="text-xs hidden sm:block tracking-widest text-accent">0{i + 1}.</span>
                <span className="text-xs sm:hidden tracking-widest text-accent font-bold">/</span>
                <span className="font-bold text-xs xs:text-sm sm:text-lg uppercase tracking-tight">{p}</span>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex flex-wrap items-center justify-between">
            {profession.map((p, i) => (
              <div key={i} className="flex items-center gap-2 xl:gap-3">
                <span className="text-xs tracking-widest text-accent">0{i + 1}.</span>
                <span className="font-bold xl:text-lg uppercase tracking-tight">{p}</span>
              </div>
            ))}
          </div>
        </div>

        <p
          ref={taglineRef}
          style={{ opacity: 0 }}
          className="text-center text-xs sm:text-sm text-secondary/80 mt-4 font-figtree font-normal tracking-normal normal-case"
        >
          Building performant, pixel-perfect UIs with{" "}
          <span className="text-accent font-semibold">Next.js & TypeScript</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {stacks.map((s, i) => (
            <span
              key={i}
              ref={(el) => { if (el) chipsRef.current[i] = el; }}
              style={{ opacity: 0 }}
              className="px-2.5 py-1 text-[10px] sm:text-xs font-medium rounded-lg bg-accent/8 border border-accent/20 text-accent/80 dark:text-[#39ff6a] font-figtree tracking-normal normal-case"
            >
              {s}
            </span>
          ))}
        </div>

        <div
          ref={buttonsRef}
          style={{ opacity: 0 }}
          className="flex gap-3 mt-5 xs:mt-6 justify-center font-figtree"
        >
          <MagneticButton
            href="/image/cv.pdf"
            fillColor="#000000"
            textHoverColor="#39ff6a"
            className="px-5 py-2.5 rounded-full bg-accent text-white text-sm font-semibold"
          >
            Download CV
          </MagneticButton>

          <MagneticButton
            href="#contact"
            fillColor="#39ff6a"
            textHoverColor="#000000"
            className="px-5 py-2.5 rounded-full border border-black/60 dark:border-white/30 text-sm font-semibold"
          >
            Contact Me
          </MagneticButton>
        </div>

      </Container>
    </section>
  );
}