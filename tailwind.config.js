/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'minBg': '#1b1f24',
      'white': '#ffffff',
      'dressTxt': '#b0bec5',
      'secondBg': '#22282f',
      'primary-color': '#13bbff'
    },
    fontFamily: {
      serif: '"Sora", serif'
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

