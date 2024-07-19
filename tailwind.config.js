/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#60B9EF",
        light: {
          header: "#141414",
          text: "#949494",
        },
        dark: {
          header: "#ffffff",
          text: "#ededed",
        },
      },
    },
  },
  plugins: [],
};
