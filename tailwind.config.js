module.exports = {
  // TODO: Add purge for optimization
  purge: ['./src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: '#5469C9',
      },
      width: {
        192: '48rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
