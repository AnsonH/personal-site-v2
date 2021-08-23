// Site configuration

module.exports = {
  email: "ansonheung2000@gmail.com",
  resumeUrl: "https://bit.ly/3uc5UAD",

  themeColor: {
    darkCyan: "#21555B",
    black: "#1f2122",
  },

  navLinks: [
    {
      label: "About",
      url: "/#about",
    },
    {
      label: "Experience",
      url: "/#experience",
    },
    {
      label: "Projects",
      url: "/#projects",
    },
    {
      label: "Contact",
      url: "/#contact",
    },
  ],

  /**
   * Config for React Typist, a library for animating typing animations in the home page Hero section
   * @see {@link https://github.com/jstejada/react-typist#typist-props React Typist props}
   */
  reactTypistConfig: {
    avgTypingDelay: 30,
    stdTypingDelay: 0,
    cursor: {
      blink: false,
      hideWhenDone: true,
      hideWhenDoneDelay: 300,
    },
  },

  /**
   * Config for ScrollReveal, a library for animating elements as they scroll into view
   * @see {@link https://scrollrevealjs.org/api/reveal.html ScrollReveal reveal() API}
   */
  srConfig: {
    panFrom: (direction, delay = 200, distance = "10px") => ({
      delay: delay,
      distance: distance,
      origin: direction,
    }),
    popUp: {
      delay: 200,
      scale: 0.92,
      viewFactor: 0.25,
    },
  },
};
