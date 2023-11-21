import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#5c5c6a",
        "secondary": "#b89674",
        "accent": "#f9e2ae",
        "text": "#525252",
        "background": "#ffffff",
        "alternate-background": "#fafafa",
      },
      fontFamily: {
        "heading": ["Montserrat", "sans-serif"],
        "text": ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
