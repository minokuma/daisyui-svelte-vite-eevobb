module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#ecf756',
          secondary: '#dd373f',
          accent: '#c3ff9e',
          neutral: '#201e2a',
          'base-100': '#363437',
          info: '#79cff1',
          success: '#1d726b',
          warning: '#c2690a',
          error: '#e3545d',
        },
      },
    ],
  },
  // tailwind 띰
  mode: 'jit',
  theme: {
    extend: {
      animation: {
        blob: 'blob 7s infinite',
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.5deg)',
          },
          '75%': {
            transform: 'rotate(-0.5deg)',
          },
        },
      },
    },
  },
  content: ['./src/**/*.{svelte,js,ts}'],
  plugins: [require('daisyui')],
};
