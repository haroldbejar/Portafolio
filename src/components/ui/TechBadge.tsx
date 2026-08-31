import React from "react";

interface TechBadgeProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const TechBadge = ({ icon, children }: TechBadgeProps) => {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-[--color-bg-surface] text-[--color-text-secondary] border border-[--color-border] transition-colors">
      {icon}
      {children}
    </span>
  );
};
