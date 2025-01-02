import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '375px',
      'md': '425px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1440px',
      '3xl': '2560px',
    },
    extend: {
      fontFamily: {
        rubik:['var(--font-rubik)'],
      },
      colors: {
        //primary
        blue: "hsl(246, 80%, 60%)",
        lightRed: "hsl(15, 100%, 70%)", //work
        softBlue: 'hsl(195, 74%, 62%)', //play
        lightRedS: 'hsl(348, 100%, 68%)', //study
        limeGreen: 'hsl(145, 58%, 55%)', //exercise
        violet: 'hsl(264, 64%, 52%)', //social
        softOrange: 'hsl(43, 84%, 65%)', //self-care
        //neutral
        veryDarkBlue: 'hsl(226, 43%, 10%)',
        darkBlue: 'hsl(235, 46%, 20%)',
        desaturatedBlue: 'hsl(235, 45%, 61%)',
        paleBlue: 'hsl(236, 100%, 87%)',
      },
    },
  },
  plugins: [],
};
export default config;
