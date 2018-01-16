import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import styles from "./Tags.module.css"

const Tags = ({tags}) => {
    return (
        <ul className={styles.tags}>
            {tags.map(tag => {
                return <li key={tag} className={styles.tag}>
                    <Link style={{boxShadow: 'none'}} to={`/tags/${tag}`}>{tag}</Link>
                </li>
            })}
        </ul>
    )

}

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Tags