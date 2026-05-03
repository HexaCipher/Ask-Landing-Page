"use client";

import React from "react";
import { SlideWrapper } from "../SlideViewer";
import { motion } from "framer-motion";
import { Terminal, Brain, Folder, Smartphone, Mic, ListTodo } from "lucide-react";

export const Slide05Architecture = () => {
    return (
      <SlideWrapper>
         <div className="w-full flex justify-start mb-4 tracking-widest uppercase">
           <span className="text-dim font-mono text-sm">{"// under the hood"}</span>
         </div>
         
         <div className="w-full flex flex-col items-center">
           <h2 className="text-3xl md:text-4xl font-bold font-display mb-2 text-center text-text">
             Three layers. Zero surprises.
           </h2>
           <p className="text-lg text-dim mb-6 text-center w-full">You always know where your data is.</p>
           
           <div className="flex flex-col items-center w-full max-w-4xl relative">
              
              {/* TOP: LOCAL */}
              <motion.div 
                 initial={{ opacity: 0, y: -20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 className="w-full bg-primary-dim border border-primary/20 rounded-2xl p-5 relative overflow-hidden shadow-sm"
              >
                  <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                     <span className="font-mono text-[80px] leading-none font-bold text-primary">LOCAL</span>
                  </div>
                  <h3 className="font-mono text-primary mb-4 flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span>YOUR MACHINE</h3>
                  
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                     <div className="bg-surface border border-border shadow-sm p-4 rounded-xl">
                        <h4 className="text-lg mb-1 font-bold font-mono text-text">~/.ask-go.db</h4>
                        <p className="text-sm text-dim">SQLite • Chat history • Lists & todos</p>
                     </div>
                     <div className="bg-surface border border-border shadow-sm p-4 rounded-xl">
                        <h4 className="text-lg mb-1 font-bold font-mono text-text">~/db (chromem-go)</h4>
                        <p className="text-sm text-dim">Vector Memory DB • Long-term context</p>
                     </div>
                     <div className="col-span-2 bg-surface2 border border-border shadow-sm p-4 rounded-xl text-center">
                        <h4 className="text-lg mb-1 font-bold font-mono text-primary">ask binary (Go)</h4>
                        <p className="text-sm text-dim">REPL • Agent • Memory Tools • Telegram Hook</p>
                     </div>
                  </div>
              </motion.div>

              {/* ARROW */}
              <motion.div 
                 initial={{ height: 0, opacity: 0 }}
                 animate={{ height: 32, opacity: 1 }}
                 transition={{ delay: 0.6, duration: 0.5 }}
                 className="w-px bg-gradient-to-b from-primary to-purple relative my-2"
              >
                  <div className="absolute top-1/2 left-4 -translate-y-1/2 whitespace-nowrap text-xs font-mono text-dim">
                     inference only (stateless)
                  </div>
              </motion.div>

              {/* BOTTOM: CLOUD */}
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.8 }}
                 className="w-full bg-purple-dim border border-purple/20 rounded-2xl p-5 relative shadow-sm"
              >
                  <h3 className="font-mono text-purple mb-2 flex items-center gap-2"><span className="w-2 h-2 bg-purple rounded-full"></span>GOOGLE GEMINI API</h3>
                  <p className="text-sm text-text max-w-sm relative z-10">Your prompts go here. No storage. No training pipeline. Purely functional inference.</p>
              </motion.div>
           </div>
         </div>
      </SlideWrapper>
    );
};

