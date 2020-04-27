import * as React from 'react';
import { graphql } from 'gatsby';

import styled from '@emotion/styled';
import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';
import BlogListItem from '../components/BlogListItem';

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

const BlogList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Blog = ({ data } : BlogProps) => {
  const { edges: posts } = data.allMarkdownRemark;


  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>Develop-Mental</h1>
          <p>
            Welcome to my blog. Here, I have written about everything from
            learning algorithms to social movements, to designing video games!
          </p>
          <BlogList>
            {posts.map(({ node: { fields, frontmatter } }:PostData) => (
              <BlogListItem to={fields.slug} title={frontmatter.title} />
            ))}
          </BlogList>
        </Container>
      </Page>
    </IndexLayout>
  );
};

export default Blog;

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
`;
