/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8', // Matches #4da8ff approximately
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
        michroma: ['var(--font-michroma)', 'monospace'],
        orbitron: ['var(--font-orbitron)', 'sans-serif'],
        cairo: ['var(--font-cairo)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'slide-in-left': 'slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'fly-across': 'fly-across 30s linear infinite',
      },
    },
  },
  safelist: [
    'font-michroma',
    'font-orbitron',
    'font-cairo',
    'animate-fade-in',
    'animate-fade-in-up',
    'animate-slide-in-right',
    'animate-slide-in-left',
    'animate-twinkle',
    'animate-fly-across',
  ],
  plugins: [],
} 