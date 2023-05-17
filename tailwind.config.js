/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#e8963a",

          "secondary": "#b76b24",

          "accent": "#101d7f",

          "neutral": "#2A2730",

          "base-100": "#F6F7F9",

          "info": "#50BBD3",

          "success": "#249989",

          "warning": "#FBC560",

          "error": "#EC7F69",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

