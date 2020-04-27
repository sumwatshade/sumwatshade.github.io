import * as React from 'react';
import { graphql } from 'gatsby';

import styled from '@emotion/styled';
import Page from '../components/Page';
import IndexLayout from '../layouts';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Window = styled.div`
  border-radius: 3px;
  background: #222;
  color: #fff;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  width: 70%;
  
  &:before {
    content: ' ';
    display: block;
    height: 48px;
    background: #C6C6C6;
  }
  
  &:after {
    content: '. . .';
    position: absolute;
    left: 12px;
    right: 0;
    top: -3px;
    font-family: "Times New Roman", Times, serif;
    font-size: 96px;
    color: #fff;
    line-height: 0;
    letter-spacing: -12px;
  }
`;

const Terminal = styled.div`
  margin: 20px;
  font-family: monospace;
  font-size: 16px;
  color: #22da26;
}`;

const Command = styled.p`
  width: 100%;
  white-space: wrap;
  overflow: wrap;
  animation: write-command 5s both;
  
  &:before {
    content: '$ ';
    color: #22da26;
  }
`;


const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Window>
          <Terminal>
            <Command>Welcome to 2.0 of my personal site!</Command>
            <Command>
              My name is Luke Shadler. I am a Full-Stack Software Engineer
              based in San Diego, California.
            </Command>
            <Command>Let&apos;s go make something cool!</Command>
          </Terminal>
        </Window>
      </Container>
    </Page>
  </IndexLayout>
);

export default IndexPage;

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
`;
