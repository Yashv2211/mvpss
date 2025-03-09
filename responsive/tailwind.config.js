/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
        gabarito: ["Gabarito", "sans-serif"]
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '50%': { width: '14ch' }, // Fully typed
          '100%': { width: '0' }, // Erased
        },
        blink: {
          '50%': { 'border-right-color': 'transparent' },
        },
      },
      animation: {
        typing: 'typing 5s steps(10) infinite', // Adjusted for full loop
        blink: 'blink 0.7s infinite',
      },
    },
  },
  plugins: [],
};
