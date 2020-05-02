import * as React from 'react';
import { graphql, Link } from 'gatsby';

import styled from '@emotion/styled';
import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';
import { colors } from '../styles/variables';


interface PostTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
      }
    }
  }
}

const StyledLink = styled(Link)`
  padding: 0.5em;
  max-width: 300px;
  text-align: center;
  border: 1px solid ${colors.brand};
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

const PostTemplate: React.FC<PostTemplateProps> = ({ data }) => (
  <IndexLayout>
    <Page>
      <StyledContainer>
        <StyledLink to="/blog">Return to main blog page</StyledLink>
        <div>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </div>
        <StyledLink to="/blog" style={{ alignSelf: 'flex-end' }}>Return to main blog page</StyledLink>
      </StyledContainer>
    </Page>
  </IndexLayout>
);

export default PostTemplate;

export const query = graphql`
  query PostTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`;
