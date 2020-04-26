import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

interface PostData {
  node: {
    fields: {
      slug: string
    },
    frontmatter: {
      title: string
    }
  }
}

interface BlogProps {
  data: {
    allMarkdownRemark: {
      edges: Array<PostData>
    }
  }
}

const Blog = ({data} : BlogProps) => {
  const {edges: posts} = data.allMarkdownRemark;


  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>Blog</h1>
          <p>A collection of projects and writings from me!</p>
          <ul>
            {posts.map(({node: {fields, frontmatter}}:PostData) => (
              <li><Link to={fields.slug}>{frontmatter.title}</Link></li>
            ))}
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default Blog

export const query = graphql`
  query GetMarkdownPage {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
