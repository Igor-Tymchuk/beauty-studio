/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCF8',
          100: '#FAF8F2',
          200: '#F5F0E8',
          300: '#EDE6D8',
          400: '#E0D8C8',
          500: '#D4C9B5',
        },
        charcoal: {
          50: '#F5F5F4',
          100: '#E8E8E6',
          200: '#C8C8C4',
          300: '#9A9A96',
          400: '#6B6B67',
          500: '#3D3D3A',
          600: '#2A2A28',
          700: '#1C1C1A',
          800: '#141412',
          900: '#0C0C0A',
        },
        // Luxury crimson — replaces champagne/gold throughout
        champagne: {
          50:  '#FDF2F4',
          100: '#FAE1E5',
          200: '#F4B6C0',
          300: '#E8808F',
          400: '#D94D60',
          500: '#C02038',
          600: '#9B152B',
          700: '#740E1F',
          800: '#4D0914',
          900: '#27040A',
        },
        rose: {
          50: '#FDF6F4',
          100: '#FAECEA',
          200: '#F4D5D0',
          300: '#EBBAB3',
          400: '#DE9590',
          500: '#C97068',
          600: '#A84F47',
          700: '#7F3A34',
          800: '#562723',
          900: '#2E1512',
        },
        nude: {
          50: '#FBF7F6',
          100: '#F6EDEB',
          200: '#ECDBD8',
          300: '#DFC3BE',
          400: '#CDA8A2',
          500: '#B88B84',
          600: '#96706A',
          700: '#71534E',
          800: '#4C3835',
          900: '#271E1C',
        },
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
        playfair: ['Playfair Display', 'Georgia', 'serif'],
        manrope: ['Manrope', 'system-ui', 'sans-serif'],
        vibes: ['Great Vibes', 'cursive'],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        '10xl': ['10rem', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'slow-spin': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #9B152B 0%, #C02038 40%, #E8808F 60%, #9B152B 100%)',
        'ivory-gradient': 'linear-gradient(180deg, #FDFCF8 0%, #F5F0E8 100%)',
        'dark-gradient': 'linear-gradient(180deg, #1C1C1A 0%, #0C0C0A 100%)',
      },
      boxShadow: {
        'gold': '0 4px 30px rgba(192, 32, 56, 0.2)',
        'gold-lg': '0 8px 50px rgba(192, 32, 56, 0.3)',
        'luxury': '0 20px 60px rgba(12, 12, 10, 0.15)',
        'luxury-lg': '0 30px 80px rgba(12, 12, 10, 0.25)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'cinematic': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
    },
  },
  plugins: [],
};
