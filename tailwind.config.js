/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "680px",
      md: "780px",
      lg: "1024px",
      xl: "1111px",
    },
    extend: {
      colors: {
        primary: "hsl(0, 0%, 100%)",
        primary_dark: "#181A20",
        pri_btn: "#9610FF",
        sec_btn_bg: "#F5E7FF",
        sec_btn_text: "#AF48FF",
        input_bg_dark: "#1F222A",
        input_bg_light: "#FAFAFA",
        input_bg_light2: "#F5F5F5",
        msg_receiver_dark: "#35383F",
        msg_receiver_light: "#F5F5F5",

        // colors
        gray_1: "#E0E0E0",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
