import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div style={{
    // textAlign: 'center'
  }}>
    <h1>
      <Link to={'/'}>
        Page not found, go <span title="home">🏠</span>
      </Link>
    </h1>
    <p>This page does not exist.</p>
  </div>
)

export default NotFoundPage
