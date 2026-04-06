"use client";

import { motion } from "framer-motion";
import { summitContent } from "@/content/summit";

export default function ValuePillarsSection() {
  const { sectionLabel, title, pillars } = summitContent.valuePillars;

  return (
    <section id="value-pillars" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-secondary)] opacity-[0.03] blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
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

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card p-8 group cursor-default"
            >
              {/* Icon */}
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-display font-bold text-[var(--color-white)] mb-3">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--color-muted)] font-body leading-relaxed">
                {pillar.description}
              </p>

              {/* Accent border on hover */}
              <div className="mt-6 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
