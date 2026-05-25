"use client";
import React from "react";
import Container from "@/src/components/ui/Container";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa6";
import Logo from "@/public/svg/Logo";
import { motion } from "framer-motion";
import { personal } from "@/src/data/personal";

const socials = [
  { icon: <FaGithub />, href: personal.social.github, label: "GitHub" },
  { icon: <FaLinkedinIn />, href: personal.social.linkedin, label: "LinkedIn" },
  { icon: <FaEnvelope />, href: personal.social.email, label: "Email" },
  { icon: <FaWhatsapp />, href: personal.social.whatsapp, label: "WhatsApp" },
];

const navLinks = ["About", "Skills", "Projects", "Testimonials", "Contact"];

export default function Footer() {
  return (
    <footer className="border-t border-black/8 dark:border-white/8 bg-white dark:bg-[#080810]">
      <Container>
        <div className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Logo className="w-[70px] md:w-[60px] h-auto" />
            <p className="text-sm text-secondary/80 leading-relaxed max-w-xs">
              Frontend developer who enjoys turning ideas into clean, responsive interfaces. Focused on building experiences that feel smooth and just work using Next.js, React, and Tailwind CSS.
            </p>
            <p className="text-xs text-accent font-semibold">{personal.email}</p>
          </div>

          {/* Nav */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-secondary">Navigation</h3>
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
            <h3 className="text-xs font-bold uppercase tracking-widest text-secondary">Connect</h3>
            <div className="flex items-center gap-2.5">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ duration: 0.15 }}
                  className="p-2.5 rounded-full border border-black/8 dark:border-white/8 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-secondary/80 leading-relaxed">
              Open for freelance projects<br />and full-time remote positions.
            </p>
          </div>
        </div>

        <div className="border-t border-black/8 dark:border-white/8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-secondary/80">
          <p>© {new Date().getFullYear()} {personal.fullName}. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS & Framer Motion</p>
        </div>
      </Container>
    </footer>
  );
}
