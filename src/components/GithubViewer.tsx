/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { colors, breakpoints } from '../styles/variables';

interface GithubApiData {
    html_url: string,
    full_name: string,
    language: string,
    description: string,
    homepage: string
}


const GithubViewerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border: 1px solid ${colors.brand};
    border-radius: 5px;
    color: ${colors.brand};
    margin: 0.5em 0;
    padding: 1em;
    min-width: 30%;
    flex-basis: 0;
    @media(max-width: ${breakpoints.md}px) {
        min-width: 100%;
    }
`;

const GithubRepoName = styled.span`
    font-size: 1.2rem;

    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    color: ${colors.brand};
    text-overflow: scroll;
    display: inline-block;
    transition: all 200ms ease-in;
    position: relative;

    :after {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 0%;
      content: ".";
      color: transparent;
      background: goldenrod;
      height: 1px;
      transition: all 0.4s ease-in;
    }

    :hover {
      color: goldenrod;
      ::after {
        width: 100%;
      }
    }
`;

const GithubDescription = styled.div`
    align-self: center;
    padding: 0 1.5rem;
    color: ${colors.gray.calm};
`;

const GithubLanguage = styled.div`
    align-self: flex-end;
`;
const GithubPagesLink = styled(GithubRepoName)`
    font-size: 1rem;
    align-self: flex-end;
`.withComponent('a');

interface GithubProjectViewerProps {
    href: string
}

const GithubProjectViewer: React.FC<GithubProjectViewerProps> = ({ href }) => {
  const [data, setData] = useState<GithubApiData>({
    html_url: '',
    description: '',
    full_name: '',
    language: '',
    homepage: '',
  });

  const {
    full_name, language, description, html_url, homepage,
  } = data;

  useEffect(() => {
    fetch(href, {
      mode: 'cors',
    }).then((r) => r.json()).then((res) => {
      setData(res);
    });
  }, []);

  return data && data.full_name ? (
    <GithubViewerContainer>
      <a href={html_url} target="_blank" rel="noopener noreferrer"><GithubRepoName>{full_name}</GithubRepoName></a>
      <GithubDescription>{description}</GithubDescription>
      {homepage && <GithubPagesLink href={homepage}>View on Github Pages</GithubPagesLink>}
      <GithubLanguage>{language}</GithubLanguage>
    </GithubViewerContainer>
  ) : (<></>);
};

export default GithubProjectViewer;
