/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      /**
       * ===========================================
       * DESIGN SYSTEM - benjaminreder.de
       * ===========================================
       *
       * COLOR PALETTE:
       * - primary (teal): #2a8a8a - Use for links, buttons, accents
       * - accent (amber): hsl(35 90% 55%) - Use sparingly for highlights
       * - background: Warm cream/white base
       * - foreground: Dark slate for text
       *
       * PAGE THEMES:
       * - Light pages (index, impressum, datenschutz, books, quotes):
       *   Use design tokens (text-foreground, text-muted-foreground, etc.)
       * - Dark pages (projekte, blog, lebenslauf):
       *   Use glass-card with text-white/XX for readability on dark backgrounds
       *
       * USAGE GUIDELINES:
       * - Links: text-primary hover:underline
       * - Highlighted headings: text-gradient (teal→amber gradient)
       * - Light pages: text-muted-foreground for muted text
       * - Dark pages: text-white/60 for muted text on glass-card
       * - Cards: bg-card with shadow-soft (light) or glass-card (dark)
       * - Hover effects: card-hover class
       *
       * DO NOT USE:
       * - text-amber-* or text-orange-* directly (use text-primary instead)
       * - gradient-text (deprecated, use text-gradient instead)
       * ===========================================
       */
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        // Primary brand color - Deep Teal
        primary: {
          DEFAULT: 'hsl(185 60% 35%)',
          50: '#f0fdfd',
          100: '#ccfbf9',
          200: '#99f4f1',
          300: '#5ee6e1',
          400: '#2acfca',
          500: '#2a8a8a', // Main primary
          600: '#1f7070',
          700: '#1c5a5a',
          800: '#1b4848',
          900: '#1a3c3c',
          foreground: 'hsl(40 30% 98%)',
        },
        // Accent color - Warm Amber (use sparingly)
        accent: {
          DEFAULT: 'hsl(35 90% 55%)',
          foreground: 'hsl(220 20% 10%)',
        },
        // Background colors
        background: 'hsl(40 30% 98%)',
        foreground: 'hsl(220 20% 15%)',
        // Card colors
        card: {
          DEFAULT: 'hsl(40 25% 96%)',
          foreground: 'hsl(220 20% 15%)',
        },
        // Secondary colors
        secondary: {
          DEFAULT: 'hsl(40 20% 92%)',
          foreground: 'hsl(220 20% 15%)',
        },
        // Muted colors
        muted: {
          DEFAULT: 'hsl(40 15% 90%)',
          foreground: 'hsl(220 10% 45%)',
        },
        // Border color
        border: 'hsl(40 20% 88%)',
      },
      boxShadow: {
        soft: '0 4px 20px hsl(220 20% 15% / 0.08)',
        card: '0 8px 30px hsl(220 20% 15% / 0.1)',
      },
    },
  },
  plugins: [],
};
