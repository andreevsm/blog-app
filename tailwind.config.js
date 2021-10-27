const colors = require('tailwindcss/colors');

module.exports = {
  // TODO: Add purge for optimization
  purge: ['./src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: '#5469C9',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
