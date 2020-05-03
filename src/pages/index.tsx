import * as React from 'react';
import { graphql } from 'gatsby';

import styled from '@emotion/styled';
import Page from '../components/Page';
import IndexLayout from '../layouts';
import GithubProjectViewer from '../components/GithubViewer';
import { colors } from '../styles/variables';

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
  width: 100%;
  
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

const SectionHeader = styled.h1`
  align-self: flex-start;
  color: ${colors.brand};
  margin: 1.5rem 0;
`;

const GithubProjects = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
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
        <SectionHeader>Github Projects</SectionHeader>
        <GithubProjects>
          <GithubProjectViewer href="https://api.github.com/repos/lshadler/webpack-demo" />
          <GithubProjectViewer href="https://api.github.com/repos/lshadler/wol-deck-generator" />
          <GithubProjectViewer href="https://api.github.com/repos/lshadler/lshadler.github.io" />
          <GithubProjectViewer href="https://api.github.com/repos/lshadler/roost" />
          <GithubProjectViewer href="https://api.github.com/repos/lshadler/covid-19" />
          <GithubProjectViewer href="https://api.github.com/repos/lshadler/dev-config" />
          <GithubProjectViewer href="https://api.github.com/repos/lshadler/indecision-plaza" />
          <GithubProjectViewer href="https://api.github.com/repos/lshadler/results-website" />
          <GithubProjectViewer href="https://api.github.com/repos/lshadler/NGC6418" />
        </GithubProjects>
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
