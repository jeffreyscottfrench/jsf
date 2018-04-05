module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    siteURL: 'https://jeffreyscottfrench.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        precision: 8, // SASS default: 5
      },
    },
  ],
};
