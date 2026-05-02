import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MonoLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function MonoLabel({ children, className, ...props }: MonoLabelProps) {
  return (
    <span 
      className={cn("font-sans text-[11px] uppercase tracking-[1.5px] font-medium text-dim block mb-3 opacity-80", className)} 
      {...props}
    >
      {children}
    </span>
  );
}
