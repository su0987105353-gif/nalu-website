/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'neon': '#f3ff00',
        'neon-dark': '#dcee00',
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  }
}
