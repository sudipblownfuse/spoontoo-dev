/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-title)", "cursive"], // Custom font from CSS variable
        montserrat: ["var(--font-montserrat)", "sans-serif"], // Google Font
      },
      colors:{
        primary: "#101010",
        secondary: "#D62828"
      },
    },
  },
  plugins: [],
}