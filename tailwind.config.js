/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#000000',
          surface: '#000000',
          border: '#333333',
          text: '#ffffff',
          muted: '#ffffff',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      borderRadius: {
        'box': '0.5rem',
      },
    },
  },
  plugins: [],
}
