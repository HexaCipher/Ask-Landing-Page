"use client";

import React from "react";
import { Terminal, Bot, Database } from "lucide-react";
import { MonoLabel } from "./ui/MonoLabel";
import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      num: "1",
      icon: Terminal,
      title: "Install in 30 seconds.",
      desc: "Clone, build, and drop the binary in your PATH. No npm, no pip, no Docker. Pure Go.",
      code: `git clone https://github.com/HexaCipher/efos-hackathon.git
cd ask-go && go build -o ask
sudo mv ask /usr/local/bin/
export GEMINI_API_KEY="your_key"`
    },
    {
      num: "2",
      icon: Bot,
      title: "Chat naturally or go agentic.",
      desc: "Ask questions, pipe in files, get streamed markdown back. Enable agent mode for shell tool use with per-command approval.",
      code: `ask "What is a goroutine?"
cat main.go | ask "Explain this code"
ask --chat --agent --model cheap`
    },
    {
      num: "3",
      icon: Database,
      title: "It remembers what matters.",
      desc: "After every turn, key context is extracted and stored in a local vector DB. Next time you ask, the top-5 relevant memories are injected automatically.",
      code: `🧠 memory: saved 2 item(s)

# Next session — automatically injected:
# "User prefers Go modules over GOPATH"
# "Working on CLI refactor in ~/projects/ask"`
    }
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 px-6 lg:px-10 max-w-6xl mx-auto">
      <div>
        <MonoLabel>under the hood</MonoLabel>
        <h2>Simple to use.<br /><span className="text-cyan">Powerful underneath.</span></h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="flex flex-col"
          >
            <div className="font-mono text-[11px] text-muted border border-border rounded-full w-7 h-7 flex items-center justify-center mb-5">
              {step.num}
            </div>
            <step.icon size={32} className="text-text mb-6" aria-hidden="true" />
            <h3 className="font-display text-xl font-bold tracking-[-0.5px] text-text mb-3">
              {step.title}
            </h3>
            <p className="font-body text-base font-light leading-relaxed text-dim mb-6 flex-1">
              {step.desc}
            </p>
            <div className="bg-surface border border-border rounded-xl px-5 py-4 font-mono text-[12px] text-cyan whitespace-pre overflow-x-auto scrollbar-hide mt-auto leading-relaxed shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
              {step.code}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
