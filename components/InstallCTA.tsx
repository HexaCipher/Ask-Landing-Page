"use client";

import React, { useState } from "react";
import { MonoLabel } from "./ui/MonoLabel";
import { Copy, Check, Star, BookOpen } from "lucide-react";

export function InstallCTA() {
  const [copied, setCopied] = useState(false);
  const installCmd = "git clone https://github.com/HexaCipher/efos-hackathon.git && cd ask-go && go build -o ask";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(installCmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <section id="install" className="relative text-center py-32 px-6 overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,204,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <MonoLabel className="justify-center">get started</MonoLabel>
        
        <h2 className="hero-h2 mt-3">
          Start in 30 seconds.
          <br /><span className="text-cyan">Your terminal won&apos;t be the same.</span>
        </h2>
        
        <p className="section-sub mx-auto mt-5">
          Open source. MIT licensed. No account needed. No cloud lock-in.
        </p>

        {/* Copyable block */}
        <div className="bg-surface border border-border rounded-xl px-6 py-4 font-mono text-[14px] text-cyan max-w-2xl mx-auto mt-10 flex items-center justify-between shadow-[0_4px_24px_rgba(0,0,0,0.5)] group hover:border-border2 transition-all">
          <code className="text-left flex-1 overflow-x-auto whitespace-nowrap pr-4 scrollbar-hide">
            {installCmd}
          </code>
          <button 
            onClick={handleCopy}
            className="flex-shrink-0 p-2 rounded hover:bg-surface2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50"
            aria-label="Copy install command"
          >
            {copied ? <Check size={20} className="text-green" /> : <Copy size={20} className="text-muted group-hover:text-cyan transition-colors" />}
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
          <a
            href="https://github.com/HexaCipher/efos-hackathon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-surface2 border border-border2 text-text text-[14px] font-semibold px-6 py-3.5 rounded-lg hover:bg-surface hover:border-cyan/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50"
          >
            <Star size={18} className="text-cyan" />
            Star on GitHub
          </a>
          <a
            href="https://github.com/HexaCipher/efos-hackathon#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-border2 text-dim text-[14px] px-6 py-3.5 rounded-lg hover:bg-surface2 hover:text-text transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50"
          >
            <BookOpen size={18} />
            Read the Docs
          </a>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-14">
          <div className="flex flex-col items-center">
            <span className="font-display text-3xl font-extrabold text-cyan">Go</span>
            <span className="font-mono text-[11px] uppercase text-muted mt-1">Built-in</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display text-3xl font-extrabold text-cyan">MIT</span>
            <span className="font-mono text-[11px] uppercase text-muted mt-1">Licensed</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display text-3xl font-extrabold text-cyan">Local-first</span>
            <span className="font-mono text-[11px] uppercase text-muted mt-1">Architecture</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display text-3xl font-extrabold text-cyan">Memory</span>
            <span className="font-mono text-[11px] uppercase text-muted mt-1">Powered</span>
          </div>
        </div>
      </div>
    </section>
  );
}
