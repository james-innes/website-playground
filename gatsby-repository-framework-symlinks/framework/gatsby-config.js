module.exports = {
  siteMetadata: {
    title: `James Innes`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-transformer-pdf`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        name: "projects",
        path: `${__dirname}/src/projects`,
      },
    }
  ]
}