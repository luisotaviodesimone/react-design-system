/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },

    colors: {
      black: '#000000',
      white: '#ffffff',

      gray: {
        100: '#e1e1e6',
        200: '#c4c4cc',
        400: '#7c7c8a',
        800: '#202024',
        900: '#121214',
      },

      cyan: {
        500: '#81d8f7',
        300: '#9be1fb',
      },
    },

    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
  },
  plugins: [],
};
