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

  // Config for React Typist, a library for animating typing animations in the home page Hero section
  // https://github.com/jstejada/react-typist#typist-props
  reactTypistConfig: {
    avgTypingDelay: 30,
    stdTypingDelay: 0,
    cursor: {
      blink: false,
      hideWhenDone: true,
      hideWhenDoneDelay: 300,
    },
  },

  // Config for ScrollReveal, a library for animating elements as they scroll into view
  // https://scrollrevealjs.org/api/reveal.html
  srConfig: {
    panFromLeft: {
      delay: 100,
      distance: "10px",
      origin: "left",
    },
  },
};
