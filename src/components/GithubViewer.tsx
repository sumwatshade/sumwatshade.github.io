/* eslint-disable camelcase */
import React from 'react';
import styled from '@emotion/styled';
import { colors, breakpoints } from '../styles/variables';
import { GithubRepoInfo } from '../types.ts/index';

const GithubViewerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 200ms ease-in;
    background-color: #789C98;

    :hover {
      color: ${({ color }) => color};
    }
    
    border: 1.5px solid ${({ color }) => color};
    border-radius: 5px;
    color: ${colors.white};
    margin: 0.5em 0;
    padding: 1em;
    min-width: 30%;
    flex-basis: 0;
    @media(max-width: ${breakpoints.md}px) {
        min-width: 100%;
    }

    a {
      color: inherit;
    }
`;

const GithubRepoName = styled.span`
    font-size: 1.2rem;
    color: inherit;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    text-overflow: scroll;
    display: inline-block;
    position: relative;

    :after {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 0%;
      content: ".";
      color: transparent;
      background: ${({ color }) => color};
      height: 1px;
    }

    :hover {
      color: ${({ color }) => color};
      ::after {
        width: 100%;
      }
    }
`;

const GithubDescription = styled.div`
    align-self: center;
    padding: 0 1.5rem;
    color: ${colors.ui.light};
`;

const GithubLanguage = styled.div`
    align-self: flex-end;
`;
const GithubPagesLink = styled(GithubRepoName)`
    font-size: 1rem;
    align-self: flex-end;
`.withComponent('a');

interface GithubProjectViewerProps {
  repo: GithubRepoInfo
}

const GithubProjectViewer: React.FC<GithubProjectViewerProps> = ({ repo }) => {
  const {
    homepageUrl, url, primaryLanguage, name, description,
  } = repo;

  return repo && repo.name ? (
    <GithubViewerContainer color={primaryLanguage.color}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubRepoName color={primaryLanguage.color}>{name}</GithubRepoName>
      </a>
      <GithubDescription>{description}</GithubDescription>
      {homepageUrl && (
      <GithubPagesLink
        color={primaryLanguage.color}
        href={homepageUrl}
      >
        View on Github Pages
      </GithubPagesLink>
      )}
      <GithubLanguage>{primaryLanguage.name}</GithubLanguage>
    </GithubViewerContainer>
  ) : (<></>);
};

export default GithubProjectViewer;
