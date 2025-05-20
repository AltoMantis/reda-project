/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'linen': '#FAF0E6',
        'brick-red': '#CB4154',
      },
      fontFamily: {
        'ibm': ['var(--font-ibm-plex-sans)'],
        'roboto': ['var(--font-roboto)'],
      },
      keyframes: {
        'letter-appear-from-bottom': {
          '0%': {
            transform: 'translateY(20px)',
            filter: 'blur(8px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            filter: 'blur(0)',
            opacity: '1'
          }
        },
        'letter-appear-from-top': {
          '0%': {
            transform: 'translateY(-20px)',
            filter: 'blur(8px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            filter: 'blur(0)',
            opacity: '1'
          }
        }
      },
      animation: {
        'letter-appear-from-bottom': 'letter-appear-from-bottom 0.5s ease-out forwards',
        'letter-appear-from-top': 'letter-appear-from-top 0.5s ease-out forwards'
      }
    },
  },
  plugins: [],
} 