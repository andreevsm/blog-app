import * as React from 'react';
import { graphql } from 'gatsby';

import MainLayout from '../../layouts/main';

const ArticlesPage = ({ data }) => {
  const { allMarkdownRemark } = data;
  const { nodes } = allMarkdownRemark;
  const articles = nodes.map((node) => ({ ...node.frontmatter }));

  return (
    <MainLayout>
      <ul>
        {articles.map((article) => (
          <li key={article.title}>{article.title}</li>
        ))}
      </ul>
    </MainLayout>
  );
};

export const pageQuery = graphql`
  query ArticlesPageQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
        }
      }
    }
  }
`;

export default ArticlesPage;
