"use client";

import React from "react";
import { MonoLabel } from "./ui/MonoLabel";
import { Clock, Brain, CloudLightning } from "lucide-react";
import { motion } from "framer-motion";
import { GlowCard } from "./ui/GlowCard";

export function Architecture() {
  const layers = [
    {
      title: "Short-Term History",
      subtitle: "~/.ask-go.db",
      body: "Last 20 messages stored in SQLite. Sent as context on every query. Stays entirely on your machine.",
      pill: "SQLite · Local",
      icon: Clock,
      color: "text-cyan",
      borderColor: "border-cyan/20",
      accent: "cyan" as const,
    },
    {
      title: "Long-Term Memory",
      subtitle: "~/db (chromem-go)",
      body: "After each turn, an extraction pass decides what to remember. Memories are hashed, embedded, and stored in a persistent vector DB. Top-5 retrieved per query.",
      pill: "chromem-go · Local · Vector",
      icon: Brain,
      color: "text-purple",
      borderColor: "border-purple/20",
      accent: "purple" as const,
    },
    {
      title: "AI Inference",
      subtitle: "Google Gemini API",
      body: "Only inference calls leave your machine. Stateless. No conversation history is stored server-side. Your GEMINI_API_KEY is read from env, never logged.",
      pill: "Gemini · Remote · Stateless",
      icon: CloudLightning,
      color: "text-green",
      borderColor: "border-green/20",
      accent: "green" as const,
    }
  ];

  return (
    <section id="architecture" className="bg-surface py-24 lg:py-32 w-full">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div>
          <MonoLabel>architecture</MonoLabel>
          <h2>Three layers.<br /><span className="text-cyan">Zero surprises.</span></h2>
          <p className="section-sub max-w-md mt-4">
            Designed so you always know where your data is and what&apos;s talking to the internet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
          {layers.map((layer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlowCard accent={layer.accent} className="p-8 h-full flex flex-col items-start relative overflow-hidden group">
                <div className={`absolute -right-10 -top-10 w-32 h-32 blur-3xl opacity-20 rounded-full transition-opacity group-hover:opacity-40 ${
                  layer.accent === 'cyan' ? 'bg-cyan' : layer.accent === 'purple' ? 'bg-purple' : 'bg-green'
                }`} />
                <layer.icon size={32} className={`${layer.color} mb-6 relative z-10`} aria-hidden="true" />
                <h3 className="font-display text-xl font-bold tracking-[-0.5px] text-text mb-1 relative z-10">
                  {layer.title}
                </h3>
                <div className={`font-mono text-[13px] ${layer.color} mb-4 relative z-10`}>
                  {layer.subtitle}
                </div>
                <p className="font-body text-base font-light leading-relaxed text-dim mb-8 flex-1 relative z-10">
                  {layer.body}
                </p>
                <div className={`mt-auto inline-flex items-center font-mono text-[11px] text-muted border ${layer.borderColor} rounded-full px-3 py-1.5 relative z-10`}>
                  {layer.pill}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border border-cyan/20 bg-cyan/5 rounded-2xl px-8 py-6 mt-8 text-center font-mono text-sm text-cyan shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
        >
          &quot;Everything except model inference is local by architecture — not by policy.&quot;
        </motion.div>
      </div>
    </section>
  );
}
