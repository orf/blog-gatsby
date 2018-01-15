import React from 'react'
import {rhythm} from "../utils/typography"
import Tags from '../components/Tags'
import Link from 'gatsby-link'

const PostSummary = ({title, slug, excerpt, date, tags}) => {
    const hasTags = (tags || []).length > 0;
    return (
        <div key={slug}>
            <h3
                style={{
                    marginBottom: rhythm(1 / 4),
                }}
            >
                <Link style={{boxShadow: 'none'}} to={slug}>
                    {title}
                </Link>
            </h3>
            <small>
                {date}{' '}
                {hasTags &&
                <span>
                    {' - '}Under: <Tags tags={tags}/>
                </span>
                }
            </small>
            <p dangerouslySetInnerHTML={{__html: excerpt}}/>
        </div>
    )
}

export default PostSummary