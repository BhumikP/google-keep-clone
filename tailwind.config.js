/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": {
          100: "#5f6368",
        },
        gray: {
          50: "#E0E0E0",
        },
        "light-yellow": {
          300: "#feefc3",
        },
      },
      boxShadow: {
        "dark-shadow": "rgba(0, 0, 0, 0.2) 0px 3px 5px",
      },
    },
  },
  plugins: [],
};
