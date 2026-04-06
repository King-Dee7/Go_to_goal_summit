"use client";

import { motion } from "framer-motion";
import { summitContent } from "@/content/summit";
import Button from "@/components/ui/Button";

export default function SpeakersSection() {
  const { sectionLabel, title, description, placeholders, nominateCta, nominateDescription } =
    summitContent.speakers;

  return (
    <section id="speakers" className="relative py-24 md:py-32">
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
            className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[var(--color-white)] mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-[var(--color-muted)] font-body max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>

        {/* Speaker cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {placeholders.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card p-6 text-center group"
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[var(--color-surface-light)] border-2 border-[var(--color-surface-light)] group-hover:border-[var(--color-primary)] transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[var(--color-muted)] opacity-40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              <h3 className="text-base font-display font-bold text-[var(--color-white)] mb-1">
                {speaker.name}
              </h3>
              <p className="text-xs text-[var(--color-muted)] font-body">
                {speaker.role}
              </p>
              <p className="text-xs text-[var(--color-primary)] font-body mt-1">
                {speaker.company}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Nominate CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-[var(--color-muted)] font-body mb-4">
            {nominateDescription}
          </p>
          <Button variant="secondary" href="#" id="speakers-nominate-cta">
            {nominateCta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
