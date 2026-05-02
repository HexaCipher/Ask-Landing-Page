# PRD — `ask` CLI Landing Page
**Version:** 1.0  
**Stack:** Next.js 14+ (App Router), Tailwind CSS v3, Framer Motion, shadcn/ui  
**Status:** Ready to build

---

## 1. Project Overview

**Product name:** `ask`  
**Tagline:** *Cloud intelligence. Local control.*  
**One-liner:** Local-first, agentic CLI assistant built in Go — with long-term memory and shell tool use.  
**Repo:** `github.com/real-zephex/ask-go`  
**License:** MIT (open source)

The landing page must feel like a premium developer tool (think Warp.dev, Linear, Vercel) — dark, fast, terminal-native, and honest. It must communicate three core value props in under 10 seconds:

1. It **remembers** across sessions (local vector DB)
2. It can **act** — run shell commands as an agent
3. It **never ships your data** — fully local except for AI inference

---

## 2. Goals

- Convert GitHub visitors into installers and GitHub star-givers
- Communicate the privacy-first, local architecture clearly
- Show the product working (terminal animation, command demos)
- Build trust with open source signals and technical credibility

---

## 3. Target Audience

- Go developers, Linux/macOS power users
- Developers frustrated with cloud-only AI tools (ChatGPT, etc.)
- Privacy-conscious engineers who live in the terminal
- OSS community members on GitHub / Hacker News

---

## 4. Tech Stack & Packages

```
next@14+            (App Router, RSC)
tailwindcss@3       (utility-first styling)
framer-motion@11    (scroll animations, terminal typing)
lucide-react        (icons)
clsx / tailwind-merge (conditional classes)
@shadcn/ui          (Badge, Button, Card primitives — use as base only, heavily customise)
next/font           (Google Fonts: Syne + JetBrains Mono + DM Sans)
```

> Do NOT use Next.js Image for external images in this build. All visuals are SVG, CSS, or inline components.

---

## 5. Design System

### 5.1 Color Tokens (add to `tailwind.config.ts`)

```ts
colors: {
  bg:        '#07090D',   // page background
  surface:   '#0D1117',   // card background
  surface2:  '#111827',   // hover / nav bg
  border:    '#1C2230',   // default border
  border2:   '#252F3F',   // stronger border
  cyan:      '#00E5CC',   // primary accent (local / memory)
  'cyan-dim':'rgba(0,229,204,0.12)',
  purple:    '#7C3AED',   // secondary accent (AI / cloud)
  'purple-dim':'rgba(124,58,237,0.12)',
  green:     '#22D3A0',   // success / saved memories
  'green-dim':'rgba(34,211,160,0.10)',
  dim:       '#94A3B8',   // secondary text
  muted:     '#475569',   // placeholder / labels
  text:      '#E2E8F0',   // primary text
}
```

### 5.2 Typography

Load via `next/font/google`:

```ts
// Display headings
Syne({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-display' })

// Body copy
DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-body' })

// Code / terminal / labels
JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-mono' })
```

Apply via Tailwind:
```
font-display → var(--font-display)
font-body    → var(--font-body)
font-mono    → var(--font-mono)
```

### 5.3 Typography Scale

| Role | Class |
|---|---|
| Hero H1 | `font-display text-[clamp(52px,7vw,92px)] font-extrabold leading-[1.0] tracking-[-3px]` |
| Section H2 | `font-display text-[clamp(34px,4vw,52px)] font-extrabold leading-[1.05] tracking-[-2px]` |
| Card Title | `font-display text-xl font-bold tracking-[-0.5px]` |
| Body | `font-body text-base font-light leading-relaxed text-dim` |
| Mono label | `font-mono text-[11px] uppercase tracking-[2px] text-cyan` |
| Terminal text | `font-mono text-[13.5px] leading-[1.9]` |

### 5.4 Spacing & Radius

