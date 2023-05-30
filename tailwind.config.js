/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "hsl(0, 0%, 100%)",
        primary_dark: "#181A20",
        pri_btn: "#9610FF",
        sec_btn_bg: "#F5E7FF",
        sec_btn_text: "#AF48FF",

        // colors
        gray_1: "#E0E0E0",
      },
    },
  },
  plugins: [],
}
