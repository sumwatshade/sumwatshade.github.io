import * as React from 'react';
import styled from '@emotion/styled';
import { transparentize } from 'polished';
import { Link } from 'gatsby';
import NavBarLinks from './NavBarLinks';
import {
  heights, dimensions, colors, breakpoints,
} from '../styles/variables';
import Container from './Container';

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.brand};
  color: ${transparentize(0.5, colors.white)};
`;

const HeaderInner = styled(Container)`
  height: 100%;
  display: flex;
  background-color: ${colors.brand};
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;

  @media (max-width: ${breakpoints.md}px) {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`;

const HomepageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.2rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  align-self: flex-end;

  @media (max-width: 768px) {
    display: flex;
  }
`;

interface NavBoxDiv {
  open: boolean
}

const Navbox = styled.div<NavBoxDiv>`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  z-index: 10;

  @media (max-width: ${breakpoints.md}px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 60px;
    left: ${(props) => (props.open ? '-100%' : '0')};
  }
`;

interface HamburgerDiv {
  open: boolean
}

const Hamburger = styled.div<HamburgerDiv>`
  background-color: ${colors.white};
  align-self: flex-end;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'inherit')};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: ${colors.white};
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props) => (props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)')};
    top: -10px;
  }

  ::after {
    opacity: ${(props) => (props.open ? '0' : '1')};
    transform: ${(props) => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
    top: 10px;
  }
`;

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <StyledHeader>
      <HeaderInner>
        <HomepageLink to="/">{title}</HomepageLink>
        <Toggle
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <Hamburger open /> : <Hamburger open={false} />}
        </Toggle>
        {navbarOpen ? (
          <Navbox open={false}>
            <NavBarLinks />
          </Navbox>
        ) : (
          <Navbox open>
            <NavBarLinks />
          </Navbox>
        )}
      </HeaderInner>
    </StyledHeader>
  );
};

export default Header;
