/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'upkraft-purple': '#6366f1',
        'upkraft-yellow': '#f59e0b',
        'upkraft-blue': '#3b82f6',
        'upkraft-orange': '#fb923c',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}