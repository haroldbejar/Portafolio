import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="text-[--color-text-primary] text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-[-0.04em] mb-6">
      {children}
    </h2>
  );
};
