module.exports = {
    siteMetadata: {
        title: "Tom's corner of the internet",
        author: 'Tom Forbes',
        description: 'Hello!',
        siteUrl: 'https://tomforb.es',
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://www.tomforb.es`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {
                            destinationDir: 'posts-static/',
                        }
                    },
                    /*{
                        resolve: `gatsby-remark-sequence`,
                        options: {
                            // see more details on https://github.com/bramp/js-sequence-diagrams
                            'theme': 'hand',
                        }
                    },*/
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
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants',
                    `gatsby-remark-autolink-headers`,
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
        `gatsby-plugin-feed`,
        `gatsby-plugin-manifest`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography',
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
        `gatsby-plugin-sitemap`,
        'gatsby-plugin-catch-links',
        `gatsby-plugin-remove-trailing-slashes`,
        `gatsby-plugin-nprogress`,
    ],
}
