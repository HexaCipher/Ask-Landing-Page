import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  accent?: "cyan" | "purple" | "green" | "primary";
}

export function GlowCard({ 
  children, 
  className, 
  accent = "primary", 
  ...props 
}: GlowCardProps) {
  const accentClasses = {
    cyan: "hover:border-cyan/30 hover:shadow-[0_4px_24px_rgba(59,130,246,0.12)]",
    purple: "hover:border-purple/30 hover:shadow-[0_4px_24px_rgba(99,102,241,0.12)]",
    green: "hover:border-green/30 hover:shadow-[0_4px_24px_rgba(16,185,129,0.12)]",
    primary: "hover:border-primary/30 hover:shadow-[0_4px_24px_rgba(79,70,229,0.12)]",
  };

  return (
    <div
      className={cn(
        "bg-surface border border-border rounded-2xl transition-all duration-300 group shadow-sm",
        accentClasses[accent],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
