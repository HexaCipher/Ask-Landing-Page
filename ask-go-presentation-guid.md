# `ask` — Presentation Script & Slide Content
### For Kimi K2 / Any AI PPT Tool
**Theme:** Dark, terminal-native, developer-first. Think: Linear meets Warp.
**Mood:** Not a product pitch. A story about why developers deserve better.
**Font suggestion:** Syne or Space Grotesk (headings) + JetBrains Mono (code/labels)
**Color palette:** #07090D bg · #00E5CC cyan accent · #7C3AED purple · #E2E8F0 white · #94A3B8 gray

---
---

## SLIDE 1 — THE OPENING HIT
### "The Hook"

**Slide title (big, centered, bold):**
> You talk to AI all day.
> But does it even know who you are?

**Subtitle (smaller, muted):**
> Every session starts from zero. Every chat you've ever had — gone.
> You're not working with an assistant. You're talking to a very smart stranger. Every. Single. Day.

**Visual direction:**
- Dark background
- A blinking terminal cursor, alone in the center of the screen
- Nothing else. Minimalist. Let the words land.
- Subtle cyan glow under the cursor

**Speaker note / narrative:**
*"This is the problem no one talks about. We've built incredibly powerful AI — and then we made it forget everything the moment you close the tab."*

---
---

## SLIDE 2 — THE PROBLEM
### "Three Broken Promises of Modern AI Tools"

**Section label (mono, small, top-left):**
`// the problem`

**Slide headline:**
> AI tools are powerful.
> Just not yours.

**Three problem cards (side by side):**

---

**Card 1 — 🔒 Your Data Leaves**
*Headline:* Everything you type goes to the cloud.
*Body:* Code snippets, architecture decisions, debugging sessions — all uploaded to servers you don't control. As of 2025, Anthropic's Claude uses consumer chats for model training by default unless you opt out. ChatGPT credentials have appeared on dark web markets. Your most sensitive work is someone else's training data.
*Stat to show:* `34.8% of employee ChatGPT inputs in 2025 contained sensitive data` *(Source: research cited by Entremt, 2026)*

---

**Card 2 — 🧠 No Memory**
*Headline:* It forgets everything every time.
*Body:* You explained your project architecture yesterday. You'll explain it again today. And tomorrow. Every session is a blank slate. There's no "last time we talked about this." There's no continuity. You are always the one carrying the context.

---

**Card 3 — 💸 You Don't Control It**
*Headline:* Expensive, locked-in, and opinionated.
*Body:* Claude Code starts at $20/month and heavy users report $100–200/month bills. These tools are locked to one model provider, run on someone else's infra, and can be shut down, rate-limited, or repriced at any time. You're renting intelligence you can't own.
*Stat to show:* `Daily Claude Code use easily exceeds $6/developer` *(Source: getstream.io, 2025)*

---

**Visual direction:**
- Three dark cards with colored top borders (red, yellow, orange — problem colors)
- Each card has a minimal icon and one stat highlighted in accent color
- Subtle grid/dot pattern background

---
---

## SLIDE 3 — MEET ASK
### "The Protagonist Enters"

**Section label:**
`// introducing`

**Slide headline (massive, centered):**
> `ask`
> Cloud intelligence. Local control.

**One-liner below:**
> A local-first, agentic CLI assistant built in Go.
> Your data stays on your machine. Your AI actually remembers you.

**Three-column value props (below headline):**

| 🧠 Remembers | ⚡ Acts | 🔒 Stays Local |
|---|---|---|
| Long-term vector memory across every session | Runs shell commands, edits files, makes HTTP calls | SQLite + chromem-go on your disk. Zero telemetry. |

**Visual direction:**
- The word `ask` displayed in massive terminal font, cyan color, with a blinking cursor after it
- Feels like you just typed it into a terminal
- Below it — the three columns fade in
- Screenshot or mockup of the terminal running `ask --chat --agent --yolo`

**Speaker note:**
*"This is ask. Not another SaaS wrapper around GPT. A Go binary that lives on your machine, remembers your work, and can actually do things — with your approval."*

---
---

## SLIDE 4 — HOW WE'RE DIFFERENT
### "The Comparison That Wins"

**Section label:**
`// vs the world`

**Slide headline:**
> Everyone else built a smarter chatbot.
> We built a personal agent that lives in your terminal.

**Comparison table (ask vs competitors):**

