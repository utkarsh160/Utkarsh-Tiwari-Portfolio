/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Utkarsh Tiwari Portfolio`,
    siteUrl: `https://utkarsh-tiwari-portfolio.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    "gatsby-plugin-netlify",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/favicon.png"
      }
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    }
],
}

