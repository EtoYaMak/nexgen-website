/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Open: ["Open Sans", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Nothing: ["Nothing You Could Do", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
