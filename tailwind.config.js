/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          50: "#fef4f2",
          100: "#fde7e3",
          200: "#fcd4cd",
          300: "#f9b4a8",
          400: "#f38976",
          500: "#e8624b",
          600: "#d5462d",
          700: "#b33822",
          800: "#943120",
          900: "#7b2e21",
          950: "#43140c",
        },
        blueviolet: {
          50: "#eff3fe",
          100: "#e1eafe",
          200: "#c9d6fc",
          300: "#a9baf8",
          400: "#8696f3",
          500: "#6973eb",
          600: "#4d4dde",
          700: "#413ec4",
          800: "#35359e",
          900: "#31327e",
          950: "#1e1d49",
        },
        lake: {
          50: "#eefbf6",
          100: "#d6f5e7",
          200: "#b0ead2",
          300: "#7cd9b9",
          400: "#47c09a",
          500: "#24a581",
          600: "#168568",
          700: "#126a56",
          800: "#115445",
          900: "#0f453a",
          950: "#072721",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
