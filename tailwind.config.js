/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: "#000000",
        surface: "#111111",
        surface2: "#1A1A1A",
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.03em',
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(255, 255, 255, 0.05)',
      }
    },
  },
  plugins: [],
}
