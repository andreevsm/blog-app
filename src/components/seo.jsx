import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, image }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteDescription
          siteTitleTemplate
          siteUrl
          siteImage
        }
      }
    }
  `);

  const { siteTitle, siteDescription, siteTitleTemplate, siteUrl, siteImage } =
    site.siteMetadata;

  const seo = {
    title: title || siteTitle,
    description: description || siteDescription,
    image: `${siteUrl}${image || siteImage}`,
    url: `${siteUrl}`,
  };

  return (
    <Helmet title={seo.title} titleTemplate={siteTitleTemplate}>
      <meta name="description" content={seo.description} />
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
    </Helmet>
  );
};

export default SEO;
