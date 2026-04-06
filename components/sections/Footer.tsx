"use client";

import { motion } from "framer-motion";
import { summitContent } from "@/content/summit";

export default function Footer() {
  const { sections, contact, socials, legal, copyright, tagline } = summitContent.footer;

  return (
    <footer id="footer" className="relative py-16 border-t border-[var(--color-surface-light)] bg-[var(--color-black)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-surface)] border border-[var(--color-surface-light)] flex items-center justify-center">
                <span className="text-sm font-display font-extrabold gradient-text">R</span>
              </div>
              <span className="font-display font-bold text-[var(--color-white)] text-sm">
                Reinvent Africa
              </span>
            </div>
            <p className="text-xs text-[var(--color-muted)] font-body mb-4 max-w-xs">
              {tagline}
            </p>
            {/* Contact */}
            <div className="space-y-1">
              <a
                href={`mailto:${contact.email}`}
                className="block text-xs text-[var(--color-muted)] font-body hover:text-[var(--color-primary)] transition-colors duration-300"
              >
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="block text-xs text-[var(--color-muted)] font-body hover:text-[var(--color-primary)] transition-colors duration-300"
              >
                {contact.phone}
              </a>
            </div>
          </motion.div>

          {/* Navigation columns */}
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (sectionIndex + 1) * 0.1 }}
            >
              <h4 className="text-xs font-display font-semibold text-[var(--color-white)] tracking-[0.15em] uppercase mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-[var(--color-muted)] font-body hover:text-[var(--color-primary)] transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-[var(--color-surface-light)] flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          {/* Copyright */}
          <p className="text-xs text-[var(--color-muted)] font-body">
            {copyright}
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                aria-label={social.platform}
                className="w-8 h-8 rounded-full bg-[var(--color-surface)] border border-[var(--color-surface-light)] flex items-center justify-center text-xs text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Legal */}
          <div className="flex items-center gap-4">
            {legal.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs text-[var(--color-muted)] font-body hover:text-[var(--color-primary)] transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
