/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: {
          base: "#fff",
          ligth: "#FAFBFF",
        },
        black: {
          base: "#000",
          ligth: "#1A1A1A",
        },
        blue: {
          base: "#4079ff",
        },
        green: {
          base: "#40ffaa",
        },
        gray: {
          base: "#F0F0F0",
          ligth: "#5F5F67",
        },
        red: {
          base: "#FF5252",
        },
      },
      spacing: {
        7.5: "30px",
        15: "60px",
        25: "100px",
        112.5: "450px",
        125: "500px",
        150: "600px",
        280: "1120px",
      },
      maxWidth: {
        250: "1000px",
        360: "1440px",
      },
      boxShadow: {
        neumorphic: "10px 10px 20px #bebebe, -10px -10px 20px #ffffff",
      },
      backgroundImage: (theme) => ({
        "green-blue-gradient": `linear-gradient(to right, ${theme(
          "colors.blue.base"
        )}, ${theme("colors.green.base")})`,
      }),
      borderRadius: {
        30: "30px",
      },
      screens: {
        default: "0px",
        xs: "600px",
        md: "900px",
        xl: "1280px",
      },
    },
    plugins: [],
  },
};
