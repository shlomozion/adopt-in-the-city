import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: theme => ({
      //   'paw-pattern': "url('/assets/paw-outline.svg')",
      // })
    }
  },
  plugins: [],
}
export default config
