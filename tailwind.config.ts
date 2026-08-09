import type { Config } from "tailwindcss"
import scrollbar from "tailwind-scrollbar"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        "plus-jakarta": ["var(--font-plus-jakarta)"],
      },
      scrollbar: {
        thin: "thin",
      },
    },
  },
  plugins: [scrollbar],
  darkMode: "class",
}
export default config
