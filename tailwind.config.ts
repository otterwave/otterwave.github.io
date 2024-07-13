import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#36BA98',
        secondary: '#F4A261',
        ternary: '#E9C46A',
        orange: '#F4A261'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        arimo: ['Arimo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
