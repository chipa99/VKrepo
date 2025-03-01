/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      padding: {
        
        '2xl': '13rem',
      },
    },
    extend: {
      colors: {
        mainColor: `#447bba`,
        bgGray: `#dce1e6`,
        bgGrayActive: `#ccd2d9`
      }
    },
  },
  plugins: [],
}

