module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
       '48': '48px',
       '32': '32px',
       '576': '576px',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      maxWidth: {
        'side-show': '260px',
        'side-hide': '64px'
      },
      inset: {
        '260': '260px'
      },
      width: {
        'side': 'calc(100% - 260px)',
        'collapse-side': 'calc(100% - 64px)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
