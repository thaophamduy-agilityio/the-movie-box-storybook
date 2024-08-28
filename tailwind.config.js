/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      pink: "#ff0079",
      gray: "#acadb6",
      "gray-dark": "#80818a",
      "tab-active": "#fb0066",
      "card-title": "#494c62",
      "card-genre": "#babbc3",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    fontSize: {
      xs: "6px",
      sm: "7px",
      md: "8px",
      lg: "9px",
      xl: "10px",
      "2xl": "12px",
      "3xl": "15px",
      "4xl": "22px",
    },
    extend: {
      backgroundColor: {
        main: "#f8f8f8",
        rating: "rgba(73, 76, 98, 0.2)",
        btn: "#ff0079",
      },
      backgroundImage: {
        hero: 'url("src/assets/images/bg-hero.webp")',
        "gradient-to-b":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 150%)",
      },
      borderColor: {
        rating: "rgba(255, 255, 255, 0.2)",
        tab: "#dfdfdf",
        "tab-active": "#ff0079",
        footer: "#babbc3",
      },
      boxShadow: {
        "movie-card":
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      },
      keyframes: {
        refine: {
          "0%": {
            opacity: 0,
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "refine-slide": "refine 2s infinite",
      },
    },
  },
  safelist: [
    {
      pattern:
        /(text)-white|pink|gray|dark-gray|tab-active|card-title|card-genre|xs|sm|md|lg|xl|2xl|3xl|4xl/,
    },
    {
      pattern: /(bg)-main|hero|rating|btn/,
    },
    {
      pattern: /(font)-sans/,
    },
    {
      pattern: /(border)-|tab|tab-active|footer/,
    },
    {
      pattern: /(shadow)-movie-card/,
    },
  ],
};
