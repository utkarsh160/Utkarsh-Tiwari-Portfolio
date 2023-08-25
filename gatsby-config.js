/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Utkarsh Tiwari Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    }
],
}
