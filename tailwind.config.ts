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
        bg: 'var(--color-bg)',
        fg: 'var(--color-fg)',
        accent: 'var(--color-accent)',
        primary: 'var(--color-primary)',
        surface: 'var(--color-surface)',
        'base-light': 'var(--color-base-light)',
      },
      borderRadius: {
        'agent': '12px',
      },
      boxShadow: {
        'card': '0 8px 24px hsla(221, 83%, 53%, 0.12)',
        'agent-glow': '0 4px 16px hsla(221, 83%, 53%, 0.25)',
      },
    },
  },
  plugins: [],
}
export default config
