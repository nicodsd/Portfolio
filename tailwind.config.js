/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
      './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
      extend: {
        animation: {
          'pulse-quick': 'pulse 1s linear infinite',
          'pulse-slow': 'pulse 2s linear infinite',
          'spin-slow': 'spin 15s linear infinite',
          'spin-speed': 'spin 0.6s linear infinite',
        }
      }
  },
  variants: {},
  plugins: []
}
