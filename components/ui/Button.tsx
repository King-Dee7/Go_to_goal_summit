"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "default" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary)] text-[var(--color-white)] hover:bg-[#C4292A] border-transparent shadow-lg shadow-[var(--color-primary-glow)]",
  secondary:
    "bg-transparent text-[var(--color-secondary)] border-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-black)]",
  ghost:
    "bg-transparent text-[var(--color-white)] border-transparent hover:bg-[var(--color-surface)] hover:border-[var(--color-surface-light)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  variant = "primary",
  size = "default",
  href,
  onClick,
  children,
  className,
  id,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full border font-semibold font-body tracking-wide transition-colors duration-300 cursor-pointer select-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        id={id}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      id={id}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
}
