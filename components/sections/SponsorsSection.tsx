"use client";

import { motion } from "framer-motion";
import { summitContent } from "@/content/summit";
import Button from "@/components/ui/Button";

export default function SponsorsSection() {
  const { sectionLabel, title, description, tiers, cta, ctaHref } = summitContent.sponsors;

  return (
    <section id="sponsors" className="relative py-24 md:py-32">
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
            className="text-sm sm:text-base text-[var(--color-muted)] font-body max-w-xl mx-auto"
          >
            {description}
          </motion.p>
        </div>

        {/* Sponsor tiers */}
        <div className="space-y-8 mb-16">
          {tiers.map((tier, tierIndex) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: tierIndex * 0.15 }}
            >
              <h3 className="text-sm font-display font-semibold text-[var(--color-primary)] tracking-[0.15em] uppercase mb-4 text-center">
                {tier.name}
              </h3>
              <div
                className={`grid gap-4 ${
                  tier.slots === 1
                    ? "grid-cols-1 max-w-xs mx-auto"
                    : tier.slots <= 3
                    ? "grid-cols-1 sm:grid-cols-3 max-w-2xl mx-auto"
                    : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 max-w-4xl mx-auto"
                }`}
              >
                {Array.from({ length: tier.slots }).map((_, slotIndex) => (
                  <div
                    key={slotIndex}
                    className="glass-card h-24 flex items-center justify-center group hover:border-[var(--color-primary)] transition-colors duration-300"
                  >
                    <span className="text-xs text-[var(--color-muted)] font-body tracking-widest uppercase opacity-40 group-hover:opacity-70 transition-opacity duration-300">
                      Your Logo
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Button variant="primary" href={ctaHref} id="sponsors-cta">
            {cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
