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
              className="w-full"
              key={article.title}
            >
              <ArticleItem
                title={article.title}
                createdDate={new Date()}
                timeToRead={4}
                description="Lorem ipsum"
                imageUrl=""
                url="/article-1"
              />
            </li>
          ))}
          {articles.map((article) => (
            <li
              className="w-full"
              key={article.title}
            >
              <ArticleItem
                title={article.title}
                createdDate={new Date()}
                timeToRead={4}
                description="Lorem ipsum"
                imageUrl=""
                url="/article-1"
              />
            </li>
          ))}
          {articles.map((article) => (
            <li
              className="w-full"
              key={article.title}
            >
              <ArticleItem
                title={article.title}
                createdDate={new Date()}
                timeToRead={4}
                description="Lorem ipsum"
                imageUrl=""
                url="/article-1"
              />
            </li>
          ))}
          {articles.map((article) => (
            <li
              className="w-full"
              key={article.title}
            >
              <ArticleItem
                title={article.title}
                createdDate={new Date()}
                timeToRead={4}
                description="Lorem ipsum"
                imageUrl=""
                url="/article-1"
              />
            </li>
          ))}
          {articles.map((article) => (
            <li
              className="w-full"
              key={article.title}
            >
              <ArticleItem
                title={article.title}
                createdDate={new Date()}
                timeToRead={4}
                description="Lorem ipsum"
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
