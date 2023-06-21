/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          xs: '576px',
          sm: '767px',
          md: '991px',
          lg: '1199px',
          xl: '1320px', 
        },
      },
    },
    screens: {
      'xs': '576px',
      'sm': '767px',
      'md': '992px',
      'lg': '1200px', 
      'xl': '1500px',
      '2xl': '1650px', 
    },
  },
  

  plugins: [],
}