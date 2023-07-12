/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {

      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        xl: '1728px',
        lg: '1280px',
        md: '960px',
        sm: '600px',
      
      },
    },
  },
  plugins: [],
};
