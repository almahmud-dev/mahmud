"use client";
import React from "react";
import Container from "@/src/components/ui/Container";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { personal } from "@/src/data/personal";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const links = [
  {
    id: 1, label: "Email", icon: <FaEnvelope />,
    name: personal.email, href: `mailto:${personal.email}`,
  },
  {
    id: 2, label: "GitHub", icon: <FaGithub />,
    name: `github.com/${personal.github}`, href: `https://github.com/${personal.github}`,
  },
  {
    id: 3, label: "LinkedIn", icon: <FaLinkedinIn />,
    name: `in/${personal.linkedin}`, href: `https://linkedin.com/in/${personal.linkedin}`,
  },
  {
    id: 4, label: "Phone", icon: <FaPhone />,
    name: personal.phone, href: `tel:+88${personal.phone}`,
  },
  {
    id: 5, label: "WhatsApp", icon: <FaWhatsapp />,
    name: "WhatsApp", href: `https://wa.me/${personal.whatsapp}`,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#f8f7ff] dark:bg-[#0c0b18]">
      <Container>
        <SectionHeader text="Contact Me" colorWord="Me" />

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-sm text-secondary/60 mb-12 max-w-md mx-auto"
        >
          Have a project in mind or just want to say hi? Let's connect.
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Social links */}
          <div className="flex flex-col gap-2.5">
            {links.map((link, i) => (
              <motion.a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="group flex items-center justify-between px-4 py-3 rounded-xl bg-white dark:bg-white/4 border border-black/8 dark:border-white/8 hover:border-accent/40 hover:bg-accent/4 active:scale-[0.99] transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent text-sm">{link.icon}</div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] uppercase tracking-wider text-secondary/40 font-semibold">{link.label}</span>
                    <span className="text-xs text-secondary group-hover:text-accent transition-colors duration-200 font-medium">{link.name}</span>
                  </div>
                </div>
                <FaArrowRightLong className="text-[10px] opacity-30 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 -rotate-45 text-accent" />
              </motion.a>
            ))}
          </div>

          {/* Contact form */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 rounded-2xl border border-black/8 dark:border-white/8 bg-white dark:bg-white/4 p-6 md:p-8"
          >
            <h3 className="text-base font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Send Message
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                {["Your Name", "Your Email"].map((ph, i) => (
                  <input
                    key={i}
                    type={i === 1 ? "email" : "text"}
                    placeholder={ph}
                    className="w-full px-4 py-3 rounded-xl bg-[#f8f7ff] dark:bg-white/5 border border-black/8 dark:border-white/8 outline-none focus:border-accent focus:ring-2 focus:ring-accent/12 transition-all duration-300 text-sm"
                  />
                ))}
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-xl bg-[#f8f7ff] dark:bg-white/5 border border-black/8 dark:border-white/8 outline-none focus:border-accent focus:ring-2 focus:ring-accent/12 transition-all duration-300 text-sm"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-xl bg-[#f8f7ff] dark:bg-white/5 border border-black/8 dark:border-white/8 outline-none focus:border-accent focus:ring-2 focus:ring-accent/12 resize-none transition-all duration-300 text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3.5 rounded-xl bg-accent text-white font-semibold text-sm hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
              >
                Send Message →
              </motion.button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
