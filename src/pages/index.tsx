import * as React from 'react';
import { graphql, Link } from 'gatsby';

import styled from '@emotion/styled';
import Page from '../components/Page';
import IndexLayout from '../layouts';
import GithubProjectViewer from '../components/GithubViewer';
import { colors } from '../styles/variables';
import { GithubRepoInfo } from '../types.ts/index';

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

interface IndexProps {
  data: {
    github: {
      user: {
        site: GithubRepoInfo,
        covid: GithubRepoInfo,
        webpackDemo: GithubRepoInfo,
        roost: GithubRepoInfo,
        wolDeckGenerator: GithubRepoInfo,
        indecisionPlaza: GithubRepoInfo,
      }
    }
  }
}

const IndexPage: React.FC<IndexProps> = ({ data }) => (
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
              <ContactSpan href="#contact">Click here to view contact information</ContactSpan>
            </Command>
          </Terminal>
        </Window>
        <SectionHeader>Github Projects</SectionHeader>
        <GithubProjects>
          <GithubProjectViewer repo={data.github.user.webpackDemo} />
          <GithubProjectViewer repo={data.github.user.site} />
          <GithubProjectViewer repo={data.github.user.roost} />
          <GithubProjectViewer repo={data.github.user.wolDeckGenerator} />
          <GithubProjectViewer repo={data.github.user.covid} />
          <GithubProjectViewer repo={data.github.user.indecisionPlaza} />
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
fragment repoInfo on GitHub_Repository{
  description
  homepageUrl
  url
  name
  primaryLanguage {
    color
    name
  }
}

query IndexQuery {
  github {
    user(login: "lshadler") {
      site: repository(name: "lshadler.github.io") {
        ...repoInfo
      }
      covid: repository(name: "covid-19") {
        ...repoInfo
      }
      webpackDemo: repository(name: "webpack-demo") {
        ...repoInfo
      }
      roost: repository(name: "roost") {
        ...repoInfo
      }
      wolDeckGenerator: repository(name: "wol-deck-generator") {
        ...repoInfo
      }
      indecisionPlaza: repository(name: "indecision-plaza") {
        ...repoInfo
      }
    }
  }
}
`;
