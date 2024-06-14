import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        slide: "slide 1.5s ease-in-out",
        slide2: "slide 2s ease-in-out",
        slide3: "slide 3s ease-in-out",
        slide4: "slide 1.5  s ease-in-out",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateY(100%)", opacity: '0' },
          "100%": { transform: "none", opacity: '1' },
        },
        slide2: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "none" },
        },
        slide3: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "none" },
        },
        slide4: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "none" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
