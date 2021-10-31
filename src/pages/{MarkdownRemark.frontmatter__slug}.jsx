import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from '../layouts/main';

const Template = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <MainLayout title={frontmatter.title} description={frontmatter.description}>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <h3>{frontmatter.description}</h3>

      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </MainLayout>
  );
};

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
      }
    }
  }
`;

export default Template;
