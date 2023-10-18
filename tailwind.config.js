module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Yellow: "#FFB400",
        Yellow2: "rgba(255, 180, 0, 0.95)",
        Black: "#2B2B2B",
        InputBg: "(rgb(232, 240, 254), rgba(70, 90, 126, 0.4))",
        Dark: "#18191A",
        DarkV2: "#3A3B3C",
        DarkV1: "#242526",
        ParagraphFont: "#767676",
        Background: "#F0F0F6",
        Background2: "#E4E6EB",
        White: "#FFFFFF",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1200px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  darkMode: "class",
};
