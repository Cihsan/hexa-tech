/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#193dc1",
        
"secondary": "#7736ff",
        
"accent": "#f4ea89",
        
"neutral": "#181920",
        
"base-100": "#fff",
        
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