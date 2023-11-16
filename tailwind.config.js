/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#1C2434",
        body: "#64748B",
        primary: "#3C50E0",
        primary2: "#5352ed",
        secondary: "#80CAEE",
        stroke: "#E2E8F0",
        gray: "#EFF4FB",
        gra2: "#c8d6e5",
        danger: "#e74c3c",
        "black-opacity": "rgba(0,0,0, 0.5)",
      },
    },
  },
  plugins: [],
};
