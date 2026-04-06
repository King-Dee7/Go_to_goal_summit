"use client";

import { motion } from "framer-motion";
import { summitContent } from "@/content/summit";

export default function WhySummitSection() {
  const { sectionLabel, title, paragraphs, signature } = summitContent.whySummit;

  return (
    <section id="why-summit" className="relative py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="section-label block mb-6"
        >
          {sectionLabel}
        </motion.span>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-12 text-[var(--color-white)] leading-tight"
        >
          {title}
        </motion.h2>

        {/* Editorial letter */}
        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              className="text-base sm:text-lg text-[var(--color-muted)] font-body leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Signature */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 text-sm text-[var(--color-primary)] font-display font-semibold tracking-wide"
        >
          {signature}
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 h-px bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-surface-light)] to-transparent origin-left"
        />
      </div>
    </section>
  );
}
