/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  extend: {
    keyframes: {
      slideIn: {
        "0%": { transform: "translateX(100%)", opacity: "0" },
        "100%": { transform: "translateX(0)", opacity: "1" },
      },
    },
    animation: {
      slidein300: "slideIn 0.3s ease-in-out",
    },
  },
  plugins: [],
};
