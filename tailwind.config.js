/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryDark:'#2f004d',
        primary:'#71309f',
        secondary:'#9b8ba2',
        tertiary:'#b98385',
        neutral:'#948f93',
        darkBackground:'#242335',
      }
    },
    screens: {
      'xs': '150px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
  darkMode:"class",
}

