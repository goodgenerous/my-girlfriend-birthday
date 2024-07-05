/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  daisyui: {
    themes: [],
  },
  theme: {
    extend: {
      colors: {
        'purple': '#a17fe0',
        'purple-hover': '#5D26C1',
        'green-hover': '#59C173'
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    require('daisyui'),
  ],
}


