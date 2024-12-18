/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#F2890F',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      fontWeight: {
        500: '500', // Medium
        600: '600', // SemiBold
        700: '700', // Bold
        800: '800', // ExtraBold
        900: '900', // Black
      },
      letterSpacing: {
        'extra-sm': '0.42px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, #141414 0%, #1F1D1D 100%)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.custom-calendar-icon::-webkit-calendar-picker-indicator': {
          position: 'absolute',
          right: '17px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: '1',
          opacity: '0',
        },
      });
    },
  ],
};
