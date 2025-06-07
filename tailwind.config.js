/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        strongCyan: "hsl(171,66%,44%)", // not work...
        lightBlue: "hsl(233,100%,69%)",
        darkrayishBlue: "hsl(210,10%,33%)",
        grayishBlue: "hsl(201,11%,66%)",
        cyan: "hsl(180,66%,49%)",
        cyanLight: "hsl(180,66%,69%)",
        darkViolet: "hsl(257,27%,26%)",
        red: "hsl(0,87%,67%)",
        grayishViolet: "hsl(257,7%,63%)",
        veryDarkBlue: "hsl(255,11%,22%)",
        veryDarkViolet: "hsl(260,8%,14%)",
      },
      fontFamily: {
        sans: ["Bai Jamjuree", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        alta: ["Alata"],
        poppins: ["Poppins"],
        barlow: ["Barlow Semi Condensed"],
      },
      spacing: {
        180: "32rem", // need to check if it work
      },
      letterSpacing: {
        ultra: "0.5em", // not work...
      },
    },
  },
  plugins: [],
};
