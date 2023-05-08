/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        light: "#46495e",
        DEFAULT: "#181b36",
        dark: "#181b36",
      },
      secondary: {
        light: "#dcf9f7",
        DEFAULT: "##CDF7F4",
        dark: "#7b9492",
      },
    },
    fontFamily: {
      heading: ["Space Grotesk", "sans-serif"],
      body: ["Inter", "sans-serif"],
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
