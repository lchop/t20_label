const colors = require("tailwindcss/colors");
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    colors: {
      primary: {
        50: "#EAE2F8",
        100: "#CFBCF2",
        200: "#A081D9",
        300: "#8662C7",
        400: "#724BB7",
        500: "#653CAD",
        600: "#51279B",
        700: "#421987",
        800: "#34126F",
        900: "#240754",
      },
      secondary: {
        50: "#FFE3E3",
        100: "#FFBDBD",
        200: "#FF9B9B",
        300: "#F86A6A",
        400: "#EF4E4E",
        500: "#E12D39",
        600: "#CF1124",
        700: "#AB091E",
        800: "#8A041A",
        900: "#610316",
      },
      neutral: colors.gray,
      black: colors.black,
      white: colors.white,
      transparent: "transparent",
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      lime: colors.lime,
      green: colors.green,
      teal: colors.teal,
      sky: colors.sky,
      indigo: colors.indigo,
      violet: colors.violet,
      fuchsia: colors.fuchsia,
      rose: colors.rose,
      yellow: colors.yellow,
    },
    extend: {
      animation: {
        'spin-slow': 'spin 45s ease infinite',
        'pulse-slow': 'pulse 5s ease infinite',
        'tilt': 'tilt 5s linear infinite',
      },
      keyframes: 
      {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)"
          },
          "25%": {
            transform: "rotate(5deg)"
          },
          "75%": {
            transform: "rotate(-5deg)"
          }
        }
      },
      fontFamily: {
        'sans' : ['Barlow', 'Helvetica', 'Arial', 'sans-serif'],
        'title' : ['Noto Sans', 'Helvetica', 'Arial', 'sans-serif']
        },
        width: {
          '112' : '28rem',
          '138' : '32rem',
          '164' : '36rem',
          '246' : '54rem'
        },
        maxWidth: {
          '246' : '54rem'
        },
        height: {
          '112' : '28rem',
          '138' : '32rem',
        },
        lineHeight: {
          '12' : '3rem'
        }
      }
    },
    plugins: [],
 };