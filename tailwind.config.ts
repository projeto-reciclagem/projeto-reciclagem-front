import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    fontFamily: {
      sans: ['Roboto Condensed', 'sans-serif'],
      mono: ['Ubuntu', 'monospace'],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'moss-green': {
          50: '#EEF4EA',
          100: '#CADEBF',
          200: '#B0CEA0',
          300: '#8CB775',
          400: '#76A95A',
          500: '#549431',
          600: '#4C872D',
          700: '#3C6923',
          800: '#2E511B',
          900: '#233E15',
        },
        marine: {
          50: '#E9F1EE',
          100: '#BBD3CC',
          200: '#9BBDB3',
          300: '#6D9F90',
          400: '#518D7A',
          500: '#257059',
          600: '#226651',
          700: '#1A503F',
          800: '#143E31',
          900: '#102F25',
        },
        camel: {
          50: '#F8F5EE',
          100: '#EBE0CA',
          200: '#E1D1B0',
          300: '#D3BD8C',
          400: '#CAB076',
          500: '#BD9C54',
          600: '#AC8E4C',
          700: '#866F3C',
          800: '#68562E',
          900: '#4F4223',
        },
        leaf: {
          50: '#F3F6EB',
          100: '#DBE2C1',
          200: '#C9D4A3',
          300: '#B1C178',
          400: '#A1B55E',
          500: '#8AA236',
          600: '#7E9331',
          700: '#627326',
          800: '#4C591E',
          900: '#3A4417',
        },
      },
      backgroundImage: {
        'carousel-item1': 'url("@/assets/img/carousel-item1.png")',
        'carousel-item2': 'url("@/assets/img/carousel-item2.png")',
        'carousel-item3': 'url("@/assets/img/carousel-item3.png")',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
