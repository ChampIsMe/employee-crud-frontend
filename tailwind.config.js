/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#71309f',
        secondary:'#9b8ba2',
        tertiary:'#b98385',
        neutral:'#948f93',
        darkBackground:'#242335',
      }
    },
  },
  plugins: [],
  darkMode:"class",
}

