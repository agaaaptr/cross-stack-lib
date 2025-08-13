/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable dark mode with a class
  theme: {
    extend: {
      colors: {
        // Cool color palette with dark base
        primary: '#66B2FF', // Vibrant cool blue
        secondary: '#A0AEC0', // Muted cool gray
        accent: '#00CED1', // DarkCyan, a cool, slightly greenish blue for emphasis
        dark: {
          DEFAULT: '#1A202C', // Very dark blue-gray, base background
          light: '#2D3748', // Slightly lighter dark blue-gray
          lighter: '#4A5568', // Even lighter dark blue-gray
        },
        light: {
          DEFAULT: '#E2E8F0', // Off-white, cool tone for text
          muted: '#CBD5E0', // Slightly darker cool gray for muted text
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
