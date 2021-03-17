import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to My Gatsby Blog Site.</p>
    <p>My Topic is about JAMstack.</p>
    <div className="button">
      <Link to="/blog/">View Blog Posts</Link> <br />
    </div>
  </Layout>
)

export default IndexPage
