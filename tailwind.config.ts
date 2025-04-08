import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['var(--font-orbitron)'],
        michroma: ['var(--font-michroma)'],
        cairo: ['var(--font-cairo)'],
      },
      animation: {
        twinkle: 'twinkle 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-in-out forwards',
        'fly-across': 'fly-across 15s linear infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fly-across': {
          '0%': { transform: 'translateX(-100%) translateY(0)', opacity: '0' },
          '10%': { opacity: '0.9' },
          '45%': { transform: 'translateX(-20%) translateY(-20%)', opacity: '0.9' },
          '50%': { transform: 'translateX(0%) translateY(-25%)' },
          '55%': { transform: 'translateX(20%) translateY(-20%)' },
          '90%': { opacity: '0.9' },
          '100%': { transform: 'translateX(100%) translateY(0)', opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
    },
  },
  plugins: [],
};

export default config; 