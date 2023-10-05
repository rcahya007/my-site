/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
      // keyframes: {
      //   toBtm: {
      //     "0%": { transform: "translateY(-100%)" },
      //     "100%": { transform: "translateY(0)" },
      //   },
      //   toTop: {
      //     "0%": { transform: "translateY(0)" },
      //     "100%": { transform: "translateY(-100%)" },
      //   },
      // },
      // animation: {
      //   fadeDown: "toBtm 1s",
      //   fadeTop: "toTop 1s",
      // },
    },
  },
  plugins: [],
};
