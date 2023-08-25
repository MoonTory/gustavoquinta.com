/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' }
        },
        updown: {
          '0%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(10%)' },
          '100%': { transform: 'translateY(-5%)' }
        }
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        floating: 'updown 3s ease-in-out infinite',
        'floating-50': 'updown 3s ease-in-out infinite -0.5s',
        'floating-100': 'updown 3s ease-in-out infinite -1s',
        'floating-150': 'updown 3s ease-in-out infinite -1.5s',
        'floating-200': 'updown 3s ease-in-out infinite -2s'
      },
      colors: {
        midnightBlack: '#0D0D0D',
        'dark-mixed-100': '#1a1625',
        dusty: '#181818',
        moon: '#F7F7FF',
        brand: '#52B2CF',
        brandLight: '#AD6A6C',
        moonstone: {
          50: '#effafc',
          100: '#d7f0f6',
          200: '#b4e1ed',
          300: '#80cbe0',
          400: '#52b2cf',
          500: '#298fb1',
          600: '#257495',
          700: '#245e7a',
          800: '#254f65',
          900: '#234356',
          950: '#122b3a'
        },
        dark: {
          100: '#121212',
          200: '#282828',
          300: '#3f3f3f',
          400: '#575757',
          500: '#717171',
          600: '#8b8b8b'
        },
        mixed: {
          100: '#1a2022',
          200: '#2f3537',
          300: '#464b4c',
          400: '#5d6263',
          500: '#767a7b',
          600: '#909394'
        },
        light: {
          100: '#F5F7F8',
          200: '#E1E5E7',
          300: '#CDD2D4',
          400: '#B8BEC1',
          500: '#A4A9AD',
          600: '#8F9498'
          // 100: '#FEF7F1',
          // 200: '#FDE6D9',
          // 300: '#FBD5C1',
          // 400: '#F9C4A9',
          // 500: '#F7B391',
          // 600: '#F5A279'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
