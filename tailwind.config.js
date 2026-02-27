/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        'neon': '#f3ff00',
        'neon-dark': '#dcee00',
        'nile-blue': '#0a4a7a',
      },
      backgroundColor: {
        'ultra-dark': '#1a1a1a',
      },
      textColor: {
        'ultra-dark': '#1a1a1a',
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  }
}
