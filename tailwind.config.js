export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "30px",
    },
    extend: {
      colors: {
        background: "rgba(0, 25, 34, 1)",
      },
      // Define a gradient as a background color
      gradientColors: {
        v1: `linear-gradient(
          180deg,
          #02ffa9 0%,
          #0cdec8 51.87%,
          #12cfe7 100%
        )`,
      },
    },
  },
  plugins: [],
};
