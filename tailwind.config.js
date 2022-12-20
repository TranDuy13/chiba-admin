/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'orangesa-a':'#ee4d2d',
        'blue-1':'#05a',
        'gray-09':'#f5f5f5',
        'gray-54':'rgba(0,0,0,.54)',
        'gray-65':'rgba(0,0,0,.65)',
        'orange-d':'#f53d2d',
        'orange-2d':'#f63',
        'orange-btn':'#fb5533',
        'gray-99':'rgba(33,33,33,.2)'
        // linear-gradient(-180deg,#f53d2d,#f63)
      },
      spacing:{
        'a':'1px',
        '170':'75rem',
        '0.3125':'0.3125rem',
        '1.5625':'1.5625rem',
        '14':'3.5rem',
        '625':'.625rem',
        '2.125':'2.125rem',
        '1875':'-0.1875rem',
        '840':'840px',
        '34':'34px',
      },
      zIndex: {
        '100': '100',
        '400':'400'
      }
    },
  },
  plugins: [],
}