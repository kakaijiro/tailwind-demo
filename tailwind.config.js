/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,tsx}"],
  // darkMode: "class", // v4 or later doesn't require this
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
        darkBlue: "hsl(217,28%,15%)",
        darkBlue1: "hsl(218,28%,13%)",
        darkBlue2: "hsl(216,53%,9%)",
        darkBlue3: "hsl(219,30%,18%)",
        accentCyan: "hsl(176,68%,64%)",
        accentBlue: "hsl(198,60%,50%)",
        lightRed: "hsl(0,100%,63%)",
        softBlue: "hsl(231,69%,60%)",
        softRed: "hsl(0,94%,66%)",
        grayishBlue2: "hsl(229,8%,60%)",
        veryDarkBlue2: "hsl(229,31%,21%)",
      },
      fontFamily: {
        sans: ["Bai Jamjuree", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        alta: ["Alata"],
        poppins: ["Poppins"],
        barlow: ["Barlow Semi Condensed"],
        raleway: ["Raleway"],
        opensans: ["Open Sans"],
        rubik: ["Rubik"],
      },
      backgroundImage: (theme) => ({
        "logo-dark-mode": "url('/fylo/logo-dark-mode.svg')", // not work...
        "logo-light-mode": "url('/fylo/logo-light-mode.svg')",
        "curvy-dark-mode": "url('/fylo/bg-curvy-dark-mode.svg')",
        "curvy-light-mode": "url('/fylo/bg-curvy-light-mode.svg')",
        dots: "url('/bookmark/bg-dots.svg')",
      }),
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
