module.exports = {
  siteMetadata: {
    siteTitle: 'Blog App',
    siteTitleTemplate: '%s | andreevsm',
    siteDescription: 'Blog App',
    siteUrl: 'https://www.doe.com', // No trailing slash allowed!
    siteImage: '', // Path to the image placed in the 'static' folder, in the project's root directory.
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: `${__dirname}/src/articles`,
      },
    },
    'gatsby-transformer-remark',
  ],
};
