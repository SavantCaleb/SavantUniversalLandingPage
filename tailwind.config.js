/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#007bff',
          600: '#0056b3',
          700: '#004085',
        },
        gray: {
          50: '#f8f9fa',
          100: '#e9ecef',
          900: '#212529',
        }
      },
    },
  },
  plugins: [],
}