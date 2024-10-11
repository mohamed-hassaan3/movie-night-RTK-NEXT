import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "rgb(3,37,65)",
        lightBlue: "rgb(1,180,228)",
        scrollerGrey: "rgb(219,219,219)"
      },
      screens: {
        'xs': '430px',
      },
    },
  },
  plugins: [],
};
export default config;
