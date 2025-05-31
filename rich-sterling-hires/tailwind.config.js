/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lk: '1600px',
        sp: '500px',
        sk: '550px',
        sa: '450px',
        sw: '425px',
        sr: '400px',
        mq: '700px',
        mp: '900px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}