import styled from '@emotion/styled';
import { Link } from 'gatsby';

import {
  colors, breakpoints,
} from '../styles/variables';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
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

  @media (max-width: ${breakpoints.md}px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    color: ${colors.brand}
  }
`;

export default StyledLink;
