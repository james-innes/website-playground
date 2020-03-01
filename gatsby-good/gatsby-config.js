module.exports = {
  siteMetadata: {
    title: `James Innes`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        // path: `${__dirname}/../public/`
        path: `/Users/jamesinnes/public/my-website-data/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
}