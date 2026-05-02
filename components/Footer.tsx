import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg py-12 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center">
            <Image src="/ask_logo.png" alt="Ask CLI Logo" width={120} height={40} className="w-24 h-auto object-contain" />
            <span className="font-body font-light text-[14px] text-dim ml-3 hidden sm:inline-block">Cloud intelligence. Local control.</span>
          </div>
        </div>

        {/* Center Links */}
        <nav className="flex flex-wrap justify-center gap-6">
          <a href="https://github.com/real-zephex/ask-go" target="_blank" rel="noopener noreferrer" className="font-body text-[14px] text-muted hover:text-primary transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded">GitHub</a>
          <a href="https://github.com/real-zephex/ask-go/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="font-body text-[14px] text-muted hover:text-primary transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded">MIT License</a>
          <a href="https://github.com/real-zephex/ask-go/issues" target="_blank" rel="noopener noreferrer" className="font-body text-[14px] text-muted hover:text-primary transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded">Issues</a>
          <a href="https://github.com/real-zephex/ask-go/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="font-body text-[14px] text-muted hover:text-primary transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded">Contributing</a>
        </nav>

        {/* Right */}
        <div className="text-center md:text-right">
          <span className="font-body font-light text-[12px] text-muted block sm:inline">Built with Go · Powered by Gemini · Stored locally</span>
        </div>

      </div>
    </footer>
  );
}
