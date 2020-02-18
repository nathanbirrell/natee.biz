import React from 'react'
import Link from 'gatsby-link'

import config from '../../gatsby-config'
import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'
import Separator from '../components/Separator'

const { author, description } = config.siteMetadata

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          { description } <br />
          <small>
            🇦🇺 Melbourne, Australia
            <Separator />
            <a href="https://github.com/nathanbirrell">
              Github
            </a>
            <Separator />
            <a href="http://linkedin.com/in/nathanbirrell">
              Linkedin
            </a>
            <Separator />
            <Link to="/resume">
              CV
            </Link>
            {/* <Separator /> */}
            {/* <a href="http://instagram.com/nathanbirrell">
              Instagram
            </a> */}
          </small>
        </p>
      </div>
    )
  }
}

export default Bio
