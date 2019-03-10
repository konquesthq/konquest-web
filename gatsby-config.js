require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Konquest`,
    description: `Take the pain out of payroll with auto-calculation of commissions, no matter how complex your scheme setup.`,
    author: `@johnjkerr`,
  },
  pathPrefix: "/konquest-web",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `konquest`,
        short_name: `konquest`,
        start_url: `/`,
        background_color: `#c01b1f`,
        theme_color: `#c01b1f`,
        display: `minimal-ui`,
        icon: `src/images/favicon-96x96.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans', 'Material Icons']
        },
        custom: {
          families: ['Bebas'],
          urls: ['fonts.css']
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
