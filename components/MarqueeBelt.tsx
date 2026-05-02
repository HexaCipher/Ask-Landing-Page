"use client";

import React from "react";

export function MarqueeBelt() {
  const items = [
    "Local SQLite",
    "Vector Memory",
    "Shell Agent",
    "Streaming Markdown",
    "Google Gemini",
    "Privacy-First",
    "MIT License",
    "Built in Go",
    "Long-Term Memory",
    "Open Source",
    "Approval Flow",
    "Fast REPL",
  ];

  return (
    <div className="border-y border-border bg-surface2/30 py-4 overflow-hidden" aria-hidden="true">
      <div className="flex whitespace-nowrap">
        {/* We use two identical blocks that animate continuously */}
        <div className="marquee-track flex whitespace-nowrap">
          {items.map((item, i) => (
            <span
              key={`marquee-1-${i}`}
              className="font-body text-[13px] uppercase tracking-[1px] font-medium text-dim px-7 inline-flex items-center gap-2"
            >
              {item}
              <span className="text-primary opacity-50 text-base mx-2">·</span>
            </span>
          ))}
          {/* Repeat for seamless loop */}
          {items.map((item, i) => (
            <span
              key={`marquee-2-${i}`}
              className="font-body text-[13px] uppercase tracking-[1px] font-medium text-dim px-7 inline-flex items-center gap-2"
            >
              {item}
              <span className="text-primary opacity-50 text-base mx-2">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
