import * as React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }  
  `)
  return (
    <main className="container">

      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand columns is-desktop is-vcentered">
          <Link to="/" className="navbar-item">
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <p className="title is-1">{data.site.siteMetadata.title}</p>
          </Link>
          <Link to="/" className="navbar-item">
            Home
          </Link>

          <Link to="/about" className="navbar-item">
            About
          </Link>

          <Link to="/blog" className="navbar-item">
            Blog
          </Link>
        </div>
      </nav>
      
    <h1 className="title is-3">{pageTitle}</h1>
    {children}
    
    </main>
    
  )
}
export default Layout