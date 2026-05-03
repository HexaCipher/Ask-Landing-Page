"use client";

import React from "react";
import { SlideWrapper } from "../SlideViewer";
import { motion } from "framer-motion";
import { Lock, Brain, Coins, Zap, Check, X } from "lucide-react";

export const Slide00TeamIntro = () => {
  return (
    <SlideWrapper>
      <div className="flex flex-col items-center justify-center text-center space-y-8">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="px-4 py-1.5 border border-primary/20 bg-primary-dim text-primary rounded-full font-mono text-sm tracking-widest uppercase mb-4"
        >
          {`// PROJECT INTRO`}
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-text">
          Project <span className="text-primary">ask</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-dim font-light max-w-2xl">
          Cloud intelligence. Local control. Built by team <span className="text-text font-medium">Jugaad Coder</span>.
        </p>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-8" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left mt-8">
          <div className="flex flex-col space-y-1">
            <span className="text-primary font-mono text-xs uppercase tracking-widest">Team Lead</span>
            <span className="text-lg text-text font-medium">Manish Yadav</span>
            <span className="text-sm text-dim font-mono">Researcher</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-purple font-mono text-xs uppercase tracking-widest">Member</span>
            <span className="text-lg text-text font-medium">Rajput Aman Singh</span>
            <span className="text-sm text-dim font-mono">UI & UX</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-purple font-mono text-xs uppercase tracking-widest">Member</span>
            <span className="text-lg text-text font-medium">Bhumika Mehra</span>
            <span className="text-sm text-dim font-mono">Researcher</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-purple font-mono text-xs uppercase tracking-widest">Member</span>
            <span className="text-lg text-text font-medium">Sumit Kumar</span>
            <span className="text-sm text-dim font-mono">Backend & Overall</span>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

export const Slide01Hook = () => {
  return (
    <SlideWrapper>
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full">
        <h2 className="text-5xl md:text-7xl font-bold font-display mb-6 tracking-tight leading-normal text-text py-2">
          You talk to AI all day.<br/>
          <span className="text-dim">But does it even know who you are?</span>
        </h2>
        <div className="mt-6 text-xl md:text-2xl text-dim font-light space-y-4 max-w-3xl leading-relaxed text-center mx-auto">
          <p>Every session starts from zero. Every chat you&apos;ve ever had — gone.</p>
          <p>You&apos;re not working with an assistant. <br/>You&apos;re talking to a very smart stranger. Every. Single. Day.</p>
        </div>
      </div>
    </SlideWrapper>
  );
};

export const Slide02Problem = () => {
  return (
    <SlideWrapper>
       <div className="w-full flex justify-start mb-6">
         <span className="text-dim font-mono text-sm tracking-widest uppercase">{"// the problem"}</span>
       </div>
       
       <div className="w-full flex-1 flex flex-col justify-center">
         <h2 className="text-4xl md:text-6xl font-bold font-display mb-10 tracking-tight text-text">
           AI tools are powerful.<br/>
           <span className="text-primary">Just not yours.</span>
         </h2>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-body">
           <div className="bg-surface shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_20px_-5px_rgba(0,0,0,0.05)] border border-border p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3 text-text flex items-center gap-2"><Lock className="w-5 h-5 text-red-500" /> Your Data Leaves</h3>
                <p className="text-dim text-sm leading-relaxed">
                  Everything you type goes to the cloud. Your most sensitive work is someone else&apos;s training data.
                </p>
              </div>
              <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-lg text-sm font-mono border border-red-100">
                34.8% of employee inputs contain sensitive data
              </div>
           </div>

           <div className="bg-surface shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_20px_-5px_rgba(0,0,0,0.05)] border border-border p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3 text-text flex items-center gap-2"><Brain className="w-5 h-5 text-yellow-500" /> No Memory</h3>
                <p className="text-dim text-sm leading-relaxed">
                  It forgets everything every time. You are always the one carrying the context. Every session is a blank slate.
                </p>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 text-yellow-600 rounded-lg text-sm font-mono border border-yellow-100">
                Zero continuity across sessions
              </div>
           </div>

           <div className="bg-surface shadow-[0_1px_3px_rgba(0,0,0,0.05),0_10px_20px_-5px_rgba(0,0,0,0.05)] border border-border p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3 text-text flex items-center gap-2"><Coins className="w-5 h-5 text-orange-500" /> Locked In</h3>
                <p className="text-dim text-sm leading-relaxed">
                  Expensive subscriptions and usage limits. You&apos;re renting intelligence you can&apos;t own or control.
                </p>
              </div>
              <div className="mt-6 p-4 bg-orange-50 text-orange-600 rounded-lg text-sm font-mono border border-orange-100">
                Usage bills easily exceed $100/mo
              </div>
           </div>
         </div>
       </div>
    </SlideWrapper>
  );
};

export const Slide03MeetAsk = () => {
    return (
      <SlideWrapper>
         <div className="w-full flex justify-start mb-4 tracking-widest uppercase">
           <span className="text-primary font-mono text-sm">{"// introducing"}</span>
         </div>
         
         <div className="w-full flex flex-col items-center justify-center text-center mt-4">
            <h2 className="text-7xl md:text-[90px] font-bold font-mono tracking-tighter flex items-center justify-center gap-4 mb-2 text-text">
              ask
              <motion.div 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                className="w-8 h-16 bg-primary"
              />
            </h2>
            <h3 className="text-2xl md:text-4xl font-display font-bold text-text mb-4">Cloud intelligence. Local control.</h3>
            <p className="text-lg text-dim max-w-3xl mb-8 leading-relaxed">
              A local-first, agentic CLI assistant built in Go. Your data stays on your machine. Your AI actually remembers you.
            </p>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl text-left border border-border shadow-sm rounded-2xl p-6 bg-surface">
              <div className="flex flex-col gap-2">
                 <h4 className="text-xl font-bold text-text flex items-center gap-2"><Brain className="w-5 h-5 text-purple" /> Remembers</h4>
                 <p className="text-dim text-sm">Long-term vector memory across every session so you don&apos;t repeat yourself.</p>
              </div>
              <div className="flex flex-col gap-2 border-l border-border pl-6">
                 <h4 className="text-xl font-bold text-text flex items-center gap-2"><Zap className="w-5 h-5 text-yellow-500" /> Acts</h4>
                 <p className="text-dim text-sm">Runs shell commands, edits files, and makes HTTP calls with your approval.</p>
              </div>
              <div className="flex flex-col gap-2 border-l border-border pl-6">
                 <h4 className="text-xl font-bold text-text flex items-center gap-2"><Lock className="w-5 h-5 text-green-500" /> Stays Local</h4>
                 <p className="text-dim text-sm">SQLite + chromem-go straight on your disk. Zero telemetry. Zero spying.</p>
              </div>
            </div>
         </div>
      </SlideWrapper>
    );
};

export const Slide04Comparison = () => {
    return (
      <SlideWrapper>
         <div className="w-full flex justify-center mb-4 tracking-widest uppercase">
           <span className="text-dim font-mono text-sm text-center">{"// vs the world"}</span>
         </div>
         
         <div className="w-full flex-1 flex flex-col items-center">
           <h2 className="text-2xl lg:text-3xl font-bold font-display mb-2 text-text text-center">
             Everyone else built a smarter chatbot.
           </h2>
           <p className="text-base text-dim mb-4 text-center max-w-2xl">We built a personal agent that lives in your terminal.</p>
           
           <div className="w-full max-w-5xl bg-surface/50 backdrop-blur-xl border border-border shadow-xl rounded-3xl overflow-hidden text-sm">
             <div className="grid grid-cols-12 bg-surface2/50 backdrop-blur-md px-6 py-3 text-xs font-mono text-dim border-b border-border uppercase tracking-wider">
                <div className="col-span-4">Core Feature</div>
                <div className="col-span-3 text-center">Web Chatbots</div>
                <div className="col-span-3 text-center">AI IDEs</div>
                <div className="col-span-2 text-center text-primary font-bold">ask (Go)</div>
             </div>
             
             {[
               { f: "Data stays local", c1: "Cloud Only", c2: "Cloud Only", a: "Always", c1Val: false, c2Val: false, aVal: true },
               { f: "Long-term memory", c1: "Session", c2: "None", a: "Vector DB", c1Val: false, c2Val: false, aVal: true },
               { f: "System Control", c1: "No", c2: "Yes", a: "Yes", c1Val: false, c2Val: true, aVal: true },
               { f: "Interface", c1: "Browser", c2: "Editor", a: "Anywhere", c1Val: false, c2Val: false, aVal: true },
               { f: "Ownership", c1: "Closed", c2: "Closed", a: "MIT", c1Val: false, c2Val: false, aVal: true }
             ].map((row, i) => (
                <div key={i} className="grid grid-cols-12 px-6 py-3 border-b border-border/40 hover:bg-surface2/40 transition-all items-center last:border-b-0 group">
                  <div className="col-span-4 font-medium text-text text-sm">{row.f}</div>
                  <div className="col-span-3 flex items-center justify-center gap-2 text-dim">
                    {row.c1Val ? <Check className="w-4 h-4 text-green-500 opacity-80" /> : <X className="w-4 h-4 text-red-400 opacity-60" />} <span>{row.c1}</span>
                  </div>
                  <div className="col-span-3 flex items-center justify-center gap-2 text-dim">
                    {row.c2Val ? <Check className="w-4 h-4 text-green-500 opacity-80" /> : <X className="w-4 h-4 text-red-400 opacity-60" />} <span>{row.c2}</span>
                  </div>
                  <div className="col-span-2 flex items-center justify-center">
                    <div className="w-full flex items-center justify-center gap-2 font-bold bg-primary/5 group-hover:bg-primary/10 border border-primary/20 px-2 py-1.5 rounded-xl text-primary shadow-[0_0_15px_rgba(var(--color-primary),0.05)] transition-all">
                      {row.aVal ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />} <span>{row.a}</span>
                    </div>
                  </div>
                </div>
             ))}
           </div>
           
           <div className="mt-6 max-w-3xl relative px-8 flex justify-center text-center">
             <div className="absolute top-0 left-4 text-primary/10 -translate-y-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
             </div>
             <p className="text-lg md:text-xl text-dim font-serif leading-relaxed italic relative z-10">
               Other tools give you AI. <span className="font-bold text-primary not-italic font-display text-xl md:text-2xl mx-1">ask</span> gives you an agent that works for you —<br/> not for a company&apos;s training pipeline.
             </p>
           </div>
         </div>
      </SlideWrapper>
    );
};