| Feature | ChatGPT / Claude.ai | Claude Code / Codex | **ask** |
|---|---|---|---|
| Data stays local | ❌ Cloud only | ❌ Cloud only | ✅ Always |
| Long-term memory | ❌ Session only | ❌ No memory | ✅ Vector DB, persistent |
| Shell agent | ❌ No | ✅ Yes | ✅ Yes + approval gates |
| File read/write | ❌ No | ✅ Yes | ✅ Yes |
| Mobile interface | ❌ Web only | ❌ Terminal only | ✅ Telegram bot (shared memory) |
| Voice notes | ❌ No | ❌ No | ✅ ElevenLabs TTS + Telegram |
| Todos/Lists | ❌ No | ❌ No | ✅ Built-in local lists |
| Email (AgentMail) | ❌ No | ❌ No | ✅ Read/send/reply |
| Cost | $20+/mo subscription | $100-200/mo API usage | ✅ Just your Gemini API key |
| Open source | ❌ Closed | ❌ Closed | ✅ MIT Licensed |
| No telemetry | ❌ | ❌ | ✅ Zero. Just Go + SQLite. |

**Callout box at bottom:**
> *"Other tools give you AI. ask gives you an agent that works for you — not for a company's training pipeline."*

**Visual direction:**
- Clean table with alternating dark rows
- Green checkmarks pop in ask's column
- Highlight the entire ask column with a subtle cyan left border
- Bottom callout in a distinct bordered box

---
---

## SLIDE 5 — HOW IT WORKS
### "The Architecture Story"

**Section label:**
`// under the hood`

**Slide headline:**
> Three layers. Zero surprises.
> You always know where your data is.

**Visual — Two-zone diagram:**

```
┌──────────────────────────────────────────────────┐
│              YOUR MACHINE                         │
│                                                   │
│   ┌─────────────────┐   ┌─────────────────────┐  │
│   │  ~/.ask-go.db   │   │   ~/db (chromem-go) │  │
│   │  SQLite         │   │   Vector Memory DB  │  │
│   │  Chat history   │   │   Long-term context │  │
│   │  Lists & todos  │   │   Similarity search │  │
│   └─────────────────┘   └─────────────────────┘  │
│                                                   │
│   ┌────────────────────────────────────────────┐  │
│   │  ask binary (Go)                           │  │
│   │  REPL · Agent · Memory · Tools · Telegram  │  │
│   └────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────┘
              │ inference only │
              ▼ (stateless)   ▼
┌──────────────────────────────────────────────────┐
│           GOOGLE GEMINI API                       │
│   Your prompts. No storage. No training.          │
└──────────────────────────────────────────────────┘
```

**Three numbered steps below diagram:**

**① You ask something**
ask retrieves your top-5 most relevant memories from the local vector DB and injects them as context. The AI knows your history.

**② The AI responds (or acts)**
In agent mode, the AI can call tools: run a shell command, read a file, write code, make an HTTP call, send a Telegram message. Each action waits for your approval — unless you've enabled `--yolo`.

**③ Memory is saved**
Key facts from the conversation are extracted and stored locally. Next time you open a session — even days later — that context is there.

**Visual direction:**
- Two distinct zone boxes (YOUR MACHINE = dark + green tint, GEMINI = dark + purple tint)
- Arrow between them labeled "inference only — stateless"
- Numbered steps below as a clean horizontal flow

---
---

## SLIDE 6 — FEATURES SHOWCASE
### "The Arsenal"

**Section label:**
`// what it can do`

**Slide headline:**
> It's not a chatbot.
> It's an agent with a full toolkit.

**Six feature blocks in 2x3 grid:**

---

**🛠️ Shell Agent**
Run bash commands, get stdout/stderr back, loop until the task is done. Full approval gate — or `--yolo` for trusted environments.
`ask --chat --agent`

---

**🧠 Vector Memory**
Add memories explicitly or let the agent do it. Retrieve with similarity search. View, update, delete from CLI or Telegram.
`ask memories manage`

---

**📁 File Operations**
Read files (partial reads with line ranges), write with exact string replacement, and a diff preview before confirming every change.
`read_file · write_file`

---

**📱 Telegram Bot**
Run ask as a background Telegram bot. Same SQLite and vector memory as the CLI. Send voice notes, receive voice notes, share files. Your AI in your pocket.
`ask --background=true`

---

**🎤 Voice Notes**
The agent generates MP3 audio from any text response using ElevenLabs and delivers it to your Telegram. AI that literally speaks back.
`text_to_speech_file`

---

**📋 Lists & Email**
Local todo lists, persistent and agent-accessible. AgentMail integration for reading threads, replying, forwarding — from the terminal.
`lists · mail tools`

---

**Visual direction:**
- 2-column, 3-row card grid
- Each card: icon, title, 1-line description, mono-code tag at bottom
- Cards have subtle glow on hover (tell the AI tool to add animation)
- Dark surface background

---
---

## SLIDE 7 — LIMITATIONS & HONEST TAKE
### "We're Not Done Yet"

