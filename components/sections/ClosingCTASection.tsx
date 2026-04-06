"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { summitContent } from "@/content/summit";
import Button from "@/components/ui/Button";

export default function ClosingCTASection() {
  const { title, subtitle, primaryCta, newsletterTitle, newsletterPlaceholder, newsletterCta } =
    summitContent.closingCta;

  const [email, setEmail] = useState("");

  return (
    <section id="closing-cta" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--color-primary)] opacity-[0.04] blur-[200px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[var(--color-secondary)] opacity-[0.03] blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold text-[var(--color-white)] mb-6"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base sm:text-lg text-[var(--color-muted)] font-body mb-10 max-w-xl mx-auto"
        >
          {subtitle}
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <Button variant="primary" size="lg" href="#" id="closing-primary-cta">
            {primaryCta}
          </Button>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px bg-[var(--color-surface-light)] max-w-sm mx-auto mb-16"
        />

        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-sm text-[var(--color-muted)] font-body mb-4">
            {newsletterTitle}
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={newsletterPlaceholder}
              className="flex-1 px-4 py-3 rounded-full bg-[var(--color-surface)] border border-[var(--color-surface-light)] text-[var(--color-white)] text-sm font-body placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-300"
              id="newsletter-email-input"
            />
            <Button variant="secondary" id="newsletter-submit-cta">
              {newsletterCta}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
