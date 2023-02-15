/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      lineHeight: {
        paragraph: "1.62",
      },
      letterSpacing: {
        title: "0.014em",
      },
      colors: {
        cyan: "hsl(179, 62%, 43%)",
        "bright-yellow": "hsl(71, 73%, 54%)",
        "dark-yellow": "hsl(71deg 73% 47%)",
        gray: "hsl(218, 22%, 67%)",
        "light-gray": "hsl(204, 43%, 93%)",
        "very-light-gray": "hsl(0, 0%, 95%)",
        "grayish-blue": "hsl(218, 22%, 67%)",
      },
    },
  },
  plugins: [],
};
