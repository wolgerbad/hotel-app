/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.vue", 
  ],

  theme: {
    extend: {},
    boxShadow: {
      "3xl" : "3px 2px 25px 0px rgba(0, 0, 0, 0.35)"
    }

  },
  plugins: [],
}

