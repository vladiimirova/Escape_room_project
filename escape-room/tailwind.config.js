/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#F2890F',
        'background-orange': '#F28A0F',
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
        'maniac-bg': "url('/public/img/cover-maniac.jpg')",   
        'old-house': "url('/public/img/cover-old-house.jpg')",
        ritual: "url('/public/img/cover-ritual.jpg')",
        'fatal-exp': "url('/public/img/cover-fatal-exp.jpg')",
        sklep: "url('/public/img/cover-sklep.jpg')",
        'mars-2056': "url('/public/img/cover-mars-2056.jpg')",
        'house-in-the-woods': "url('/public/img/cover-house-in-the-woods.jpg')",
        'metro-2033': "url('/public/img/cover-metro2033.jpg')",
        'old-ceil': "url('/public/img/cover-old-ceil.jpg')",
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