**Section label:**
`// what we know`

**Slide headline:**
> We're building in public.
> Here's what doesn't work yet.

**Left column — Current Limitations:**

**Memory is explicit, not automatic**
Memories don't auto-inject on every prompt right now. You call memory tools manually or via the agent. Automatic extraction is disabled by design — we chose simplicity first.

**Simple top-k retrieval**
No reranker. Memory retrieval is straight top-k cosine similarity from chromem-go. Works well, but smarter retrieval is on the roadmap.

**Gemini only (for now)**
Model support is currently limited to Google Gemini. Multi-model support (Claude, OpenAI, local via Ollama) is planned.

**No GUI**
Pure terminal. If you're not comfortable in a shell, ask isn't for you yet. A TUI (terminal UI) with Bubble Tea is on the roadmap.

**No team features**
This is a single-developer tool right now. Shared memory, team contexts, and collaboration are future territory.

**Right column — Why We're Honest About This:**

> *"We'd rather ship something real and tell you what's missing than oversell and underdeliver. Every limitation above is a known roadmap item, not a surprise."*

**Visual direction:**
- Split slide: left = limitation cards in muted red/orange tones
- Right = single bold callout quote in large white text on dark
- Section label at top in mono font
- Feels like a GitHub Issues page, but beautiful

---
---

## SLIDE 8 — THE FUTURE
### "Where This Is Going"

**Section label:**
`// roadmap`

**Slide headline:**
> The terminal is just the beginning.
> Here's what ask becomes next.

**Timeline / Roadmap (4 phases, left to right):**

---

**Phase 1 — Now ✅**
`What's shipped`
- REPL chat + one-shot mode
- Agent with 12+ tools
- Vector memory (explicit)
- Telegram bot + voice notes
- SQLite history
- Shell completions

---

**Phase 2 — Near Term 🔨**
`Next 3 months`
- Multi-model support (OpenAI, Claude, local Ollama)
- Auto memory extraction re-enabled with smart deduplication
- Memory reranker for better context retrieval
- TUI redesign with Bubble Tea
- `/memories` dashboard with search

---

**Phase 3 — Mid Term 🔭**
`3–6 months`
- Browser automation tool
- Code-aware memory (index repos, not just conversations)
- Scheduled/background agent tasks (cron-style)
- Plugin system for custom tools
- Multi-user / team shared memory

---

**Phase 4 — Long Term 🚀**
`The Vision`
- Fully offline mode with local LLM support (no API key needed)
- ask becomes your second brain — a personal knowledge graph that grows with every project, every conversation, every decision
- Not just a CLI. A local-first AI OS layer for developers.

---

**Bottom of slide — The closer:**

> *"Every great developer tool started as a script someone wrote for themselves.*
> *ask started the same way.*
> *The difference is — we're not keeping it to ourselves."*

**Visual direction:**
- Horizontal timeline with phase nodes connected by a glowing cyan line
- Each phase fades from dark (past) to bright (future)
- The final "vision" phase has a subtle radial glow behind it
- The closing quote is centered below, large, italicized, in white
- A faint terminal cursor blinks after the last word

---
---

## BONUS: SLIDE DESIGN PROMPTS TO GIVE KIMI K2

Paste this alongside the slide content:

```
Design this as a dark-theme developer tool presentation.
Background: #07090D (near black).
Primary accent: #00E5CC (cyan/teal).
Secondary accent: #7C3AED (purple).
Text: #E2E8F0 (light gray-white).
Muted text: #94A3B8.
Headings font: Space Grotesk or Syne, Bold, tight letter-spacing.
Body font: DM Sans, Light.
Code/labels: JetBrains Mono.

Style reference: Linear.app, Warp.dev, Vercel — clean, spacious, premium developer aesthetic.
No gradients on text. No neon overload. Minimal animations.
Each slide should feel like a well-designed GitHub README, not a startup pitch deck template.

Slide transitions: Fade only. No fly-ins or bounce effects.
Icons: Lucide or Phosphor icon set.
Charts/tables: Minimal, monochrome with one accent color highlight.
```

---

## PRESENTATION FLOW SUMMARY

| # | Slide | Emotion |
|---|---|---|
| 1 | The Hook | Curiosity / Recognition |
| 2 | The Problem | Frustration / Validation |
| 3 | Meet ask | Relief / Excitement |
| 4 | How We're Different | Confidence |
| 5 | How It Works | Trust |
| 6 | Features | Amazement |
| 7 | Limitations | Respect / Credibility |
| 8 | The Future | Inspiration |

**Total slides: 8**
**Estimated presentation time: 10–15 minutes**
**Tone: Honest. Technical. Story-driven. Not a sales pitch.**