import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <ul>
          <li><Link to="/blog/">Blog</Link></li>
          <li><Link to="/resume/">Resume</Link></li>
          <li><Link to="/band/">Band</Link></li>
        </ul>
        
        
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
