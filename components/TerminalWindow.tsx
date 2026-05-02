"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const terminalLines = [
  { text: <><span className="text-primary font-medium">{'> '}</span><span className="text-text">ask --chat </span><span className="text-purple">--agent </span><span className="text-purple">--yolo</span></>, raw: "> ask --chat --agent --yolo", typing: true },
  { text: <span className="text-muted">  🤖 ask  v0.1  |  model: gemma-4-26b  |  agent: ON  |  yolo: ON</span>, raw: "", typing: false },
  { text: <span className="text-border2">  ────────────────────────────────────────────</span>, raw: "", typing: false },
  { text: <span className="text-dim">  🧠 memory: loaded 3 relevant memories</span>, raw: "", typing: false },
  { text: <span></span>, raw: "", typing: false },
  { text: <><span className="text-primary font-medium">You: </span><span className="text-text">summarise what we discussed about the Go HTTP server refactor</span></>, raw: "You: summarise what we discussed about the Go HTTP server refactor", typing: true },
  { text: <span></span>, raw: "", typing: false },
  { text: <span className="text-text">ask: Sure. Last Tuesday you were refactoring the HTTP handler layer to</span>, raw: "", typing: false },
  { text: <span className="text-text">      use a middleware chain pattern. You identified that auth and logging</span>, raw: "", typing: false },
  { text: <span className="text-text">      middleware were tangled. You planned to split them into separate files.</span>, raw: "", typing: false },
  { text: <span></span>, raw: "", typing: false },
  { text: <span className="text-green font-medium">  🧠 memory: saved 1 item(s)</span>, raw: "", typing: false },
  { text: <span></span>, raw: "", typing: false },
  { text: <><span className="text-primary font-medium">You: </span><span className="text-text">run the tests now</span></>, raw: "You: run the tests now", typing: true },
  { text: <span></span>, raw: "", typing: false },
  { text: <span className="text-dim">  ⚡ tool call: run_shell_command(&quot;go test ./...&quot;)</span>, raw: "", typing: false },
  { text: <span className="text-dim">  <span className="text-green">✓</span> approved (yolo mode)</span>, raw: "", typing: false },
  { text: <span className="text-green">  --- PASS: TestHandler (0.43s)</span>, raw: "", typing: false },
  { text: <span className="text-green">  ok  	github.com/user/project/handler</span>, raw: "", typing: false },
  { text: <span></span>, raw: "", typing: false },
  { text: <span className="text-primary font-medium">{'> '}</span>, raw: "> ", typing: false },
];

export function TerminalWindow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [displayedLineCount, setDisplayedLineCount] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayedLineCount(terminalLines.length);
      setCurrentCharIndex(999);
      return;
    }

    let isMounted = true;

    const runAnimation = async () => {
      for (let i = 0; i < terminalLines.length; i++) {
        if (!isMounted) break;
        const line = terminalLines[i];
        setDisplayedLineCount(i + 1);
        
        if (line.typing && line.raw.length > 0) {
          setCurrentCharIndex(0);
          for (let j = 1; j <= line.raw.length; j++) {
            if (!isMounted) break;
            await new Promise(r => setTimeout(r, 40));
            setCurrentCharIndex(j);
          }
          await new Promise(r => setTimeout(r, 400));
        } else {
          await new Promise(r => setTimeout(r, 400));
        }
      }
    };

    runAnimation();

    return () => { isMounted = false; };
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="max-w-[800px] mx-auto mt-14 bg-surface border border-border rounded-2xl overflow-hidden shadow-elegant-hover"
      role="region"
      aria-label="Live demo terminal"
      aria-live="polite"
    >
      <div className="bg-surface2 border-b border-border px-4 py-3.5 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-sm" />
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-sm" />
        <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-sm" />
        <div className="font-mono text-[12px] text-dim text-center flex-1 pr-14 tracking-wide font-medium">
          zsh — ask --chat --agent --yolo
        </div>
      </div>
      
      <div className="px-7 py-6 font-mono text-[13px] leading-[2] text-left overflow-x-auto scrollbar-hide whitespace-pre bg-surface text-text">
        {terminalLines.slice(0, displayedLineCount).map((line, idx) => {
          const isLastDisplayed = idx === displayedLineCount - 1;
          const showCursor = isLastDisplayed;

          // Render partial text for typing effect
          let content = line.text;
          if (line.typing && isLastDisplayed && currentCharIndex < line.raw.length) {
            // Simplified rendering of typing line by stripping out react nodes for partial view 
            // To maintain color formatting, we'll implement a simpler character reveal using `raw` string with basic HTML parsing if needed
            // For the PRD fidelity, since partial rendering of mixed color nodes is tough, we can just reveal the `raw` string in one color,
            // OR use the full node and clip it with CSS. CSS clipping (width/ch) is perfect for mono fonts.
            content = (
              <div 
                className="inline-block overflow-hidden align-bottom" 
                style={{ width: `${currentCharIndex}ch`, whiteSpace: 'nowrap' }}
              >
                {line.text}
              </div>
            );
          }

          return (
            <div key={idx} className="min-h-[1.9em]">
              {content}
              {showCursor && (
                <span className="w-2.5 h-4 bg-primary inline-block ml-[2px] animate-blink align-text-bottom opacity-80" />
              )}
            </div>
          );
        })}
        {displayedLineCount === 0 && <span className="w-2.5 h-4 bg-primary inline-block animate-blink opacity-80" />}
      </div>
    </div>
  );
}
