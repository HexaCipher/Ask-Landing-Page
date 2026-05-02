"use client";

import React from "react";
import { MonoLabel } from "./ui/MonoLabel";
import { CopyBlock } from "./ui/CopyBlock";

export function CommandsShowcase() {
  const commands = [
    { label: "Basic question", cmd: 'ask "What is a goroutine?"' },
    { label: "Pipe code in", cmd: 'cat main.go | ask "Explain this"' },
    { label: "Pipe logs", cmd: 'tail -n 50 app.log | ask --model cheap "Summarise errors"' },
    { label: "Chat REPL", cmd: "ask --chat" },
    { label: "Agent mode", cmd: "ask --chat --agent" },
    { label: "Auto-approve agent", cmd: "ask --chat --agent --yolo" },
    { label: "Use cheaper model", cmd: 'ask --model cheap "Quick question"' },
    { label: "High reasoning", cmd: 'ask --reason HIGH "Design a queue worker"' },
    { label: "System prompt", cmd: "ask --chat --system ./prompts/mentor.txt" },
    { label: "Shell completion (zsh)", cmd: "ask completion zsh > ~/.zfunc/_ask" },
  ];

  return (
    <section id="commands" className="py-24 lg:py-32 px-6 lg:px-10 max-w-6xl mx-auto">
      <div className="max-w-2xl mx-auto text-center">
        <MonoLabel>quick start</MonoLabel>
        <h2>Every command<br /><span className="text-primary italic font-light">you&apos;ll need.</span></h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16">
        {commands.map((c, i) => (
          <CopyBlock
            key={i}
            label={c.label}
            command={c.cmd}
          />
        ))}
      </div>
    </section>
  );
}
