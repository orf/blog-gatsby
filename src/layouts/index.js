import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import {Container} from 'react-responsive-grid'
import {rhythm, scale} from '../utils/typography'
import HeaderImage from '../components/HeaderImage'

import "prismjs/themes/prism-tomorrow.css"

class Template extends React.Component {
    render() {
        const {children} = this.props
        let style
        style = {
            ...scale(1.5),
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(1.5),
        }
        const header = (

            <h1
                style={style}
            >
                <Link
                    style={{
                        boxShadow: 'none',
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                    to={'/'}
                >
                    {get(this, 'props.data.site.siteMetadata.title')}
                </Link>
            </h1>
        )
        return (
            <div>
                <Container
                    style={{
                        maxWidth: rhythm(30),
                        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                        zIndex: 2
                    }}
                >
                    {header}
                    {children()}
                </Container>
            </div>
        )
    }
}

export default Template

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`