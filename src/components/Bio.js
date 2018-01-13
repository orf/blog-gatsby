import React from 'react'
import Gravatar from 'react-gravatar'

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
                    <a href="https://github.com/orf/">You can see if there is anything useful on my Github</a>
                </p>
            </div>
        )
    }
}
