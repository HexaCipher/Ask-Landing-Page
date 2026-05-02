import type { Metadata, Viewport } from "next";
import { Lora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const lora = Lora({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600'], 
  variable: '--font-display' 
});

const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500'], 
  variable: '--font-body' 
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600'], 
  variable: '--font-mono' 
});

export const metadata: Metadata = {
  title: 'ask — Cloud intelligence. Local control.',
  description: 'Local-first, agentic CLI assistant built in Go. Long-term memory, shell tool use, and streaming AI — with your data staying on your machine.',
  keywords: ['CLI', 'AI', 'terminal', 'Go', 'local', 'agent', 'open source', 'Gemini'],
  openGraph: {
    title: 'ask — Your terminal, now thinks.',
    description: 'Agentic CLI with long-term memory, shell tool use, and privacy-first architecture.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#07090D',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-bg text-text font-body antialiased relative min-h-screen selection:bg-primary/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
