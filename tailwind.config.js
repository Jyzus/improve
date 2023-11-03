import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cyan-/-aqua": {
          50: "#effefe",
          100: "#c7fffe",
          200: "#7afffd",
          300: "#50f5f8",
          400: "#1dd9e4",
          500: "#04bbc8",
          600: "#0092a1",
          700: "#057480",
          800: "#0a5b65",
          900: "#0d4c54",
          950: "#002b33",
        },
      },
    },
  },
  plugins: [nextui()],
};
