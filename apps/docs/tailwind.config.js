/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './mdx-components.tsx',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      primary: '#66B2FF',
      accent: '#00CED1',
      background: {
        DEFAULT: '#1A202C',
        light: '#2D3748',
        lighter: '#4A5568',
      },
      text: {
        DEFAULT: '#E2E8F0',
        muted: '#CBD5E0',
      },
      // Add white and black for default component colors if needed
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
    },
    extend: {},
  },
  plugins: [],
}
