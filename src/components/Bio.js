import React from 'react'
import Gravatar from 'react-gravatar'
import Link from 'gatsby-link'

// Import typefaces
import {rhythm} from '../utils/typography'

export default class Bio extends React.Component {
    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    marginBottom: rhythm(0.5),
                }}
            >
                <Gravatar email={'tom@tomforb.es'} style={{
                    marginRight: rhythm(1 / 2),
                    marginBottom: 0,
                    width: rhythm(2),
                    height: rhythm(2),
                }}/>
                <p>
                    Written by <strong>Tom Forbes</strong> who lives and works in London
                    building useful things with Python and Django.{' '}
                    I usually blog about{' '}
                    <Link style={{boxShadow: 'none'}} to='/tags/security'>security</Link>,{' '}
                    <Link style={{boxShadow: 'none'}} to='/tags/projects'>my projects</Link> and{' '}
                    <Link style={{boxShadow: 'none'}} to='/tags/experiments'>random experiments</Link>
                </p>
            </div>
        )
    }
}
