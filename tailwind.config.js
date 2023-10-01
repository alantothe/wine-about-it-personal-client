const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        wine: "#60141E",
      },
      fontSize: {
        xxs: "0.5rem",
      },
    },
  },
  plugins: [],
});
