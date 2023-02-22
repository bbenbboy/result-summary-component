/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*{html,js}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      colors: {
        pri: {
          LightRed: "hsl(0, 100%, 67%)",
          OrangeyYellow: "hsl(39, 100%, 56%)",
          GreenTeal: "hsl(166, 100%, 37%)",
          CobaltBlue: "hsl(234, 85%, 45%)",
          linearSlateBlue: "#7857FF",
          linearRoyalBlue: "#2E2BE9",
          linearCircleViolet: "#4E21CA",
          linearCirclePersian: "#2421CA",
        },
        neutral: {
          PaleBlue: "hsl(221, 100%, 96%)",
          LightLavender: "hsl(241, 100%, 89%)",
          DarkGrayBlue: "hsl(224, 30%, 27%)",
        },
      },
      fontFamily: {
        hankenBold: ["HankenBold", "sans-serif"],
        hankenExtra: ["HankenExtraBold", "san-serif"],
        hankenMedium: ["HankenMedium", "sans-serif"],
        hankenRegular: ["HankenRegular", "sans-regular"],
      },
    },
  },
  plugins: [],
};