export const Slide06Features = () => {
  const feats = [
    { icon: <Terminal className="w-5 h-5 text-primary" />, t: "Shell Agent", d: "Run bash commands, get stdout/stderr, loop till done. Full approval or --yolo.", c: "ask --chat --agent" },
    { icon: <Brain className="w-5 h-5 text-purple" />, t: "Vector Memory", d: "Add memories explicitly or let agent do it. Local similarity search.", c: "ask memories manage" },
    { icon: <Folder className="w-5 h-5 text-yellow-500" />, t: "File Operations", d: "Read parts of files. Write exact replacements. Diff preview before confirm.", c: "read_file · write_file" },
    { icon: <Smartphone className="w-5 h-5 text-blue-500" />, t: "Telegram Bot", d: "Run ask as background Telegram bot with same memory. Your agent in pocket.", c: "ask --background" },
    { icon: <Mic className="w-5 h-5 text-red-400" />, t: "Voice Notes", d: "Agent generates MP3 audio from text using ElevenLabs to Telegram.", c: "text_to_speech" },
    { icon: <ListTodo className="w-5 h-5 text-green-500" />, t: "Lists & Email", d: "Local todo list sync + AgentMail integration for terminal inbox control.", c: "lists · mail tools" }
  ];

  return (
    <SlideWrapper>
       <div className="w-full flex justify-start mb-1 tracking-widest uppercase">
         <span className="text-primary font-mono text-xs">{"// what it can do"}</span>
       </div>
       <div className="w-full flex flex-col items-center">
         <h2 className="text-xl md:text-2xl font-bold font-display mb-1 text-center text-text">It&apos;s not a chatbot.</h2>
         <p className="text-sm text-dim mb-4 text-center w-full">It&apos;s an agent with a full toolkit.</p>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-5xl">
            {feats.map((f, idx) => (
              <motion.div 
                 key={idx}
                 whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)" }}
                 className="group bg-surface border border-border hover:border-primary/30 rounded-xl p-3 flex flex-col justify-between transition-all"
              >
                  <div>
                    <div className="mb-2 p-1.5 bg-surface2 rounded-lg inline-block">{f.icon}</div>
                    <h3 className="text-sm font-bold text-text mb-1">{f.t}</h3>
                    <p className="text-dim text-xs leading-snug mb-2">{f.d}</p>
                  </div>
                  <div className="mt-auto px-2 py-1.5 bg-surface2 rounded-lg text-[11px] font-mono text-dim group-hover:text-primary transition-colors border border-transparent group-hover:border-primary/20">
                     {f.c}
                  </div>
              </motion.div>
            ))}
         </div>
       </div>
    </SlideWrapper>
  );
};

export const Slide07Limitations = () => {
    return (
      <SlideWrapper>
         <div className="w-full flex justify-start mb-4 tracking-widest uppercase">
           <span className="text-red-500 font-mono text-sm">{"// what we know"}</span>
         </div>
         
         <div className="w-full">
           <h2 className="text-4xl font-bold font-display mb-2 text-text">We&apos;re building in public.</h2>
           <p className="text-xl text-dim mb-8">Here&apos;s what doesn&apos;t work yet.</p>
           
           <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full max-w-6xl">
              <div className="md:col-span-3 grid grid-cols-1 gap-3">
                 {[
                   { t: "Memory is explicit", d: "No auto-inject every prompt. We chose simplicity first. You decide when to remember." },
                   { t: "Simple Top-K Retrieval", d: "No reranker. Cosine similarity only. Smarter retrieval is coming." },
                   { t: "Gemini Only", d: "Model support is restricted to Gemini. OpenAI, Claude, and local Ollama are next." },
                   { t: "No GUI (Yet)", d: "Pure terminal. If you don&apos;t like the shell, this isn&apos;t for you. TUI planned." }
                 ].map((lim, i) => (
                   <div key={i} className="flex flex-col border-l-2 border-red-200 hover:border-red-500 pl-5 py-2 transition-colors">
                      <h4 className="text-lg font-bold text-text mb-1">{lim.t}</h4>
                      <p className="text-dim text-sm">{lim.d}</p>
                   </div>
                 ))}
              </div>

              <div className="md:col-span-2 flex items-center">
                 <div className="bg-red-50 border border-red-100 p-6 rounded-2xl w-full">
                    <p className="text-lg font-serif italic tracking-tight text-red-900 leading-relaxed">
                       &quot;We&apos;d rather ship something real and tell you what&apos;s missing than oversell and underdeliver. Every limitation here is a known roadmap item, not a surprise.&quot;
                    </p>
                 </div>
              </div>
           </div>
         </div>
      </SlideWrapper>
    );
};

