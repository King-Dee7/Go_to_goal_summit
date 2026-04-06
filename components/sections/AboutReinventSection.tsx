"use client";

import { motion } from "framer-motion";
import { summitContent } from "@/content/summit";

export default function AboutReinventSection() {
  const { sectionLabel, title, description, contact } = summitContent.aboutReinvent;

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[var(--color-surface)]">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[var(--color-primary)] opacity-[0.03] blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="section-label block mb-4"
        >
          {sectionLabel}
        </motion.span>

        {/* Logo placeholder area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-[var(--color-surface-light)] border border-[var(--color-surface-light)] flex items-center justify-center">
            <span className="text-2xl font-display font-extrabold gradient-text">R</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[var(--color-white)] mb-6"
        >
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm sm:text-base text-[var(--color-muted)] font-body leading-relaxed max-w-2xl mx-auto mb-8"
        >
          {description}
        </motion.p>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-[var(--color-muted)] font-body"
        >
          <a
            href={`mailto:${contact.email}`}
            className="hover:text-[var(--color-primary)] transition-colors duration-300"
          >
            {contact.email}
          </a>
          <span className="hidden sm:block text-[var(--color-surface-light)]">|</span>
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="hover:text-[var(--color-primary)] transition-colors duration-300"
          >
            {contact.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
