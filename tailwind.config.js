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
    extend: {
      colors: {
        background: "#08080b",
        surface: "#111115",
        surface2: "#18181c",
        brand: {
          light: "#E1E1E6",
          blue: "#4a72ff",
          purple: "#7c4aef"
        }
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(124, 74, 239, 0.15)',
      }
    },
  },
  plugins: [],
}
