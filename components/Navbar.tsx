"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "How it works", href: "/#how-it-works" },
    { name: "Architecture", href: "/#architecture" },
    { name: "Presentation", href: "/presentation" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "bg-bg/80 backdrop-blur-xl border-b border-border shadow-sm" : "bg-transparent border-transparent"
      }`}
    >
      <div className="h-full flex items-center justify-between px-6 lg:px-10 max-w-6xl mx-auto">
        {/* Left — Logo block */}
        <a href="/" className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded">
          <Image src="/ask_logo.png" alt="Ask CLI Logo" width={180} height={64} className="h-12 sm:h-16 w-auto object-contain scale-110 origin-left" />
        </a>

        {/* Center — Nav links (hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-body text-[14px] font-medium text-dim hover:text-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded px-2 py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://github.com/real-zephex/ask-go"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[14px] font-medium text-dim hover:text-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded px-2 py-1"
          >
            GitHub
          </a>
        </nav>

        {/* Right — CTA button */}
        <div className="hidden md:block">
          <a
            href="#install"
            className="inline-block font-body text-[14px] font-medium bg-text text-bg px-5 py-2 rounded-full hover:opacity-90 transition shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/50"
          >
            Install Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-text p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-surface border-b border-border shadow-lg">
          <nav className="flex flex-col p-4 bg-surface">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-[15px] font-medium text-dim hover:text-text hover:bg-surface2 px-4 py-3 rounded-lg transition-colors border-b border-border/50 last:border-none"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://github.com/real-zephex/ask-go"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[15px] font-medium text-dim hover:text-text hover:bg-surface2 px-4 py-3 rounded-lg transition-colors border-b border-border/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GitHub
            </a>
            <div className="mt-4 px-4 pt-2">
              <a
                href="#install"
                className="block text-center font-body text-[15px] font-medium bg-text text-bg px-4 py-3 rounded-full shadow-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Install Now
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
