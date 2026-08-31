import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
}

export const SectionLabel = ({ children }: SectionLabelProps) => {
  return (
    <p className="mb-6 inline-flex items-center rounded-full border border-[--border] bg-[rgba(17,24,39,0.4)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[--color-accent-primary]">
      {children}
    </p>
  );
};
