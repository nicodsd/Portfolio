/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
      './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
      extend: {
        animation: {
          'pulse-slow': 'pulse 2s linear infinite',
        }
      }
  },
  variants: {},
  plugins: []
}
