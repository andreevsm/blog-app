import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from '../layouts/main';

const Template = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <MainLayout title={frontmatter.title} description={frontmatter.description}>
      <article className="p-12">
        <div className="mx-auto px-3 w-192">
          <header>
            <h2 className="text-4xl font-bold mb-4">{frontmatter.title}</h2>
            <div className="mb-4 color-gray text-sm">
              <span>
                Published
                {' '}
                {frontmatter.date}
              </span>
              <span className="ml-1">| 5 min read</span>
            </div>
          </header>
          <h3>{frontmatter.description}</h3>

          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />

        </div>

      </article>
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
