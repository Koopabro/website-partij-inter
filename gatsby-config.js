module.exports = {
  siteMetadata: {
    title: "Partij INTER. - Universiteit van Amsterdam",
    author: "Evrim Hotamis",
    description: "De homepage van partij INTER. - de partij die staat voor een bredere ontwikkeling binnen het medisch onderwijs"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
