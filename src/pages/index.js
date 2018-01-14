import React from 'react'
import PostSummary from '../components/PostSummary'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import {rhythm} from '../utils/typography'

const BlogIndex = ({data}) => {
    const siteTitle = get(data, 'site.siteMetadata.title')
    const posts = get(data, 'allMarkdownRemark.edges')

    return (
        <div>
            <Helmet title={siteTitle}/>
            <Bio/>
            {posts.map(({node}) => {
                return <PostSummary key={node.fields.slug}
                                    title={node.frontmatter.title}
                                    slug={node.fields.slug}
                                    date={node.frontmatter.date}
                                    tags={node.frontmatter.tags || []}
                                    excerpt={node.excerpt}
                />
            })}
        </div>
    )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
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
