/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: { marginTop: "1.5em" },
            h2: { marginTop: "1.5em" },
            h3: { marginTop: "1.25em" },
            p: { marginTop: "1em", marginBottom: "1em" }
          }
        }
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography")
  ]
};