/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'Gray': "#F5F5F5",
        'LightBlue': "#40D7E1",
        'darkBlue': "#01BEC9",
        'Green': "#034B47",
        'GreenLight': '#057c75',
        'YellowLight': "#FEFFD1",
        'GreenDark': '#011a19',
        'Teal': '#07ada4',
        'White': "#FFFFFF",
        'LightGray': "#F6EEE7",
        'GrayMid': "#727272",
        'DarkGray': "#6B6B6B",
        'Black': "#000000",
        'YellowDark': "#F7D334",
        'Red': '#FF2B2B',
        'BlueShade': '#EAFEFF',
        'WhiteShade': '#F0F0F0',
      },
      screens: {
        'xs': '380px',
      },
      fontFamily: {
        'Roboto': ['Roboto'],
        'Literata': ['Literata'],
        'WorkSans': ['Work Sans'],
        'Poppins': ['Poppins'],
        'Ubuntu': ['Ubuntu'],
        'Exo': ['Exo'],
        'Inter': ['Inter'],
        'Domine': ['Domine'],

      }

    }
  },
  darkMode: 'class',
  plugins: [],
}