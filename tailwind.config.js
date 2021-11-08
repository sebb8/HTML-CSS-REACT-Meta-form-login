module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'm007': '#0077f3',
        'm092': '#092730',
       }),
       textColor: theme => theme('colors'),
       textColor: {
        'm007': '#0077f3',
        'm092': '#092730',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
