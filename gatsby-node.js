/* `gatsby build` will throw an error if code from 3rd party node modules references “browser globals” like `window`
 * or `document` that aren’t available in Node.js. The following Webpack config replaces the offending modules with
 * a dummy module during build.
 *
 * https://www.gatsbyjs.com/docs/debugging-html-builds/#fixing-third-party-modules
 */
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /miniraf/,
            use: loaders.null(),
          },
          {
            test: /scrollreveal/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
