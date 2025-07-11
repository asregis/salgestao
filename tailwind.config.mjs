/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        'dark-bg': '#0A0A0B',
        'dark-surface': '#1A1A1B',
        'dark-card': '#2A2A2B',
        'dark-border': '#3A3A3B',
        'dark-text': '#E5E5E5',
        'dark-text-secondary': '#B0B0B0',
        // Brand colors adapted for dark
        'sal-green': '#1A5A47',
        'sal-green-light': '#2A6A57',
        'sal-beige': '#C4A570',
        'sal-gold': '#E0C589',
        'sal-accent': '#4FFFB0',
      },
      fontFamily: {
        'primary': ['Rubik', 'sans-serif'],
        'secondary': ['Open Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(79, 255, 176, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(79, 255, 176, 0.6)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}