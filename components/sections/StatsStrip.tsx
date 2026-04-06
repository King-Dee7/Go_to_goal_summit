"use client";

import { motion } from "framer-motion";
import { summitContent } from "@/content/summit";

export default function StatsStrip() {
  const { stats, statsDescription } = summitContent;

  return (
    <section id="stats" className="relative py-16 border-y border-[var(--color-surface-light)]">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-glow)] via-transparent to-[var(--color-secondary-glow)] opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-[var(--color-muted)] font-body text-sm sm:text-base mb-12 max-w-2xl mx-auto"
        >
          {statsDescription}
        </motion.p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm tracking-[0.15em] uppercase text-[var(--color-muted)] font-body">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
