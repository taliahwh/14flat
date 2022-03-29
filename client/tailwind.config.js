module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      roboto: ['Roboto', 'san-serif'],
      robotoLight: ['Roboto-Light', 'san-serif'],
      robotoRegular: ['Roboto-Regular', 'san-serif'],
      spratBold: ['Sprat-Bold', 'serif'],
      spratBlack: ['Sprat-Black', 'serif'],
      spratRegular: ['Sprat-Regular', 'serif'],
    },
    extend: {
      colors: {
        background: '#fafafa',
      },
      maxWidth: {
        '8xl': '85rem',
      },
      borderWidth: {
        1: '1px',
      },
      textUnderlineOffset: {
        12: '12px',
      },
    },
  },
  plugins: [],
};
