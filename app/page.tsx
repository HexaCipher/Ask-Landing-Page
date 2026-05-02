import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MarqueeBelt } from "@/components/MarqueeBelt";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Architecture } from "@/components/Architecture";
import { CommandsShowcase } from "@/components/CommandsShowcase";
import { InstallCTA } from "@/components/InstallCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-body text-text bg-bg selection:bg-cyan/30 selection:text-cyan w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <MarqueeBelt />
      <Features />
      <HowItWorks />
      <Architecture />
      <CommandsShowcase />
      <InstallCTA />
      <Footer />
    </main>
  );
}
