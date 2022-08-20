/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
   theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      width: {
        1600: '1600px',
        400: '400px',
        450: '450px',
        210: '210px',
        550: '550px',
        260: '260px',
        650: '650px',
      },
      backgroundColor: {
        blue:'#003049',
        red:'#d62828',
        orange:'#f77f00',
        yellow:'#fcbf49',
        sand:'#eae2b7',
      },
      colors: {
        // Trail Blazer Palette
        sand: '#eae2b7',
        darkBlue: '#003049',
        orange: '#f77f00',
        yellow: '#fcbf49',
      },
      fontFamily: {
        'carter': ['Carter One', 'cursive'],
        'Roboto': ['Roboto Condensed', 'sans-serif'],
        'accent_font': ["Splash", "Sans-serif"],
        'main_font': ['Poppins', 'sans-serif'],
      },
      rotate: {
        '270': '270deg',
      }
    },
  },
  plugins: [],
}
