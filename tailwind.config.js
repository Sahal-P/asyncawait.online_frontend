/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'oxygen': ['Oxygen', 'sans-serif' ],
      'ubuntu': ['Ubuntu', 'sans-serif' ],
    },
    extend: {
      colors: {
        "primary": "#1c2c33",
        "secondary": "#111b21",
        "chat-bg": "#0b141a",
        "icon": "#aebac1",
        "line": "#00ab88",
        "hero": "#1e2e35",
        "story":"#1c242c",
        "sender":"#35444c",
        "dark_purple": "#000235",
        "btn_primary": "#7e7ee3",
        "heading_color": "#abd9d9",
        "trans_bg": "#1c2c33",
        "popup_bg": "#233138"
      },
      screens: {
        'xs': '340px', // Define a custom breakpoint 'xs' for 340px
      },
    },
  },
  plugins: [],
}