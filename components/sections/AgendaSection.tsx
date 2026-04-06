"use client";

import { motion } from "framer-motion";
import { summitContent } from "@/content/summit";
import Button from "@/components/ui/Button";

export default function AgendaSection() {
  const { sectionLabel, title, formatTags, featuredPanel, comingSoon } = summitContent.agenda;

  return (
    <section id="agenda" className="relative py-24 md:py-32 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="section-label block mb-4"
          >
            {sectionLabel}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[var(--color-white)]"
          >
            {title}
          </motion.h2>
        </div>

        {/* Format tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {formatTags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.1em] uppercase border border-[var(--color-surface-light)] text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors duration-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Featured panel card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-8 md:p-10 max-w-3xl mx-auto mb-12 relative overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)] opacity-[0.06] blur-[60px] rounded-full" />

          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-[0.1em] uppercase bg-[var(--color-primary)] text-[var(--color-white)] mb-4">
            {featuredPanel.tag}
          </span>

          <h3 className="text-xl sm:text-2xl font-display font-bold text-[var(--color-white)] mb-3">
            {featuredPanel.title}
          </h3>

          <p className="text-sm text-[var(--color-muted)] font-body leading-relaxed mb-6">
            {featuredPanel.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {featuredPanel.speakers.map((speaker, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-body text-[var(--color-muted)] border border-[var(--color-surface-light)]"
              >
                <span className="w-5 h-5 rounded-full bg-[var(--color-surface-light)] flex items-center justify-center text-[8px]">
                  ?
                </span>
                {speaker}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Coming soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-[var(--color-muted)] font-body text-sm mb-6">
            {comingSoon.message}
          </p>
          <Button variant="secondary" href="#" id="agenda-notify-cta">
            {comingSoon.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