- Section padding: `py-24 lg:py-32 px-6 lg:px-10`
- Max content width: `max-w-6xl mx-auto`
- Card radius: `rounded-2xl`
- Button radius: `rounded-lg`
- Small element radius: `rounded-md`

### 5.5 Shadows & Glows

```css
/* Cyan glow — use on primary cards and CTA buttons */
box-shadow: 0 0 0 1px rgba(0,229,204,0.07), 0 40px 80px rgba(0,0,0,0.7), 0 0 40px rgba(0,229,204,0.18);

/* Purple glow — use on memory / AI sections */
box-shadow: 0 0 40px rgba(124,58,237,0.2);

/* Card shadow */
box-shadow: 0 4px 24px rgba(0,0,0,0.5);
```

---

## 6. Global Layout

### 6.1 `app/layout.tsx`

- Background: `bg-bg`
- Font variables applied to `<html>`
- Include grain texture overlay (fixed, `z-[9999]`, `pointer-events-none`, opacity 50%) — use an SVG data URI noise filter or a `before:` pseudo-element
- Smooth scroll: `scroll-behavior: smooth` on html

### 6.2 Grain Overlay (add to layout or globals.css)

```css
body::before {
  content: '';
  position: fixed; inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  background-size: 200px;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.5;
}
```

---

## 7. Sections (in order)

---

### Section 1 — Navbar (`components/Navbar.tsx`)

**Behaviour:** Fixed top, full width, blurred glass on scroll.

**Layout:** `fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 lg:px-10`

**Background:** `bg-bg/70 backdrop-blur-xl border-b border-border`

**Left — Logo block:**
```
<a href="/">
  <span class="font-display text-xl font-extrabold text-text tracking-[-0.5px]">ask</span>
  <span class="ml-2 font-mono text-[11px] text-cyan border border-cyan/30 bg-cyan/10 px-1.5 py-0.5 rounded">
    🤖 CLI
  </span>
</a>
```

