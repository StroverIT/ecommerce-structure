import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: "350px",
      sm: "640px",
      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",

      "3xl": "1800px",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          100: "#3B82F6"
        },
       
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "min(100% - 2rem, 1300px);",
        },
      });
      
    },
  ],
}
export default config
