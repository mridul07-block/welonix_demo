/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#07090d',
        primary: '#FFFFFF',
        accent: '#00e5c3',
        'accent-2': '#0094ff',
        'accent-dim': '#00b4a0',
        dark: '#07090d',
        card: '#0c1018',
        'section-alt': '#0a0d14',
        secondary: '#8892a4',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
      },
      backgroundImage: {
        'gradient-card': 'linear-gradient(135deg, #0e1520 0%, #0c1018 100%)',
        'gradient-hero': 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(0,229,195,0.06) 0%, transparent 60%)',
        'gradient-cta': 'linear-gradient(135deg, #00e5c3 0%, #0094ff 100%)',
        'gradient-heading': 'linear-gradient(135deg, #ffffff 30%, #00e5c3 100%)',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(0, 229, 195, 0.15)',
        'glow-md': '0 0 40px rgba(0, 229, 195, 0.2)',
        'glow-lg': '0 0 80px rgba(0, 229, 195, 0.25)',
        'card': '0 20px 60px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
