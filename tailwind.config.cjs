/** @type {import('tailwindcss').Config} */
import Colors from "./src/constants/colors.json";
import defaultTailwindColors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
    colors: {
      ...defaultTailwindColors,
      ...Colors
    }
  },
  plugins: []
};
