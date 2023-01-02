/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-400": "#ccb260",
        "secondary-400": "#2f374a",
      },
    },
  },
  plugins: [],
};
