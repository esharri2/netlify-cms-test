module.exports = {
  theme: {
    colors: {
      white: "#E7ECEF",
      black: "#333232",
      transparent: "transparent"
    },
    fontFamily: {
      title: ["Ultra", "Times New Roman", "serif"],
      body: ["Source Sans Pro", "Helvetica", "san serif"]
    },
    extend: {
      spacing: {
        "almost-full": "80vh"
      },
      transitionProperty: {
        height: "height",
        opacity: "opacity"
      }
    }
  },
  variants: {
    height: ["group-hover"],
    opacity: ["group-hover"]
  }
};
