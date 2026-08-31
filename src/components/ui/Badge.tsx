import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, className = "" }: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[--border] bg-[rgba(15,21,34,0.85)] px-3 py-1 text-[10px] font-medium tracking-[0.02em] text-[--color-text-secondary] transition-colors ${className}`}
    >
      {children}
    </span>
  );
};
