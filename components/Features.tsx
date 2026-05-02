"use client";

import React from "react";
import { MonoLabel } from "./ui/MonoLabel";
import { GlowCard } from "./ui/GlowCard";
import { motion } from "framer-motion";
import { Brain, Zap, ShieldCheck, MessageSquare, FileText, Cpu, ArrowRightLeft } from "lucide-react";

export function Features() {
  const cards = [
    {
      title: "Long-term memory that actually works.",
      desc: "Every conversation is analysed after completion. Important context — preferences, decisions, ongoing work — gets extracted, hashed, embedded, and stored in a local vector DB. Future sessions retrieve the top-5 most relevant memories automatically.",
      icon: Brain,
      iconColor: "text-primary",
      colSpan: "lg:col-span-7",
      accent: "primary" as const,
      inset: (
        <div className="mt-8 flex items-center justify-center gap-2 font-mono text-[11px] text-muted whitespace-nowrap overflow-x-auto scrollbar-hide bg-bg py-4 px-2 rounded-xl border border-border/50">
          <div className="px-3 py-1.5 rounded-lg border border-primary/20 bg-primary-dim">Turn Complete</div>
          <span className="text-primary">→</span>
          <div className="px-3 py-1.5 rounded-lg border border-primary/20 bg-primary-dim">Memory Extractor</div>
          <span className="text-primary">→</span>
          <div className="px-3 py-1.5 rounded-lg border border-primary/20 bg-primary-dim">chromem-go Vector DB</div>
        </div>
      )
    },
    {
      title: "Agentic shell tool use.",
      desc: "The model can request to run shell commands. You approve each one (or enable --yolo to auto-approve). stdout, stderr, and exit codes are fed back to the model.",
      icon: Zap,
      iconColor: "text-purple",
      colSpan: "lg:col-span-5",
      accent: "purple" as const,
      inset: (
        <div className="bg-bg rounded-lg px-4 py-3 font-mono text-[12px] border border-border mt-8">
          <div className="text-muted"><span className="text-yellow-500">⚡</span> tool call: run_shell_command</div>
          <div className="text-text pl-5">{'>'} go build ./...</div>
          <div className="text-muted"><span className="text-green">✅</span> approved</div>
        </div>
      )
    },
    {
      title: "Local by default. Cloud only when necessary.",
      desc: "Your conversation history, memories, and state never leave your machine. Only AI inference calls touch Google's servers — and those are stateless.",
      icon: ShieldCheck,
      iconColor: "text-green",
      colSpan: "lg:col-span-12",
      accent: "green" as const,
      inset: (
        <div className="flex flex-col md:flex-row gap-6 mt-8 w-full max-w-4xl mx-auto">
          <div className="flex-1 bg-bg border border-green/20 rounded-xl px-6 py-5 flex flex-col items-center">
            <span className="font-mono text-[12px] text-green border border-green/20 bg-green-dim px-3 py-1 rounded">YOUR MACHINE</span>
            <div className="font-mono text-[12px] text-dim leading-[2] mt-4 text-center">
              <div>~/.ask-go.db (SQLite)</div>
              <div>~/db (chromem-go vectors)</div>
              <div>System prompt</div>
              <div>Conversation history</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center py-4">
            <ArrowRightLeft size={20} className="text-muted mb-2" strokeWidth={1} />
            <span className="font-mono text-[11px] text-muted text-center leading-tight">inference only<br/>(stateless)</span>
          </div>

          <div className="flex-1 bg-bg border border-purple/20 rounded-xl px-6 py-5 flex flex-col items-center justify-center">
            <span className="font-mono text-[12px] text-purple border border-purple/20 bg-purple-dim px-3 py-1 rounded">GEMINI API</span>
          </div>
        </div>
      )
    },
    {
      title: "Rich interactive REPL.",
      desc: "Full slash-command system: switch models, toggle agent mode, inspect history, change working directory — all without leaving the session.",
      icon: MessageSquare,
      iconColor: "text-primary",
      colSpan: "lg:col-span-5",
      accent: "primary" as const,
      inset: (
        <div className="mt-8 flex flex-wrap gap-2">
          {["/model cheap", "/agent on", "/reason HIGH", "/history 20", "/clear", "/status"].map(cmd => (
            <span key={cmd} className="font-mono text-[11px] text-primary border border-primary/20 bg-primary-dim rounded px-2 py-0.5 inline-block">
              {cmd}
            </span>
          ))}
        </div>
      )
    },
    {
      title: "Streamed markdown rendering.",
      desc: "Not raw chunk spam. Responses render as styled markdown in real-time via glamour. Code blocks, headers, and lists — all formatted.",
      icon: FileText,
      iconColor: "text-purple",
      colSpan: "lg:col-span-4",
      accent: "purple" as const,
    },
    {
      title: "Model presets.",
      desc: "free, cheap, exp — pick the right model for the job with a single flag.",
      icon: Cpu,
      iconColor: "text-green",
      colSpan: "lg:col-span-3",
      accent: "green" as const,
      inset: (
        <div className="mt-8 font-mono text-[11px] text-muted flex flex-col gap-1.5">
          <div><span className="text-text">--model free</span> → gemma-4-26b</div>
          <div><span className="text-text">--model cheap</span> → gemini-flash-lite</div>
          <div><span className="text-text">--model exp</span> → gemini-flash-preview</div>
        </div>
      )
    }
  ];

  return (
    <section id="features" className="py-24 lg:py-32 px-6 lg:px-10 max-w-6xl mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <MonoLabel>Core capabilities</MonoLabel>
        <h2>Everything your terminal<br /><span className="text-primary italic font-light">was missing.</span></h2>
        <p className="section-sub mt-6">Built for developers who live in the terminal and care about privacy.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className={`col-span-1 md:col-span-1 ${card.colSpan}`}
          >
            <GlowCard accent={card.accent} className="p-8 h-full flex flex-col bg-surface hover:shadow-elegant-hover transition-shadow duration-300">
              <card.icon className={`${card.iconColor} mb-6`} size={28} strokeWidth={1.5} aria-hidden="true" />
              <h3 className="font-display text-xl font-medium tracking-tight text-text mb-3">
                {card.title}
              </h3>
              <p className="font-body text-[15px] font-light leading-relaxed text-dim flex-1">
                {card.desc}
              </p>
              {card.inset && <div className="mt-auto">{card.inset}</div>}
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
