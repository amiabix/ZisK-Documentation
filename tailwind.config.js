/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './theme.config.tsx',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007755', // Victorian Peak - primary green for light backgrounds
          light: '#0ABF83', // Soft Green - primary green for dark backgrounds
          dark: '#007755', // Victorian Peak
        },
        brand: {
          'victorian-peak': '#007755',
          'soft-green': '#0ABF83',
          'light-green': '#A4F6D0',
          'midnight': '#2D2E3D',
          'silver-light': '#F3F3F2',
          'busy-bee': '#F4FF00',
          'bleached-silk': '#E7E7E3',
          'black': '#0C0C0C',
        },
        gray: {
          50: '#F3F3F2', // Silver Light
          100: '#E7E7E3', // Bleached Silk
          200: '#B8B8B4', // Silver Dark
          300: '#8E8E8A', // Gray Light
          400: '#606060', // Gray
          500: '#363636', // Gray Dark
          600: '#2D2E3D', // Midnight
          700: '#1A1A24', // Dark Blue
          800: '#0C0C0C', // Black
          900: '#0C0C0C', // Black
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        'plex-sans': ['IBM Plex Sans', 'Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'Courier New', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

