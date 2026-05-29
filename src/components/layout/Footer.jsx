"use client";
import { useRef, useEffect } from "react";
import Container from "@/src/components/ui/Container";
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa6";
import Logo from "@/public/svg/Logo";
// Framer Motion remove kora hoyeche, GSAP use korা হচ্ছে
import gsap from "gsap";
import { personal } from "@/src/data/personal";

const socials = [
  { icon: <FaGithub />, href: personal.social.github, label: "GitHub" },
  { icon: <FaLinkedinIn />, href: personal.social.linkedin, label: "LinkedIn" },
  { icon: <FaEnvelope />, href: personal.social.email, label: "Email" },
  { icon: <FaWhatsapp />, href: personal.social.whatsapp, label: "WhatsApp" },
];

const navLinks = ["About", "Skills", "Projects", "Testimonials", "Contact"];

// ---- Social Icon Component ----
// Alada component banano hoyeche jate each icon er ref alag thake
// JSX file e TypeScript type annotation rakha jabena, tai shudhu props newa hoyeche
function SocialIcon({ icon, href, label }) {
  const iconRef = useRef(null);

  useEffect(() => {
    const el = iconRef.current;
    if (!el) return;

    // Mobile check - mobile e simplified animation, PC te full effect
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const handleMouseEnter = () => {
      // willChange set kora hover shuru howar shathe shathe
      el.style.willChange = "transform";

      if (isMobile) {
        // Mobile e shudhu scale, y movement noy - performance er jonno
        gsap.to(el, {
          scale: 1.1,
          duration: 0.15,
          ease: "power2.out",
          overwrite: true,
        });
      } else {
        // PC te full y + scale animation
        gsap.to(el, {
          y: -3,
          scale: 1.1,
          duration: 0.15,
          ease: "power2.out",
          overwrite: true,
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        y: 0,
        scale: 1,
        duration: 0.2,
        ease: "power2.inOut",
        overwrite: true,
        onComplete: () => {
          // Animation shesh hoile willChange reset - memory leak avoid korte
          el.style.willChange = "auto";
        },
      });
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup - event listener remove kora must, noyto memory leak hobe
    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
      // Component unmount e willChange reset
      el.style.willChange = "auto";
    };
  }, []); // Empty dependency - ekbar mount e run korbe, eta thikei ache

  return (
    <a
      ref={iconRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      // className exactly same rakha hoyeche - CSS e haat deoa jacche na rule anujaye
      className="p-2.5 rounded-full border border-black/8 dark:border-white/8 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300"
    >
      {icon}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-black/8 dark:border-white/8 bg-white dark:bg-[#080810]">
      <Container>
        <div className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Logo
              className="w-[70px] md:w-[60px] h-auto"
              accentColor="var(--color-accent)"
            />
            <p className="text-sm text-secondary/80 leading-relaxed max-w-xs">
              Frontend developer who enjoys turning ideas into clean, responsive
              interfaces. Focused on building experiences that feel smooth and
              just work using Next.js, React, and Tailwind CSS.
            </p>
            <a href={personal.emailLink}>
              <p className="text-xs text-accent font-semibold">
                {personal.email}
              </p>
            </a>
          </div>

          {/* Nav */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-secondary">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-secondary/80 hover:text-accent transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-secondary">
              Connect
            </h3>
            <div className="flex items-center gap-2.5">
              {/* Har ekta social icon er jonno alada SocialIcon component - ref isolation er jonno */}
              {socials.map((s, i) => (
                <SocialIcon
                  key={i}
                  icon={s.icon}
                  href={s.href}
                  label={s.label}
                />
              ))}
            </div>
            <p className="text-xs text-secondary/80 leading-relaxed">
              Open for freelance projects
              <br />
              and full-time remote positions.
            </p>
          </div>
        </div>

        <div className="border-t border-black/8 dark:border-white/8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-secondary/80">
          <p>
            © {new Date().getFullYear()} {personal.fullName}. All rights
            reserved.
          </p>
          {/* Text update - Framer Motion er jaygay GSAP */}
          <p>Built with Next.js, Tailwind CSS & GSAP</p>
        </div>
      </Container>
    </footer>
  );
}