"use client";

import { motion } from "framer-motion";
import { summitContent } from "@/content/summit";

export default function AudienceSection() {
  const { sectionLabel, title, personas } = summitContent.audience;

  return (
    <section id="audience" className="relative py-24 md:py-32 bg-[var(--color-surface)]">
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

        {/* Persona cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card p-6 group cursor-default"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {persona.emoji}
                </span>
                <div>
                  <h3 className="text-lg font-display font-bold text-[var(--color-white)] mb-2">
                    {persona.title}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] font-body leading-relaxed">
                    {persona.hook}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
