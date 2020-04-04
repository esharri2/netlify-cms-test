const headerHeight = "5rem";
const smoke = "#F5F5F5";
const eerie = "#261C15";
const moss = "#58641D";
const sapphire = "#176087";

module.exports = {
  theme: {
    colors: {
      light: smoke,
      dark: eerie,
      accent1: moss,
      accent2: sapphire,
      transparent: "transparent"
    },
    fontFamily: {
      title: ["Spartan", "Helvetica", "san serif"],
      body: ["Roboto", "Helvetica", "san serif"]
    },
    extend: {
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem"
      },
      opacity: {
        "80": ".8",
        "90": ".9"
      },
      spacing: {
        "almost-full": "90vh",
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
