/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#F4F9F8',
          100: '#E6F2F0',
          200: '#C6E2DF',
          300: '#9BCCC7',
          400: '#5FA9A2',
          500: '#2F8A82',
          600: '#007A78',
          700: '#006867',
          800: '#005555',
          900: '#003F40',
          DEFAULT: '#008080',
        },
        amber: {
          50: '#FEF7E6',
          100: '#FDEBC9',
          200: '#FBD98F',
          300: '#F8C75A',
          400: '#F3B344',
          500: '#ECA52B',
          600: '#D48A14',
          700: '#A86A0E',
          DEFAULT: '#F3B344',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
      },
      boxShadow: {
        soft: '0 4px 20px -4px rgba(0, 122, 120, 0.08)',
        lift: '0 12px 32px -8px rgba(0, 122, 120, 0.18)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.5s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
