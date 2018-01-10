module.exports = {
    siteMetadata: {
        title: "Tom's corner of the internet",
        description: "",
        author: "Tom Forbes",
        siteUrl: 'https://tomforb.es'
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: "pages",
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    "gatsby-remark-prismjs",
                    "gatsby-remark-copy-linked-files",
                    "gatsby-remark-smartypants",
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `UA-48915373-1`,
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-catch-links',
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                {
                  site {
                    siteMetadata {
                      title
                      description
                      siteUrl
                      site_url: siteUrl
                    }
                  }
                }
              `,
                feeds: [
                    {
                        serialize: ({query: {site, allMarkdownRemark}}) => {
                            return allMarkdownRemark.edges.map(edge => {
                                return Object.assign({}, edge.node.frontmatter, {
                                    description: edge.node.excerpt,
                                    url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                                    guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                                    custom_elements: [{"content:encoded": edge.node.html}],
                                })
                            })
                        },
                        query: `
                        {
                          allMarkdownRemark(
                            limit: 1000,
                            sort: { order: DESC, fields: [frontmatter___date] },
                            filter: {frontmatter: { draft: { ne: true } }}
                          ) {
                            edges {
                              node {
                                excerpt
                                html
                                frontmatter {
                                  title
                                  date
                                  path
                                }
                              }
                            }
                          }
                        }
                      `,
                        output: "/rss.xml",
                    },
                ],
            },
        },
        `gatsby-plugin-netlify`,
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                // Setting a color is optional.
                color: `blue`,
                // Disable the loading spinner.
                showSpinner: false,
            },
        },
        `gatsby-plugin-sitemap`
    ],
}
