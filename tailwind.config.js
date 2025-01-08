/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "480px" },
        sm: { max: "768px" },
        md: { max: "1024px" },
        lg: { max: "1440px" },
      },
      colors: {
        'custom-dark': '#231F20', // Define your custom color
      },
    },
  },
  plugins: [],
}

