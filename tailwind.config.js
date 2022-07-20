/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#193dc1",
        
"secondary": "#ed0488",
        
"accent": "#f4ea89",
        
"neutral": "#181920",
        
"base-100": "#E8E9F2",
        
"info": "#25D1F4",
        
"success": "#76E5BA",
        
"warning": "#EE8B20",
        
"error": "#EF4D5A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
