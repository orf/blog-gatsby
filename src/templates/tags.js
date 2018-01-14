import React from "react"
import PostSummary from '../components/PostSummary'
import Helmet from 'react-helmet'

export default function Tags({pathContext}) {
    const {nodes, tag, siteMetadata} = pathContext
    return (
        <div>
            <Helmet title={siteMetadata.title}/>
            <h2>
                {nodes.length} post{nodes.length === 1 ? "" : "s"} tagged with {tag}
            </h2>
            {nodes.map(node => {
                return <PostSummary key={node.fields.slug}
                                    title={node.frontmatter.title}
                                    slug={node.fields.slug}
                                    date={node.frontmatter.date}
                                    tags={node.frontmatter.tags}
                                    excerpt={node.excerpt}
                />
            })}
        </div>
    )
}


