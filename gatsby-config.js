/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const config = require("./src/config");

module.exports = {
  siteMetadata: {
    title: "Anson Heung | Front-end Developer",
    description: "A front-end web developer focused on building websites with stunning interfaces and experiences.",
    og: "./og.png", // Open Graph image preview (path relative to `static/` folder)
    url: "https://www.ansonheung.me", // No trailing slash allowed
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        // https://developer.mozilla.org/en-US/docs/Web/Manifest#members
        name: `Anson Heung`,
        short_name: `Anson Heung`,
        start_url: `/`,
        background_color: config.themeColor.black,
        theme_color: config.themeColor.darkCyan,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`ubuntu:400,500`, `ubuntu mono:400,700`],
        display: "swap", // Show fallback font before Google Font is fetched
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `projects`,
    //     path: `${__dirname}/content/projects/`,
    //   },
    // },
  ],
};
