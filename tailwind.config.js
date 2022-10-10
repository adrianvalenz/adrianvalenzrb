/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,md,liquid,erb,serb,rb}',
    './frontend/javascript/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        "serif": ["chaparral-pro", "serif"],
        "display": ["chaparral-pro-display", "serif"],
        "subhead": ["chaparral-pro-subhead", "serif"],
        "mono": ["jetbrains-mono-regular", "mono"],
      },
    },
    listStyleType: {
      square: "square",
    },
  },
  plugins: [],
}
