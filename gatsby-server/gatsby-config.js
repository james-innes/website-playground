module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `../public`
      }
    },
    `gatsby-transformer-remark`
  ]
};
