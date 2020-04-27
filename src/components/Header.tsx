import * as React from 'react';
import styled from '@emotion/styled';
import { transparentize } from 'polished';
import { Link } from 'gatsby';

import { heights, dimensions, colors } from '../styles/variables';
import Container from './Container';

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.brand};
  color: ${transparentize(0.5, colors.white)};
`;

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const HomepageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const PageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.1rem;
  margin-left: 1.0rem;
  font-weight: 400;

`;

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/">{title}</HomepageLink>
      <PageLink to="/resume">Resume</PageLink>
      <PageLink to="/blog">Blog</PageLink>
      <PageLink to="/band">Band</PageLink>
    </HeaderInner>
  </StyledHeader>
);

export default Header;
