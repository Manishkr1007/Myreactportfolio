/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "100px",
      md: "400px",
      lg: "768px",
    },
    extend: {
      transform: ["hover", "focus"],
      fontFamily: {
        burtons: "burtons",
        pacifico: "pacifico",
      },
    },
  },
  plugins: [],
};
