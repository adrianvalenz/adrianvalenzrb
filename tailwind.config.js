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
        "mono": ["jetbrains-mono-regular", "mono"],
      },
    },
  },
  plugins: [],
}
