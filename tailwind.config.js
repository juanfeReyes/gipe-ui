/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '',
          DEFAULT: '#6c757d',
          dark: ''
        },
        secondary: {
          light: '',
          DEFAULT: '#adb5bd',
          dark: ''
        },
        surface: {
          light: '',
          DEFAULT: '#e9ecef',
          dark: ''
        },
        background: {
          light: '',
          DEFAULT: '#f8f9fa',
          dark: ''
        },
      }
    }
  },
  plugins: [],
}
