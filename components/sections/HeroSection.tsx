"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { summitContent } from "@/content/summit";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const { cyclingVerbs, eventName, tagline, date, location, primaryCta, secondaryCta, description } =
    summitContent.hero;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cyclingVerbs.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [cyclingVerbs.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[var(--color-primary)] opacity-[0.06] blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[var(--color-secondary)] opacity-[0.06] blur-[120px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(26,26,26,0)_0%,_var(--color-black)_70%)]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-white) 1px, transparent 1px), linear-gradient(90deg, var(--color-white) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Event badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase border border-[var(--color-surface-light)] text-[var(--color-muted)] bg-[var(--color-surface)]">
            {location} • {date}
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight mb-2">
            {tagline}
          </h1>

          <div className="h-[1.2em] text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center gradient-text"
              >
                {cyclingVerbs[currentIndex]}?
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Event name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-lg sm:text-xl text-[var(--color-muted)] font-body max-w-xl mx-auto"
        >
          {description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="primary" size="lg" href="#" id="hero-primary-cta">
            {primaryCta}
          </Button>
          <Button variant="secondary" size="lg" href="#why-summit" id="hero-secondary-cta">
            {secondaryCta}
          </Button>
        </motion.div>

        {/* Event name watermark */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 text-xs tracking-[0.3em] uppercase text-[var(--color-muted)] opacity-50"
        >
          {eventName}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-[var(--color-muted)] opacity-40 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-[var(--color-muted)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
