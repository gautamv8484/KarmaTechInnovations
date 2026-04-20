/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-purple': '#6C63FF',
        'cyber-blue': '#00D9FF',
        'coral-red': '#FF6B6B',
        // New Light mode variables
        'light-bg': '#F8FAFC',
        'surface-light': '#FFFFFF',
        'slate-text': '#0F172A',
        'slate-muted': '#64748B',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #6C63FF, #00D9FF)',
        'accent-gradient': 'linear-gradient(to right, #FF6B6B, #FFB347)',
        'light-gradient': 'linear-gradient(to bottom, #F8FAFC, #E2E8F0)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4))',
      },
      boxShadow: {
        'purple-glow': '0 10px 40px rgba(108,99,255,0.2)',
        'blue-glow': '0 10px 40px rgba(0,217,255,0.2)',
        'red-glow': '0 10px 40px rgba(255,107,107,0.2)',
        'soft': '0 20px 40px rgba(0,0,0,0.05)',
        'elegant': '0 8px 30px rgba(0,0,0,0.04)',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Outfit', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
