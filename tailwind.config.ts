import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        success: "#28a745",
        danger: "#dc3545",
        primary: "#007bff",
        secondary: "#6c757d",
        warning: "#ffc107",
        dark: "#343a40",
        info: "#17a2b8",
        light: "#f8f9fa",
        muted: "#a1a6ac",
        link: "#53baca",
        white: "#ffffff",
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
export default config
