import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import PropTypes from "prop-types";

// Reference: https://www.gatsbyjs.com/docs/add-seo-component/

function SEO({ title, description, image, article }) {
  const data = useStaticQuery(graphql`
    query Head {
      site {
        siteMetadata {
          defaultDescription: description
          defaultImage: og
          defaultTitle: title
          siteUrl: url
        }
      }
    }
  `);

  const { defaultDescription, defaultImage, defaultTitle, siteUrl } = data.site.siteMetadata;

  const { pathname } = useLocation();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title}>
      <html lang="en" />

      <meta name="description" content={seo.description} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={article ? "article" : "website"} />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};

export default SEO;