**Center — Nav links (hidden on mobile):**
- Features (smooth scroll to #features)
- How it works (smooth scroll to #how-it-works)
- Architecture (smooth scroll to #architecture)
- GitHub (external link → `github.com/real-zephex/ask-go`, opens in new tab)

**Right — CTA button:**
```
<a href="#install">
  Install Now →
</a>
```
Style: `font-mono text-[13px] font-semibold bg-cyan text-bg px-4 py-2 rounded-lg hover:opacity-90 transition shadow-[0_0_20px_rgba(0,229,204,0.25)] hover:shadow-[0_0_32px_rgba(0,229,204,0.4)]`

**Mobile:** Hamburger menu reveals nav links in a slide-down drawer.

---

### Section 2 — Hero (`components/Hero.tsx`)

**ID:** `#home`  
**Layout:** `relative text-center pt-36 pb-24 px-6 overflow-hidden`

**Background glow (absolute, behind content):**
```
<div class="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[700px] pointer-events-none
            bg-[radial-gradient(ellipse,rgba(0,229,204,0.07)_0%,rgba(124,58,237,0.05)_45%,transparent_70%)]" />
```

**Content order (top to bottom):**

**① Status badge:**
```
<div class="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-3 py-1.5 mb-8">
  <span class="w-2 h-2 rounded-full bg-cyan shadow-[0_0_6px_#00E5CC] animate-pulse" />
  <span class="font-mono text-[12px] text-dim">v0.1 · Open Source · MIT Licensed</span>
</div>
```

**② Headline (H1):**
```
Your terminal,
<span class="text-cyan">now thinks.</span>
```
Animate: Framer Motion `fadeUp` with `initial={{ opacity: 0, y: 24 }}`, `animate={{ opacity: 1, y: 0 }}`, `transition={{ duration: 0.6, delay: 0.1 }}`

**③ Subheadline:**
```
Local-first agentic CLI built in Go. Long-term memory, shell tool use,
and streaming AI — all with your data staying on your machine.
```
Style: `font-body text-lg text-dim max-w-xl mx-auto font-light leading-relaxed mt-6`

**④ CTA Row:**
```
[  git clone github.com/real-zephex/ask-go  →  ]   [ ★ View on GitHub ]
```
- Primary: `bg-cyan text-bg font-mono text-[14px] font-semibold px-6 py-3.5 rounded-lg shadow-[0_0_30px_rgba(0,229,204,0.3)] hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(0,229,204,0.5)] transition-all`
- Secondary: `border border-border2 text-dim text-[14px] px-6 py-3.5 rounded-lg hover:bg-surface2 hover:text-text transition-all`

**⑤ Terminal window component (`<TerminalWindow />`):**
See Section 7.1 below for full spec. Animate: Framer Motion `fadeUp` with delay 0.4s.

---

#### Section 2.1 — `<TerminalWindow />` (`components/TerminalWindow.tsx`)

**Purpose:** Simulate a real session of `ask --chat --agent --yolo` in the terminal. Uses typed-text animation (Framer Motion or a simple `useEffect` character-by-character reveal).

**Container:**
```
max-w-[800px] mx-auto mt-14
bg-surface border border-border rounded-2xl overflow-hidden
shadow-[0_0_0_1px_rgba(0,229,204,0.07),_0_40px_80px_rgba(0,0,0,0.7),_0_0_40px_rgba(0,229,204,0.18)]
```

**Header bar:**
```
bg-surface2 border-b border-border px-4 py-3.5 flex items-center gap-2
```
- Three dots: `w-3 h-3 rounded-full` → `bg-[#FF5F57]`, `bg-[#FEBC2E]`, `bg-[#28C840]`
- Center title: `font-mono text-[12px] text-muted text-center flex-1` → `zsh — ask --chat --agent --yolo`

**Body:**
```
px-7 py-6 font-mono text-[13.5px] leading-[1.9] text-left
```

**Lines to render (type them out one by one with 40ms per character, 400ms delay between lines):**

```
Line 1: [prompt]> [cmd]ask --chat [flag]--agent [flag]--yolo
Line 2: [out]  🤖 ask  v0.1  |  model: gemma-4-26b  |  agent: ON  |  yolo: ON
Line 3: [out]  ────────────────────────────────────────────
Line 4: [out]  🧠 memory: loaded 3 relevant memories
Line 5: [empty]
Line 6: [q]You: summarise what we discussed about the Go HTTP server refactor
Line 7: [empty]
Line 8: [a]ask: Sure. Last Tuesday you were refactoring the HTTP handler layer to
Line 9: [a]      use a middleware chain pattern. You identified that auth and logging
Line 10:[a]      middleware were tangled. You planned to split them into separate files.
Line 11:[empty]
Line 12:[mem]  🧠 memory: saved 1 item(s)
Line 13:[empty]
Line 14:[q]You: run the tests now
Line 15:[empty]
Line 16:[out]  ⚡ tool call: run_shell_command("go test ./...")
Line 17:[out]  ✅ approved (yolo mode)
Line 18:[out]  --- PASS: TestHandler (0.43s)
Line 19:[out]  ok  	github.com/user/project/handler
Line 20:[empty]
Line 21:[cursor]
```

**Color map for line prefixes:**
- `[prompt]` → `text-cyan`
- `[cmd]` → `text-text`
- `[flag]` → `text-purple` (use `#A78BFA`)
- `[out]` → `text-muted`
- `[q]` → `text-[#FBBF24]` (amber — "You:")
- `[a]` → `text-text` (white — "ask:")
- `[mem]` → `text-green`
- `[cursor]` → blinking `w-2 h-3.5 bg-cyan inline-block animate-[blink_1s_infinite]`

---

### Section 3 — Marquee Trust Bar (`components/MarqueeBelt.tsx`)

**Layout:** Full-width, no max-width, between Hero and Features.

**Style:** `border-y border-border bg-surface py-4 overflow-hidden`

**Items (repeat twice for seamless loop):**

```
· Local SQLite  · Vector Memory  · Shell Agent  · Streaming Markdown
· Google Gemini  · Privacy-First  · MIT License  · Built in Go
· Long-Term Memory  · Open Source  · Approval Flow  · Fast REPL
```

**Animation:** CSS `@keyframes marquee` translating `-50%` over 28s linear infinite.

Each item: `font-mono text-[12px] uppercase tracking-[0.5px] text-muted px-7 inline-flex items-center gap-2`  
Separator dot: `text-cyan text-base`

---

### Section 4 — Features Bento Grid (`components/Features.tsx`)

**ID:** `#features`  
**Section heading:**
```
<span class="mono-label">Core capabilities</span>
<h2>Everything your terminal<br /><span class="text-cyan">was missing.</span></h2>
<p class="section-sub">Built for developers who live in the terminal and care about privacy.</p>
```

**Grid layout:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 mt-16`

Define 6 cards. Each card has: icon (Lucide), title, description, and an optional visual inset.

---

#### Card 1 — Long-Term Memory (LARGE, spans `lg:col-span-7`)

**Icon:** `Brain` (Lucide), color `text-cyan`  
**Title:** `Long-term memory that actually works.`  
**Description:**
> Every conversation is analysed after completion. Important context — preferences, decisions, ongoing work — gets extracted, hashed, embedded, and stored in a local vector DB. Future sessions retrieve the top-5 most relevant memories automatically.

**Visual inset (bottom of card):** Mini diagram showing flow:

```
[ Turn Complete ] → [ Memory Extractor ] → [ chromem-go Vector DB ]
                                                      ↓
                                         [ Top-5 injected on next query ]
```
Render this as a styled `<div>` row with small rounded boxes connected by `→` arrows in `text-cyan`. Font: mono, 11px, `text-muted` for labels.

**Card style:**
```
bg-surface border border-border rounded-2xl p-8
hover:border-cyan/30 hover:shadow-[0_0_40px_rgba(0,229,204,0.08)] transition-all duration-300
```

---

#### Card 2 — Agent Mode (MEDIUM, spans `lg:col-span-5`)

**Icon:** `Zap` (Lucide), color `text-purple`  
**Title:** `Agentic shell tool use.`  
**Description:**
> The model can request to run shell commands. You approve each one (or enable `--yolo` to auto-approve). stdout, stderr, and exit codes are fed back to the model.

**Visual inset:** Inline code block showing:
```bash
⚡ tool call: run_shell_command
   > go build ./...
✅ approved
```
Style as a mini dark terminal (`bg-bg rounded-lg px-4 py-3 font-mono text-[12px] border border-border mt-4`).

**Card style:** Same hover as Card 1 but `hover:border-purple/30 hover:shadow-[0_0_40px_rgba(124,58,237,0.08)]`

---

#### Card 3 — Privacy Architecture (FULL WIDTH, spans `lg:col-span-12`)

**Icon:** `ShieldCheck` (Lucide), color `text-green`  
**Title:** `Local by default. Cloud only when necessary.`  
**Description:**
> Your conversation history, memories, and state never leave your machine. Only AI inference calls touch Google's servers — and those are stateless.

**Visual inset:** Two-column layout inside the card (left: local, right: cloud):

```
┌─────────────────────────────┐  ╔═══════════════════════╗
│  YOUR MACHINE               │  ║  GOOGLE GEMINI API    ║
│                             │  ╚═══════════════════════╝
│  ~/.ask-go.db  (SQLite)     │         ↑↓
│  ~/db  (chromem-go vectors) │   inference only
│  System prompt              │   (stateless)
│  Conversation history       │
└─────────────────────────────┘
```

Render as a flex row with two styled boxes:
- Left box: `bg-bg border border-green/20 rounded-xl px-6 py-5` with green-tinted label `YOUR MACHINE`
- Right box: `bg-bg border border-purple/20 rounded-xl px-6 py-5` with purple-tinted label `GEMINI API`
- Between them: double-headed arrow icon + `font-mono text-[11px] text-muted text-center`

Items inside boxes: `font-mono text-[12px] text-dim leading-[2] mt-2`

---

#### Card 4 — Chat REPL (MEDIUM, spans `lg:col-span-5`)

**Icon:** `MessageSquare` (Lucide), color `text-cyan`  
**Title:** `Rich interactive REPL.`  
**Description:**
> Full slash-command system: switch models, toggle agent mode, inspect history, change working directory — all without leaving the session.

**Visual inset:** Slash command pills:
```
/model cheap   /agent on   /reason HIGH
/history 20    /clear      /status
```
Each as `font-mono text-[11px] text-cyan border border-cyan/20 bg-cyan/5 rounded px-2 py-0.5 mr-1 mb-1 inline-block`

---

#### Card 5 — Streaming Markdown (MEDIUM, spans `lg:col-span-4`)

**Icon:** `FileText` (Lucide), color `text-purple`  
**Title:** `Streamed markdown rendering.`  
**Description:**
> Not raw chunk spam. Responses render as styled markdown in real-time via `glamour`. Code blocks, headers, and lists — all formatted.

---

#### Card 6 — Model Presets (SMALL, spans `lg:col-span-3`)

**Icon:** `Cpu` (Lucide), color `text-green`  
**Title:** `Model presets.`  
**Description:**
> `free`, `cheap`, `exp` — pick the right model for the job with a single flag.

**Visual inset:**
```
--model free   → gemma-4-26b (default)
--model cheap  → gemini-flash-lite
--model exp    → gemini-flash-preview
```
Font: mono, 11px, muted.

---

### Section 5 — How It Works (`components/HowItWorks.tsx`)

**ID:** `#how-it-works`

**Section heading:**
```
<span class="mono-label">under the hood</span>
<h2>Simple to use.<br /><span class="text-cyan">Powerful underneath.</span></h2>
```

**Layout:** `grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16`

Three step cards, each with:
- Step number: `font-mono text-[11px] text-muted border border-border rounded-full w-7 h-7 flex items-center justify-center mb-5`
- Icon (large, 32px)
- Title
- Description
- Code snippet inset

---

**Step 1 — Install & Run**
Icon: `Terminal`  
Title: `Install in 30 seconds.`  
Description: `Clone, build, and drop the binary in your PATH. No npm, no pip, no Docker. Pure Go.`

Code inset:
```bash
git clone https://github.com/real-zephex/ask-go.git
cd ask-go && go build -o ask
sudo mv ask /usr/local/bin/
export GEMINI_API_KEY="your_key"
```

---

**Step 2 — Chat or Agent**
Icon: `Bot`  
Title: `Chat naturally or go agentic.`  
Description: `Ask questions, pipe in files, get streamed markdown back. Enable agent mode for shell tool use with per-command approval.`

Code inset:
```bash
ask "What is a goroutine?"
cat main.go | ask "Explain this code"
ask --chat --agent --model cheap
```

---

**Step 3 — Memory Builds Over Time**
Icon: `Database`  
Title: `It remembers what matters.`  
Description: `After every turn, key context is extracted and stored in a local vector DB. Next time you ask, the top-5 relevant memories are injected automatically.`

Code inset:
```bash
🧠 memory: saved 2 item(s)

# Next session — automatically injected:
# "User prefers Go modules over GOPATH"
# "Working on CLI refactor in ~/projects/ask"
```

---

### Section 6 — Architecture Deep Dive (`components/Architecture.tsx`)

**ID:** `#architecture`  
**Background:** Slightly different to distinguish — use `bg-surface` full-bleed section (no max-width on the outer bg, max-width on inner content).

**Section heading:**
```
<span class="mono-label">architecture</span>
<h2>Three layers.<br /><span class="text-cyan">Zero surprises.</span></h2>
<p class="section-sub max-w-md">
  Designed so you always know where your data is and what's talking to the internet.
</p>
```

**Layout:** `grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16`

Three vertical cards (equal width), each representing one layer:

---

**Layer 1 — Short-Term History**
Color accent: `text-cyan / border-cyan/20`  
Icon: `Clock`  
Title: `Short-Term History`  
Subtitle: `~/.ask-go.db`  
Body: Last 20 messages stored in SQLite. Sent as context on every query. Stays entirely on your machine.  
Tag pill: `SQLite · Local`

---

**Layer 2 — Long-Term Memory**
Color accent: `text-purple / border-purple/20`  
Icon: `Brain`  
Title: `Long-Term Memory`  
Subtitle: `~/db (chromem-go)`  
Body: After each turn, an extraction pass decides what to remember. Memories are hashed, embedded, and stored in a persistent vector DB. Top-5 retrieved per query.  
Tag pill: `chromem-go · Local · Vector`

---

**Layer 3 — AI Inference**
Color accent: `text-green / border-green/20`  
Icon: `CloudLightning`  
Title: `AI Inference`  
Subtitle: `Google Gemini API`  
Body: Only inference calls leave your machine. Stateless. No conversation history is stored server-side. Your `GEMINI_API_KEY` is read from env, never logged.  
Tag pill: `Gemini · Remote · Stateless`

---

Below the three cards, add a full-width callout box:
```
"Everything except model inference is local by architecture — not by policy."
```
Style: `border border-cyan/20 bg-cyan/5 rounded-2xl px-8 py-6 mt-8 text-center font-mono text-sm text-cyan`

---

### Section 7 — Command Reference (`components/CommandsShowcase.tsx`)

**ID:** `#commands`

**Section heading:**
```
<span class="mono-label">quick start</span>
<h2>Every command<br /><span class="text-cyan">you'll need.</span></h2>
```

**Layout:** Two-column grid `grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12`

Each item is a copy-able command block component (`<CopyBlock />`):

**`<CopyBlock />` spec:**
- Container: `bg-surface border border-border rounded-xl px-5 py-4 flex items-start justify-between gap-4 hover:border-border2 transition group`
- Left: label `font-body text-[13px] text-dim mb-1.5` + code `font-mono text-[13px] text-text`
- Right: Copy icon (Lucide `Copy`) `text-muted group-hover:text-cyan transition cursor-pointer`
- On click: copies command to clipboard, icon swaps to `Check` for 2 seconds

**Commands list:**

| Label | Command |
|---|---|
| Basic question | `ask "What is a goroutine?"` |
| Pipe code in | `cat main.go \| ask "Explain this"` |
| Pipe logs | `tail -n 50 app.log \| ask --model cheap "Summarise errors"` |
| Chat REPL | `ask --chat` |
| Agent mode | `ask --chat --agent` |
| Auto-approve agent | `ask --chat --agent --yolo` |
| Use cheaper model | `ask --model cheap "Quick question"` |
| High reasoning | `ask --reason HIGH "Design a queue worker"` |
| System prompt | `ask --chat --system ./prompts/mentor.txt` |
| Shell completion (zsh) | `ask completion zsh > ~/.zfunc/_ask` |

---

### Section 8 — Install CTA (`components/InstallCTA.tsx`)

**ID:** `#install`

**Full-bleed:** Subtle radial glow behind — `bg-[radial-gradient(ellipse_at_center,rgba(0,229,204,0.06)_0%,transparent_60%)]`

**Layout:** `text-center py-32 px-6`

**Content:**
```
<span class="mono-label">get started</span>
<h2 class="hero-h2 mt-3">
  Start in 30 seconds.
  <br /><span class="text-cyan">Your terminal won't be the same.</span>
</h2>
<p class="section-sub mx-auto mt-5">
  Open source. MIT licensed. No account needed. No cloud lock-in.
</p>
```

**Install command block** (large, copyable):
```
git clone https://github.com/real-zephex/ask-go.git && cd ask-go && go build -o ask
```
Style: `bg-surface border border-border rounded-xl px-6 py-4 font-mono text-[14px] text-cyan max-w-2xl mx-auto mt-10 flex items-center justify-between`  
With a large Copy button on the right.

**CTA buttons row:**
```
[  ★ Star on GitHub  ]   [  Read the Docs  ]
```

**Below buttons — stats row** (`flex justify-center gap-12 mt-14`):
```
  Go         MIT         Local-first   Memory
  Built-in   Licensed    Architecture  Powered
```
Each stat: `text-center` with `font-display text-3xl font-extrabold text-cyan` on top and `font-mono text-[11px] uppercase text-muted mt-1` below.

---

### Section 9 — Footer (`components/Footer.tsx`)

**Layout:** `border-t border-border bg-bg py-12 px-6 lg:px-10`

**Inner:** `max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6`

**Left:**
```
<span class="font-display font-extrabold text-text">ask</span>
<span class="font-mono text-[11px] text-muted ml-3">Cloud intelligence. Local control.</span>
```

**Center (links):**
- GitHub
- MIT License
- Issues
- Contributing

`font-body text-[13px] text-muted hover:text-text transition`

**Right:**
```
<span class="font-mono text-[11px] text-muted">
  Built with Go · Powered by Gemini · Stored locally
</span>
```

---

## 8. Animations Spec

All scroll-triggered animations use Framer Motion's `whileInView` with `viewport={{ once: true, margin: "-100px" }}`.

| Element | Initial | Animate | Transition |
|---|---|---|---|
| Hero badge | `{ opacity: 0, y: 16 }` | `{ opacity: 1, y: 0 }` | `{ duration: 0.5 }` |
| Hero H1 | `{ opacity: 0, y: 24 }` | `{ opacity: 1, y: 0 }` | `{ duration: 0.6, delay: 0.1 }` |
| Hero sub | `{ opacity: 0, y: 20 }` | `{ opacity: 1, y: 0 }` | `{ duration: 0.6, delay: 0.2 }` |
| Hero CTAs | `{ opacity: 0, y: 20 }` | `{ opacity: 1, y: 0 }` | `{ duration: 0.6, delay: 0.3 }` |
| Terminal | `{ opacity: 0, y: 30 }` | `{ opacity: 1, y: 0 }` | `{ duration: 0.7, delay: 0.4 }` |
| Bento cards | `{ opacity: 0, y: 20 }` | `{ opacity: 1, y: 0 }` | staggered `delay: index * 0.08` |
| Step cards | `{ opacity: 0, x: -20 }` | `{ opacity: 1, x: 0 }` | staggered `delay: index * 0.12` |
| Architecture cards | `{ opacity: 0, y: 16 }` | `{ opacity: 1, y: 0 }` | staggered `delay: index * 0.1` |

**Terminal typing animation:**
- Use `useEffect` + `useState` to reveal characters one by one.
- 30ms per character.
- 300ms pause between lines.
- Start after the terminal is in view (use IntersectionObserver or Framer `whileInView` trigger).

**Cursor blink:**
```css
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
```
Apply `animate-[blink_1s_ease-in-out_infinite]` to the cursor span.

**Marquee:**
```css
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.marquee-track { animation: marquee 28s linear infinite; }
.marquee-track:hover { animation-play-state: paused; }
```

---

## 9. File & Folder Structure

```
/
├── app/
│   ├── layout.tsx          # fonts, grain overlay, metadata
│   ├── page.tsx            # assembles all sections
│   └── globals.css         # Tailwind directives, custom keyframes, scrollbar style
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── TerminalWindow.tsx  # typing animation terminal
│   ├── MarqueeBelt.tsx     # scrolling trust bar
│   ├── Features.tsx        # bento grid
│   ├── HowItWorks.tsx      # 3-step section
│   ├── Architecture.tsx    # 3-layer section
│   ├── CommandsShowcase.tsx # copyable commands
│   ├── InstallCTA.tsx      # bottom CTA
│   ├── Footer.tsx
│   └── ui/
│       ├── CopyBlock.tsx   # reusable copyable command block
│       ├── MonoLabel.tsx   # reusable section label
│       └── GlowCard.tsx    # reusable card with glow hover
├── tailwind.config.ts      # custom tokens from Section 5.1
└── next.config.ts
```

---

## 10. SEO & Metadata (`app/layout.tsx`)

```ts
export const metadata = {
  title: 'ask — Cloud intelligence. Local control.',
  description:
    'Local-first, agentic CLI assistant built in Go. Long-term memory, shell tool use, and streaming AI — with your data staying on your machine.',
  keywords: ['CLI', 'AI', 'terminal', 'Go', 'local', 'agent', 'open source', 'Gemini'],
  openGraph: {
    title: 'ask — Your terminal, now thinks.',
    description: 'Agentic CLI with long-term memory, shell tool use, and privacy-first architecture.',
    type: 'website',
  },
  themeColor: '#07090D',
};
```

---

## 11. Responsive Behaviour

| Breakpoint | Changes |
|---|---|
| `< 768px` (mobile) | Single column grid, hamburger nav, hero H1 at 48px, terminal scrolls horizontally |
| `768px–1024px` (tablet) | 2-col bento, step cards stack |
| `> 1024px` (desktop) | Full 12-col bento, 3-col how-it-works, 3-col architecture |

Terminal window on mobile: `overflow-x-auto`, no line wrapping inside terminal body.

---

## 12. Performance Notes

- No external images — all visuals are CSS/SVG components
- Use `loading="lazy"` if any images are added later
- Framer Motion: import only used hooks (`useInView`, `motion`, `AnimatePresence`)
- Marquee uses CSS animation (no JS)
- Terminal animation uses `requestAnimationFrame` via `useEffect`, cleans up on unmount

---

## 13. Copy Reference (Final)

### Hero
- **H1:** `Your terminal,\nnow thinks.`
- **Sub:** `Local-first agentic CLI built in Go. Long-term memory, shell tool use, and streaming AI — all with your data staying on your machine.`
- **CTA primary:** `Install Now →`
- **CTA secondary:** `★ View on GitHub`

### Section labels (mono, uppercase)
- Features → `Core capabilities`
- How it works → `under the hood`
- Architecture → `architecture`
- Commands → `quick start`
- Install → `get started`

### Section H2s
- Features: `Everything your terminal was missing.`
- How it works: `Simple to use. Powerful underneath.`
- Architecture: `Three layers. Zero surprises.`
- Commands: `Every command you'll need.`
- Install: `Start in 30 seconds. Your terminal won't be the same.`

### Callout quote
`"Everything except model inference is local by architecture — not by policy."`

---

## 14. Accessibility

- All interactive elements have `focus-visible` ring: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50`
- All icons have `aria-hidden="true"` and accompanying text
- Colour contrast: all text on dark backgrounds passes WCAG AA (text: `#E2E8F0` on `#07090D` = 15.3:1)
- Marquee has `aria-hidden="true"` (decorative)
- Terminal animation: `aria-live="polite"` on terminal body, or wrap in `role="region" aria-label="Live demo"`
- Motion: wrap all Framer animations in check for `prefers-reduced-motion`

```ts
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// Pass duration: 0 and skip typing animation if true
```

---

*End of PRD. All sections, copy, colors, components, animations, and file structure are fully specified. An AI coding assistant or Copilot should be able to build the entire page from this document without needing clarification.*