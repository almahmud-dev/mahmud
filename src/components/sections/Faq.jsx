"use client";
import React, { useState } from "react";
import Container from "@/src/components/ui/Container";
import SectionHeader from "@/src/components/ui/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in the MERN stack (MongoDB, Express, React, Node.js) along with Next.js and Tailwind CSS for building high-performance web applications. My focus is on creating scalable architectures with editorial-grade user interfaces.",
  },
  {
    question: "Do you take on freelance projects?",
    answer:
      "Yes, I am available for freelance opportunities ranging from single-page landing pages to complex full-stack web applications. I prefer projects that challenge the status quo of digital experiences.",
  },
  {
    question: "How can we start a project together?",
    answer:
      "You can reach out via the contact form or email me directly. I usually respond within 24 hours to discuss project details, technical requirements, and potential timelines.",
  },
  {
    question: "Are you open to full-time remote positions?",
    answer:
      "Absolutely! I am always looking for exciting opportunities to contribute to innovative teams globally. I thrive in asynchronous environments that value code quality and design precision.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Timeline varies based on project complexity. A simple landing page can be done in 1–2 weeks, while a full-stack application typically takes 4–8 weeks. I always communicate clearly about timelines upfront.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (i) => setActiveIndex(activeIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="relative bg-white dark:bg-[#080810]"
    >
      <Container className="max-w-3xl!">
        <SectionHeader text="FAQs" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-secondary/60 text-sm max-w-md mx-auto">
            Transparent insights into my process, technical stack, and
            availability.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.5 }}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-accent/40 shadow-sm shadow-accent/5"
                    : "border-black/8 dark:border-white/8"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className={`w-full flex justify-between items-center px-5 sm:px-6 py-4 sm:py-5 text-left transition-all duration-300 ${
                    isOpen
                      ? "bg-accent/6 dark:bg-accent/10"
                      : "bg-[#f8f7ff] dark:bg-white/4 hover:bg-accent/4 dark:hover:bg-white/6"
                  }`}
                >
                  <span
                    className={`font-semibold text-sm sm:text-base pr-4 transition-colors duration-200 ${isOpen ? "text-accent" : ""}`}
                  >
                    {item.question}
                  </span>

                  {/* Icon toggle: + → − */}
                  <motion.span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      isOpen
                        ? "bg-accent text-white border-accent"
                        : "bg-transparent border-black/15 dark:border-white/15 text-secondary hover:border-accent hover:text-accent"
                    }`}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {isOpen ? (
                        <motion.span
                          key="minus"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiMinus className="text-sm" />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="plus"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FiPlus className="text-sm" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden bg-white dark:bg-[#080810]"
                    >
                      <motion.p
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 sm:px-6 py-4 text-sm text-secondary leading-relaxed border-t border-black/5 dark:border-white/5"
                      >
                        {item.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-12 py-7 px-6 sm:px-10 rounded-2xl bg-accent/6 dark:bg-accent/10 border border-accent/20 flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div className="text-center sm:text-left">
            <h4 className="text-xl font-bold">Still have questions?</h4>
            <p className="text-secondary/60 text-sm mt-1">
              I'm just a message away from starting our next project.
            </p>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-accent text-white font-bold px-7 py-3.5 rounded-full text-sm hover:shadow-lg hover:shadow-accent/30 transition-shadow whitespace-nowrap"
          >
            Drop a Message →
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
}
