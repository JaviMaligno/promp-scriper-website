import type { Config } from 'tailwindcss'

const tailwindConfig: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
      },
    },
  },
  plugins: [],
}

export default tailwindConfig
