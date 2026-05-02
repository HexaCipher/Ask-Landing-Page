"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CopyBlockProps {
  label: string;
  command: string;
  className?: string;
}

export function CopyBlock({ label, command, className }: CopyBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <div 
      className={cn(
        "bg-surface border border-border rounded-xl px-5 py-4 flex items-start justify-between gap-4 hover:border-primary/30 hover:shadow-elegant-hover transition duration-300 group",
        className
      )}
    >
      <div className="flex flex-col text-left">
        <span className="font-body text-[14px] font-medium text-dim mb-1.5">{label}</span>
        <code className="font-mono text-[14px] text-text break-all bg-surface2/50 px-2 py-1 -ml-2 rounded-md">{command}</code>
      </div>
      <button 
        onClick={handleCopy}
        aria-label="Copy command"
        className="text-muted group-hover:text-primary transition cursor-pointer flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded p-1 mt-1"
      >
        {copied ? <Check size={18} className="text-green" /> : <Copy size={18} />}
      </button>
    </div>
  );
}
