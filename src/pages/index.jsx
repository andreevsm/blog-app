import * as React from 'react';
import { graphql } from 'gatsby';

import '../i18n';

import MainLayout from '../layouts/main';
import ArticleItem from '../components/article-item';

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data;
  const { nodes } = allMarkdownRemark;
  const articles = nodes.map((node) => ({ ...node.frontmatter }));

  return (
    <MainLayout>
      <section className="flex justify-center py-12">
        <ul className="px-4 w-192">
          {articles.map((article) => (
            <li
              className="w-full mb-12"
              key={article.title}
            >
              <ArticleItem
                title={article.title}
                createdDate={new Date().toDateString()}
                timeToRead={4}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                imageUrl=""
                url="/article-1"
              />
            </li>
          ))}
        </ul>

      </section>
    </MainLayout>
  );
};

export const pageQuery = graphql`
  query IndexPageQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
        }
      }
    }
  }
`;

export default IndexPage;
