const _ = require('lodash')
const Promise = require('bluebird')
const {createFilePath} = require('gatsby-source-filesystem')

const path = require("path")

const createTagPages = (createPage, edges, siteMetadata) => {
    // Tell it to use our tags template.
    const tagTemplate = path.resolve(`src/templates/tags.js`)
    // Create an empty object to store the posts.
    const posts = {}

    // Loop through all nodes (our markdown posts) and add the tags to our post object.

    edges.forEach(({node}) => {
        if (node.frontmatter.tags) {
            node.frontmatter.tags.forEach(tag => {
                if (!posts[tag]) {
                    posts[tag] = []
                }
                posts[tag].push(node)
            })
        }
    })

    // For each of the tags in the post object, create a tag page.
    Object.keys(posts).forEach(tagName => {
        const nodes = posts[tagName]
        createPage({
            path: `/tags/${tagName}`,
            component: tagTemplate,
            context: {
                nodes,
                tag: tagName,
                siteMetadata
            },
        })
    })
}

exports.createPages = ({graphql, boundActionCreators}) => {
    const {createPage} = boundActionCreators

    return new Promise((resolve, reject) => {
        const blogPost = path.resolve('./src/templates/blog-post.js')
        resolve(
            graphql(
                `
          {
            site {
              siteMetadata {
                title
              }
            }
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
              edges {
                node {
                  excerpt
                  fields {
                    slug
                  }
                  frontmatter {
                    date(formatString: "DD MMMM, YYYY")
                    title
                    tags
                  }
                }
              }
            }
          }
        `
            ).then(result => {
                if (result.errors) {
                    // eslint-disable-next-line no-console
                    console.error(result.errors)
                    reject(result.errors)
                }

                // Create blog posts pages.
                const posts = result.data.allMarkdownRemark.edges
                createTagPages(createPage, posts, result.data.site.siteMetadata)

                _.each(posts, (post, index) => {
                    const previous = index === posts.length - 1 ? false : posts[index + 1].node
                    const next = index === 0 ? false : posts[index - 1].node

                    createPage({
                        path: post.node.fields.slug,
                        component: blogPost,
                        context: {
                            slug: post.node.fields.slug,
                            previous,
                            next,
                        },
                    })
                })
            })
        )
    })
}

exports.onCreateNode = ({node, boundActionCreators, getNode}) => {
    const {createNodeField} = boundActionCreators

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({node, getNode})
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}
