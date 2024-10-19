const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': {'max': '719px'}, // 640px'in altı için max-width
        'sm-tablet': '640px', 
        'tablet': '720px',      
        'lg-tablet': '960px',      
        'md-laptop': '1024px', 
        'laptop': '1200px',           
        'desktop': '1280px',           
      },
    },
  },
  plugins: [],
});

