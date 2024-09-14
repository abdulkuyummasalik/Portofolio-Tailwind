/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#ff7f00",
        primaryHover: "#ff9933",
        secondary: "#334155",
        dark: "#1a1a1a",
        seconDark: "#2c2c2c",
        thirDark: "#909090",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
