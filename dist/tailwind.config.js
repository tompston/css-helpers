module.exports = {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xl: { max: "1410px" },
      lg: { max: "1024px" },
      md: { max: "920px" },
      sm: { max: "720px" },
      xs: { max: "550px" },
    },
    fontSize: {
      "7xl": "var(--fs-1)",
      "6xl": "var(--fs-2)",
      "5xl": "var(--fs-3)",
      "4xl": "var(--fs-4)",
      "3xl": "var(--fs-5)",
      "2xl": "var(--fs-6)",
      xl: "var(--fs-7)",
      lg: "var(--fs-8)",
      base: "var(--fs-9)",
      sm: ".875rem",
      xs: ".75rem",
      tiny: ".875rem",
    },
    extend: {},
  },
  plugins: [],
};