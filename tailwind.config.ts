import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      screens: {
        xs: "320px",
        s: "380px",
        sm: "500px",
        md: "667px",
        lg: "768px",
        lgx: "840px",
        xl: "960px",
        xxl: "1024px",
        xxxl: "1280px",
      },
      colors: {
        custom_blue: "#131921",
        custom_light_blue: "#232F3E",
        custom_yellow: "#febd69",
        lightText: "#ccc",
      },
      boxShadow: {
        outlineButton: "0 2px 5px 0 rgba(213,217,217,.5)",
        card: "0 0 10px 1px gray;",
      },
      fontSize: {
        clamp: "clamp(1rem, 3vw, 3rem)",
        clamp_m: "clamp(1rem, 6vw, 3rem)",
        clamp_l: "clamp(2rem, 6vw, 8rem)",
        clamp_xl: "clamp(3rem, 6vw, 12rem)",
      },
    },
  },
  plugins: [],
};
export default config;
