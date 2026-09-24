/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1C2A39',
          muted: '#5B6472'
        },
        paper: '#EDE6D6',
        paperLight: '#F6F2E9',
        accent: {
          DEFAULT: '#7A2430',
          dark: '#5E1B24'
        },
        brass: '#A98A4B'
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      maxWidth: {
        prose: '68ch'
      }
    }
  },
  plugins: []
}
