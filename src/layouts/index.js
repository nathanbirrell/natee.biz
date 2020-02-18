import React from 'react'
import Link from 'gatsby-link'

import styles from 'github-markdown-css/github-markdown.css'
import codeStyles from 'prism-github/prism-github.css';
import { rhythm, scale } from '../utils/typography'
import config from '../../gatsby-config'

const { title } = config.siteMetadata

const navLinkStyle = {
  paddingLeft: rhythm(1 / 4)
}

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            // ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            { title }
          </Link>
        </h1>
      )
    } else {
      header = (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3
            style={{
              marginTop: 0,
            }}
          >
            <Link to={'/'}>
              { title }
            </Link>
          </h3>

          <nav>
            <Link to="/" style={navLinkStyle}>
              Home
            </Link>
            {' '}
            <Link to="/resume" style={navLinkStyle}>
              CV
            </Link>
          </nav>
        </div>
      )
    }
    return (
      <div
        className="markdown-body"
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}

        {children()}
      </div>
    )
  }
}

export default Template
