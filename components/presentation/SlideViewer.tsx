"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

// Base Slide Wrapper
export const SlideWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16 bg-bg text-text"
    >
      <div className="w-full max-w-6xl mx-auto relative h-full flex flex-col items-center justify-center">
         {children}
      </div>
    </motion.div>
  );
};

export function SlideViewer({ slides }: { slides: React.FC[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape") router.push("/");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, router]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="fixed inset-0 z-[100] bg-bg overflow-hidden flex flex-col font-body selection:bg-primary-dim selection:text-primary">
      {/* Header controls */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50">
        <button 
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-dim hover:text-text transition-colors focus-visible:outline-none"
        >
          <X size={24} />
          <span className="font-mono text-sm uppercase tracking-widest hidden sm:inline-block">Exit Presentation</span>
        </button>
        <div className="font-mono text-sm text-dim">
          <span className="text-primary font-bold">{(currentSlide + 1).toString().padStart(2, '0')}</span> / {slides.length.toString().padStart(2, '0')}
        </div>
      </div>

      {/* Main Slide Content area */}
      <div className="flex-1 relative mx-2 rounded-xl overflow-hidden mt-16 mb-24 cursor-pointer" onClick={nextSlide}>
        <AnimatePresence mode="wait">
          <CurrentSlideComponent key={currentSlide} />
        </AnimatePresence>
      </div>

      {/* Progress Bar & Bottom controls */}
      <div className="absolute bottom-0 left-0 w-full h-16 flex items-center justify-between px-6 z-50">
        <div className="flex items-center gap-4">
           <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} disabled={currentSlide === 0} className="text-dim hover:text-primary disabled:opacity-30 disabled:hover:text-dim transition-colors p-2"><ChevronLeft size={24} /></button>
           <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} disabled={currentSlide === slides.length - 1} className="text-dim hover:text-primary disabled:opacity-30 disabled:hover:text-dim transition-colors p-2"><ChevronRight size={24} /></button>
        </div>
        
        {/* Progress indicator bg-surface2 */}
        <div className="h-1 flex-1 max-w-sm mx-4 bg-border rounded-full overflow-hidden">
          <motion.div 
             className="h-full bg-primary"
             initial={{ width: 0 }}
             animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
             transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>
    </div>
  );
}