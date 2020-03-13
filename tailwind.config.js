module.exports = {
  theme: {
    colors: {
      neongreen: "#CFF27E",
      white: "#E7ECEF",
      cerulean: "#00A7E1",
      pink: "#F76F8E",
      jet: "#333232",
      carrot: "#FF9B42",
      aquamarine: "#73EEDC",
      pearlaqua: "#7AE7C7",
      lightmoss: "#BAD4AA",
      transparent: 'transparent'
    },
    container: {
      center: true
    },
    fontFamily: {
      title: ["Playfair Display", "Times New Roman", "serif"],
    },
    inset: {
      "12": "3rem"
    },
    extend: {
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
        "108": "27rem"
      }
    },
    zIndex: {
      "-10": "-10"
    }
  },
  variants: {
    borderColor: ['hover', 'group-hover'],
    transitionProperty: ['hover']
  },
};
