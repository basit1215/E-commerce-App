/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '425px',
        xxs: '375px', 
        xxxs: '320px', 
      },
    },
  },
  plugins: [],
}

