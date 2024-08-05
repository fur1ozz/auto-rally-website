/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        topper: ['Poppins', 'sans-serif'],
        racing: ['Racing Sans One', 'sans-serif'],
        descFont: ['Roboto', 'sans-serif'],
      },
      colors: {
        rally: {
          text: "var(--rally-100)",
          background: "var(--rally-200)",
          primary: "var(--rally-300)",
          secondary: "var(--rally-400)",
          accent: "var(--rally-500)",
        },
      },
    },
  },
  plugins: [],
}