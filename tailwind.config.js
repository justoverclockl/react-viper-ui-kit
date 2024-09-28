/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "rv-",
  theme: {
    extend: {
      colors: {
        primary: "#b353f5",
        secondary: "#312839",
        primarytext: "#ae9cda"
      }
    },
  },
  plugins: [],
}
