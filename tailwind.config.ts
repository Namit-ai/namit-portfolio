import type { Config } from "tailwindcss"

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
    },
  },
  plugins: [],
  darkMode: "class",
}
export default config
