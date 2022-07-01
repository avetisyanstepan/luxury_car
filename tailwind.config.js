module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'convert': "url('/images/convert.png')",
      }
    },
    borderRadius: {
      md: "10px",
      lg: "12px",
      xl: "20px",
      full: "100%"
    },
    colors: {
      white: "#FFFFFF",
      yellow: "#ECD126",
      darkYellow:"#91842f",
      yellow_rgba: "rgba(236, 209, 38, 0.14)",
      base_grey_200: "#23262F",
      base_grey_100: "#1E1F25",
      base_grey_80: "#282C38",
      base_grey_60: "#3C4254",
      lightGrey: "#757B8C",
      black: "#1B1C1F"
    },
    fontFamily: {
      body: ['Inter'],
    },
  },
  plugins: [],
}