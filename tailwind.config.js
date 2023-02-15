/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        white: '#f5f5f5',
        black: '#0B2434',
        roll: '#4A4E74',
        purple: '#5035FF',
        green: '#59E391'
        // Configure your color palette here
      }
    },
  },

  plugins: [],
}