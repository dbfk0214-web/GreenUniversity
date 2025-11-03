/** @type{import('tailwindcss').Config}*/
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'ul, ol': {
          listStyle: 'none',
          paddingLeft: '0',
        },
      });
    },
  ],
};