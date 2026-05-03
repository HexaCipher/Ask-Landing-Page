"use client";

import React from "react";
import { motion } from "framer-motion";
import { LaptopTerminalHero } from "./LaptopTerminalHero";

export function Hero() {
  return (
    <section id="home" className="relative text-center pt-36 pb-24 px-6 overflow-hidden bg-bg">
      {/* Background glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[700px] pointer-events-none bg-[radial-gradient(ellipse,rgba(79,70,229,0.04)_0%,rgba(99,102,241,0.02)_45%,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-surface2 border border-border rounded-full px-4 py-2 mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-[12px] text-muted tracking-wide">v0.1 · Open Source · MIT Licensed</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-[clamp(42px,6vw,72px)] font-medium leading-[1.1] tracking-tight text-text"
        >
          Your terminal,
          <br />
          <span className="text-primary italic font-light">now thinks.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-lg text-dim max-w-2xl mx-auto font-light leading-relaxed mt-6"
        >
          Local-first agentic CLI built in Go. Long-term memory, shell tool use,
          and streaming AI — all with your data staying on your machine.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <a
            href="#install"
            className="w-full sm:w-auto bg-primary text-white font-body text-[15px] font-medium px-8 py-3.5 rounded-full shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            Start Learning Now →
          </a>
          <a
            href="https://github.com/HexaCipher/efos-hackathon"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border border-border2 text-dim text-[15px] font-body font-medium px-8 py-3.5 rounded-full hover:bg-surface2 hover:text-text transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border2"
          >
            See How It Works
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative z-10 mt-0 w-full flex justify-center"
      >
        <LaptopTerminalHero />
      </motion.div>
    </section>
  );
}
