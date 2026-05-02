"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

type LineKind = "prompt" | "user" | "ai" | "memory" | "system" | "empty";

interface TerminalLine {
  kind: LineKind;
  text: string;
}

const CHAR_DELAY_MS = 28;
const LINE_DELAY_MS = 220;
const EMPTY_LINE_DELAY_MS = 120;
const LOOP_DELAY_MS = 3000;

const transcript: TerminalLine[] = [
  { kind: "prompt", text: "> ask --chat --agent --yolo" },
  { kind: "system", text: "🤖 ask  v0.1  |  model: gemma-4-26b  |  agent: ON  |  yolo: ON" },
  { kind: "system", text: "────────────────────────────────────────────" },
  { kind: "memory", text: "🧠 memory: loaded 3 relevant memories" },
  { kind: "empty", text: "" },
  { kind: "user", text: "You: summarise what we discussed about the Go HTTP server refactor" },
  { kind: "empty", text: "" },
  { kind: "ai", text: "ask: Sure. Last Tuesday you were refactoring the HTTP handler layer to" },
  { kind: "ai", text: "     use a middleware chain pattern. You identified that auth and logging" },
  { kind: "ai", text: "     middleware were tangled. You planned to split them into separate files." },
  { kind: "empty", text: "" },
  { kind: "memory", text: "🧠 memory: saved 1 item(s)" },
  { kind: "empty", text: "" },
  { kind: "user", text: "You: run the tests now" },
  { kind: "empty", text: "" },
  { kind: "system", text: "⚡ tool call: run_shell_command(\"go test ./...\")" },
  { kind: "system", text: "✅ approved (yolo mode)" },
  { kind: "system", text: "--- PASS: TestHandler (0.43s)" },
  { kind: "system", text: "ok   github.com/user/project/handler" },
];

function lineColor(kind: LineKind): string {
  switch (kind) {
    case "prompt":
      return "text-[#0284C7]";
    case "user":
      return "text-[#D97706]";
    case "ai":
      return "text-[#1F2937]";
    case "memory":
      return "text-[#059669]";
    case "system":
      return "text-[#6B7280]";
    default:
      return "text-[#6B7280]";
  }
}

function getCharDelay(char: string): number {
  if (char === " ") return 10;
  if (/[.,:;!?]/.test(char)) return 72;
  if (char === "—") return 56;
  return CHAR_DELAY_MS;
}

export function LaptopTerminalHero() {
  const terminalScrollRef = useRef<HTMLDivElement>(null);
  const [visibleLineCount, setVisibleLineCount] = useState(0);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const lines = useMemo(() => transcript, []);

  useEffect(() => {
    if (!terminalScrollRef.current) return;
    terminalScrollRef.current.scrollTo({
      top: terminalScrollRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [visibleLineCount, currentCharIndex]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setVisibleLineCount(lines.length);
      setCurrentLineIndex(lines.length - 1);
      setCurrentCharIndex(lines[lines.length - 1]?.text.length ?? 0);
      return;
    }

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        const timer = setTimeout(resolve, ms);
        timers.push(timer);
      });

    const runTypingLoop = async () => {
      while (!cancelled) {
        setVisibleLineCount(0);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
        await sleep(180);

        for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
          if (cancelled) return;

          const line = lines[lineIndex];
          setVisibleLineCount(lineIndex + 1);
          setCurrentLineIndex(lineIndex);
          setCurrentCharIndex(0);

          if (line.text.length === 0) {
            await sleep(EMPTY_LINE_DELAY_MS);
            continue;
          }

          for (let charIndex = 1; charIndex <= line.text.length; charIndex += 1) {
            if (cancelled) return;
            setCurrentCharIndex(charIndex);
            await sleep(getCharDelay(line.text[charIndex - 1]));
          }

          await sleep(LINE_DELAY_MS);
        }

        await sleep(LOOP_DELAY_MS);
      }
    };

    runTypingLoop();

    return () => {
      cancelled = true;
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [lines]);

  return (
    <section className="relative w-full py-10 sm:py-14">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[min(96vw,1180px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent blur-2xl" />

      <motion.div
        className="relative z-10 mx-auto w-[90vw] max-w-[1100px]"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative overflow-hidden rounded-[18px] border-[8px] border-[#1F2937] bg-[#FFFFFF] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
          <div className="relative aspect-[16/10]">
            <div className="flex h-12 items-center gap-2 border-b border-[#E5E7EB] bg-[#F9FAFB] px-5">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              <span
                className="flex-1 text-center text-[13px] text-[#6B7280] font-medium"
                style={{ fontFamily: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}
              >
                zsh — ask --chat --agent --yolo
              </span>
            </div>

            <div
              ref={terminalScrollRef}
              className="relative h-[calc(100%-48px)] overflow-y-auto px-7 py-7 text-left text-[15px] leading-[1.9] sm:px-8 sm:py-8 sm:text-[16px]"
              style={{ fontFamily: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}
            >
              {lines.slice(0, visibleLineCount).map((line, index) => {
                const isCurrentLine = index === currentLineIndex && index === visibleLineCount - 1;
                const isTypingLine = line.text.length > 0 && isCurrentLine;
                const visibleText = isTypingLine ? line.text.slice(0, currentCharIndex) : line.text;

                return (
                  <div key={`${line.kind}-${index}`} className={`min-h-[1.75em] ${lineColor(line.kind)}`}>
                    {visibleText}
                    {isCurrentLine && (
                      <span className="ml-[2px] inline-block h-[1em] w-[8px] translate-y-[2px] animate-blink bg-[#0284C7]" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.4)_24%,transparent_46%)] opacity-20" />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 2px, transparent 4px)",
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default LaptopTerminalHero;
