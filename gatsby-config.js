/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Portfolio Blog`,
    author: `Gustavo Quinta`,
    description: `Welcome`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`
  },
  /* Plugins */
  plugins: [
    // Typescript
    'gatsby-plugin-typescript',
    // SASS
    'gatsby-plugin-sass',
    // React Helmet
    'gatsby-plugin-react-helmet',
    // File system
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets`,
        name: 'assets'
      }
    }
  ]
}
