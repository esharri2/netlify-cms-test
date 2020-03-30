const headerHeight = "5rem";

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
      opacity: {
        "80": ".8",
        "90": ".9"
      },
      spacing: {
        "almost-full": "80vh",
        "header" : headerHeight
      },
      inset: {
        "headerHeight" : headerHeight
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
