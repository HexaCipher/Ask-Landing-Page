import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:        '#FAFAFA',   // light elegant grey-white
        surface:   '#FFFFFF',   // pure white card background
        surface2:  '#F3F4F6',   // hover / gentle grey
        border:    '#E5E7EB',   // default light border
        border2:   '#D1D5DB',   // slightly stronger
        primary:   '#4F46E5',   // Quietude indigo/blue
        'primary-dim':'rgba(79,70,229,0.1)',
        cyan:      '#3B82F6',   // keeping cyan token alias for compatibility but making it blue
        'cyan-dim':'rgba(59,130,246,0.1)',
        purple:    '#6366F1',   // secondary accent 
        'purple-dim':'rgba(99,102,241,0.1)',
        green:     '#10B981',   
        'green-dim':'rgba(16,185,129,0.1)',
        dim:       '#6B7280',   // secondary text
        muted:     '#9CA3AF',   // placeholder
        text:      '#111827',   // very dark grey, nearly black
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        'elegant': '0 4px 20px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'elegant-hover': '0 10px 30px rgba(0, 0, 0, 0.06), 0 2px 5px rgba(0, 0, 0, 0.03)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        blink: 'blink 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
export default config;
