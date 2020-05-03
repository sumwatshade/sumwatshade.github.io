import * as React from 'react';
import { graphql, Link } from 'gatsby';

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

const ContactSpan = styled.a`
  :hover {
    color: cyan;
  }
  color: #22da26;
  text-decoration: underline;
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid ${colors.brand};
  border-radius: 5px;
  padding: 1em;
`;

const ContactLink = ContactSpan.withComponent(Link);

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Window>
          <Terminal>
            <Command>
              My name is Luke Shadler. I am a Full-Stack Software Engineer
              based in San Diego, California.
            </Command>
            <Command>
              Want more detailed experience data?&nbsp;
              <ContactLink to="/resume">Click here to view my resume</ContactLink>
            </Command>
            {' '}
            <Command>
              Let&apos;s make something cool together!&nbsp;
              <ContactSpan href="#contact">Click here to scroll to contact!</ContactSpan>
            </Command>
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
        <SectionHeader id="contact">Contact</SectionHeader>
        <ContactSection>
          <div>Name: Lucas Shadler</div>
          <div>Phone: (585)766-7886</div>
          <div>
            E-Mail:&nbsp;
            <a href="mailto:lshadler13@gmail.com">lshadler13@gmail.com</a>
          </div>
          <div>
            Github:&nbsp;
            <a href="https://github.com/lshadler" target="_blank" rel="noopener noreferrer">lshadler</a>
          </div>
        </ContactSection>
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
