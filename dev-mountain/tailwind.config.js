/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#ffffff',
      secondary: '#146695',
      grey: "#D1D1D1",
      black: "#000000",
      sky: "#AFC3CB"
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