export const Slide08Roadmap = () => {
    return (
      <SlideWrapper>
         <div className="w-full flex justify-start mb-4 tracking-widest uppercase">
           <span className="text-purple font-mono text-sm">{"// roadmap"}</span>
         </div>
         
         <div className="w-full flex flex-col items-center">
           <h2 className="text-4xl font-bold font-display mb-2 text-center text-text">The terminal is just the beginning.</h2>
           <p className="text-xl text-dim mb-8 text-center w-full">Here&apos;s what Ask becomes next.</p>
           
           {/* Timeline visualization */}
           <div className="w-full relative py-4 px-4 max-w-6xl">
              <div className="absolute top-8 left-0 w-full h-1 bg-primary/20 z-0"></div>
              
              <div className="grid grid-cols-4 gap-4 md:gap-8 relative z-10 w-full">
                 <div className="flex flex-col">
                    <div className="w-5 h-5 rounded-full bg-primary border-4 border-bg mb-4 mx-auto shadow-sm"></div>
                    <div className="text-center">
                       <div className="font-mono text-[10px] md:text-xs text-primary mb-1 tracking-widest">PHASE 1</div>
                       <h4 className="text-lg md:text-xl font-bold text-text mb-3">Now</h4>
                       <ul className="text-dim text-xs md:text-sm space-y-1 md:space-y-2 text-left border-t border-border pt-3">
                          <li>• Agent + Vector Memory</li>
                          <li>• SQLite History</li>
                          <li>• Telegram Bot</li>
                       </ul>
                    </div>
                 </div>

                 <div className="flex flex-col">
                    <div className="w-5 h-5 rounded-full bg-primary border-4 border-bg mb-4 mx-auto shadow-sm"></div>
                    <div className="text-center">
                       <div className="font-mono text-[10px] md:text-xs text-primary mb-1 tracking-widest">PHASE 2</div>
                       <h4 className="text-lg md:text-xl font-bold text-text mb-3">Near Term</h4>
                       <ul className="text-dim text-xs md:text-sm space-y-1 md:space-y-2 text-left border-t border-border pt-3">
                          <li>• Multi-model support</li>
                          <li>• Memory Auto-extract</li>
                          <li>• Bubble Tea TUI</li>
                       </ul>
                    </div>
                 </div>

                 <div className="flex flex-col">
                    <div className="w-5 h-5 rounded-full bg-primary border-4 border-bg mb-4 mx-auto shadow-sm"></div>
                    <div className="text-center">
                       <div className="font-mono text-[10px] md:text-xs text-primary mb-1 tracking-widest">PHASE 3</div>
                       <h4 className="text-lg md:text-xl font-bold text-text mb-3">Mid Term</h4>
                       <ul className="text-dim text-xs md:text-sm space-y-1 md:space-y-2 text-left border-t border-border pt-3">
                          <li>• Browser automation</li>
                          <li>• Code-aware context</li>
                          <li>• Multi-user shared</li>
                       </ul>
                    </div>
                 </div>

                 <div className="flex flex-col group">
                    <div className="w-5 h-5 rounded-full bg-primary border-4 border-bg mb-4 mx-auto shadow-sm"></div>
                    <div className="text-center">
                       <div className="font-mono text-[10px] md:text-xs text-primary mb-1 tracking-widest">PHASE 4</div>
                       <h4 className="text-lg md:text-xl font-bold text-text mb-3">The Vision</h4>
                       <ul className="text-dim text-xs md:text-sm space-y-1 md:space-y-2 text-left border-t border-border pt-3">
                          <li>• Fully offline (Ollama)</li>
                          <li>• 2nd brain local AI OS</li>
                       </ul>
                    </div>
                 </div>
              </div>
           </div>

           <div className="mt-8 md:mt-12 font-serif italic text-lg md:text-xl text-text tracking-widest text-center max-w-3xl opacity-80 px-4">
              <span className="text-primary">&quot;</span>Every great developer tool started as a script someone wrote for themselves. We&apos;re just not keeping it to ourselves.<span className="text-primary">&quot;</span>
              <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }} className="inline-block w-2 md:w-3 h-4 md:h-6 bg-text ml-2 align-middle"></motion.span>
           </div>
         </div>
      </SlideWrapper>
    );
};

