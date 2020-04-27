import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Img from 'gatsby-image'
import { FluidImageQuery } from '../types.ts'

const IndexPage = ({data: {file}}: FluidImageQuery) => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Welcome to 2.0 of my personal site!</h1>

        <Img fluid={file.childImageSharp.fluid} alt="Luke Shadler"/>

        <p>My name is Luke Shadler. I am a Full-Stack Software Engineer based in San Diego, California.</p>
        <code>$> Let's go make something cool.</code>
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

export const query = graphql`
  query {
    file(relativePath: { eq: "Luke_portrait_01.jpg" }) {
      childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(
            srcSetBreakpoints: [200, 400, 600, 800, 1200]
          ) {
            ...GatsbyImageSharpFluid
          }
      }
    }
  }
`
