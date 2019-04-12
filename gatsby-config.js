require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

const { BLOCKS } = require('@contentful/rich-text-types');

module.exports = {
  siteMetadata: {
    title: `Konquest`,
    description: `Konquest automatically calculates your sales commissions, no matter how complex they are, allocating them to the right period and exposing earning pipelines to your team. No more spreadsheets. Just Konquest.`,
    author: `@KonquestHQ`,
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
    {
      resolve: `@contentful/gatsby-transformer-contentful-richtext`,
      options: {
        renderOptions: {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: node => {
              return `<img src='${
                node.data.target.fields.file['en-US'].url
                }' />`
            },
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans:300,600,800', 'Material Icons', 'Montserrat:200,800']
        },
        custom: {
          families: ['Bebas'],
          urls: ['fonts.css']
        }
      }
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-P6QFBFG',
        includeInDevelopment: false
      }
    },
    'gatsby-plugin-sitemap'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