export const Slide09BusinessModel = () => {
    return (
      <SlideWrapper>
         <div className="w-full flex justify-start mb-4 tracking-widest uppercase">
           <span className="text-green-500 font-mono text-sm">{"// business model"}</span>
         </div>
         
         <div className="w-full flex flex-col pt-2">
           <h2 className="text-4xl md:text-5xl font-bold font-display mb-10 tracking-tight text-text">
             Our Monetization Strategy
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
             
             {/* Phase 0 */}
             <div className="bg-surface shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-border p-6 rounded-2xl flex flex-col h-full relative">
                <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                   <span className="font-mono text-6xl font-bold text-text">0</span>
                </div>
                <div className="mb-4">
                  <span className="px-3 py-1 font-mono text-xs uppercase tracking-widest bg-dim/10 text-dim rounded-full mb-3 inline-block">Phase 0: Current</span>
                  <h3 className="text-xl font-bold text-text mb-2">BYOK (Bring Your Own Key)</h3>
                  <p className="text-sm text-dim leading-relaxed">
                    Users provide their own API keys and pay their provider directly for usage.
                  </p>
                </div>
                <div className="mt-auto p-4 bg-surface2/50 rounded-xl border border-border">
                  <h4 className="text-xs font-bold font-mono text-text mb-1 flex items-center gap-1 uppercase tracking-wider">The Problem</h4>
                  <p className="text-xs text-dim leading-relaxed">
                    Agent quality heavily depends on the user&apos;s chosen model. It works for now, but creates inconsistent experiences.
                  </p>
                </div>
             </div>

             {/* Phase 1 */}
             <div className="bg-surface shadow-md border border-primary/30 p-6 rounded-2xl flex flex-col h-full relative transform md:-translate-y-2">
                <div className="absolute top-0 right-0 p-4 opacity-[0.05]">
                   <span className="font-mono text-6xl font-bold text-primary">1</span>
                </div>
                <div className="mb-4">
                  <span className="px-3 py-1 font-mono text-xs uppercase tracking-widest bg-primary/10 text-primary rounded-full mb-3 inline-block">Phase 1: Next</span>
                  <h3 className="text-xl font-bold text-text mb-2">Own Inference &amp; OSS</h3>
                  <p className="text-sm text-dim leading-relaxed">
                    Hosting top open-source models (Qwen, Kimi, Minmax) which offer a great balance of cost and capability.
                  </p>
                </div>
                <div className="mt-auto p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <h4 className="text-xs font-bold font-mono text-primary mb-1 flex items-center gap-1 uppercase tracking-wider">Pricing Target</h4>
                  <p className="text-sm font-bold text-text mb-1">Rs. 1,000 - 1,500 / month</p>
                  <p className="text-xs text-dim">Predictable premium tier with hosted OSS models.</p>
                </div>
             </div>

             {/* Phase 2 */}
             <div className="bg-surface shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-border p-6 rounded-2xl flex flex-col h-full relative">
                <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                   <span className="font-mono text-6xl font-bold text-text">2</span>
                </div>
                <div className="mb-4">
                  <span className="px-3 py-1 font-mono text-xs uppercase tracking-widest bg-purple/10 text-purple rounded-full mb-3 inline-block">Phase 2: Future</span>
                  <h3 className="text-xl font-bold text-text mb-2">Premium Proprietary Tier</h3>
                  <p className="text-sm text-dim leading-relaxed">
                    Testing bleeding-edge models like GPT-5.4, GPT-5.5, or Opus 4.7 based on user demand and feedback.
                  </p>
                </div>
                <div className="mt-auto p-4 bg-red-50/50 rounded-xl border border-red-100 dark:bg-red-900/10 dark:border-red-900/30">
                  <h4 className="text-xs font-bold font-mono text-red-600 mb-1 flex items-center gap-1 uppercase tracking-wider">The Challenge</h4>
                  <p className="text-sm font-bold text-text mb-1">~ Rs. 4,000 - 5,000 / month</p>
                  <p className="text-xs text-dim">
                    Extremely high costs due to steep USD-to-INR conversions. Exact pricing to be decided based on viability.
                  </p>
                </div>
             </div>

           </div>
         </div>
      </SlideWrapper>
    );
};