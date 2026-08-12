/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        dark: {
          950: '#050814',
          900: '#091124',
          800: '#0e1a38',
          700: '#142550',
          600: '#1d346e',
        },
        brand: {
          blue: '#3b82f6',
          'blue-dark': '#2563eb',
          'blue-light': '#60a5fa',
          cyan: '#06b6d4',
          'cyan-light': '#38bdf8',
          indigo: '#6366f1',
        }
      },
      boxShadow: {
        'glow-blue': '0 0 30px -5px rgba(59, 130, 246, 0.45)',
        'glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.4)',
        'glow-subtle': '0 0 20px -3px rgba(56, 189, 248, 0.25)',
        'card-hover': '0 20px 40px -15px rgba(37, 99, 235, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}