const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FEA82F",
        darkest: "#141618",
        dark: "#3E444A",
        mid: "#BAC1B8",
        "primary-2": "#FEA82F",
        light: "#E5EEE2",
        lightest: "#FFFFFF",

        // E34A32
      },
    },
  },
  plugins: [flowbite.plugin()],
};
