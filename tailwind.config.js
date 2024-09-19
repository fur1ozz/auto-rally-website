/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        racing: ['Racing Sans One', 'sans-serif'],
        descFont: ['Roboto', 'sans-serif'],
        containerHeading: ['Rajdhani', 'sans-serif'], // using for headings on containers
        chakra: ['Chakra Petch', 'sans-serif'], //squared edges, used in participants cont
      },
      colors: {
        rally: {
          text: "var(--rally-100)",
          background: "var(--rally-200)",
          primary: "var(--rally-300)",
          secondary: "var(--rally-400)",
          accent: "var(--rally-500)",
        },
        interfaceBar: {
          purple: "#f0f2fe",
          gray: "#f0f2fe",
        }
      },
      keyframes: {
        flash: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        }
      },
      animation: {
        flash: 'flash 1.5s linear infinite',
      },
    },
  },
  plugins: [],
}