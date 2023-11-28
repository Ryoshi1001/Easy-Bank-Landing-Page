/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'mws': '1440px',
      // => @media (min-width: 1440px) { ... }
      '2xlmws': '1800px'
    },
    fontFamily: {
      PublicSans: ['Public Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        DarkBlue: '#2d314d',
        LimeGreen: '#31d35c',
        BrightCyan: '#2bb7da',
        GrayBlue: '#9698a6',
        LightGrayishBlue: '#f3f4f6',
        VeryLightGray: '#fafafa',
        White: '#ffffff',
      },
      scale: {
        'mws-scale': '1.95',
        'bg-intro-md-scale': '1.65',
      }
    },
  },
  plugins: [],
}