import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  children,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[--accent-primary]/60 focus:ring-offset-2 focus:ring-offset-[#050914]";

  if (variant === "primary") {
    return (
      <button
        className={`${baseClasses} bg-[--accent-primary] text-white shadow-[0_10px_30px_rgba(59,79,224,0.35)] hover:bg-[--color-accent-primary-hover] active:translate-y-px ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`${baseClasses} border border-[--border] bg-[rgba(17,24,39,0.45)] text-[--color-text-primary] hover:bg-[--color-bg-surface-alt] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
