/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        gutter: 'var(--gutter)',
      },
    },
  },
  plugins: [],
};
