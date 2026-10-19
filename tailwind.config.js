/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mnemo: {
          bg: '#FFFDF7',
          primary: '#243044',
          secondary: '#667085',
          yellow: '#FFE681',
          coral: '#FF8D78',
          pink: '#FF9FB2',
          skyblue: '#8DD8FF',
          purple: '#B69CFF',
          green: '#78D6A3',
          border: '#E8E4D9',
          card: '#FFFFFF',
        },

        biology: {
          DEFAULT: '#3DBE75',
          light: '#DDF7E8',
          bg: '#EFFBF4',
          border: '#A7E8C1',
          dark: '#2A9A5B',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Fredoka', 'Baloo 2', 'system-ui', 'sans-serif'],
        handwriting: ['Patrick Hand', 'Caveat', 'cursive'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'sketch': '3px 3px 0px 0px rgba(36, 48, 68, 0.08)',
        'sketch-hover': '4px 6px 0px 0px rgba(36, 48, 68, 0.12)',
        'sketch-active': '1px 2px 0px 0px rgba(36, 48, 68, 0.12)',
        'bubble': '0 8px 24px -4px rgba(36, 48, 68, 0.06)',
        'float': '0 12px 32px -8px rgba(36, 48, 68, 0.08)',
      },
      animation: {
        'float-slow': 'floatSlow 4s ease-in-out infinite',
        'float-alt': 'floatAlt 5s ease-in-out infinite',
        'wiggle': 'wiggle 2.5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatAlt: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(0.98)' },
        },
      },
    },
  },
  plugins: [],
}
