import * as React from 'react';
import NavLink from './NavLink';

const NavBarLinks: React.FC<any> = () => (
  <>
    <NavLink to="/resume">Resume</NavLink>
    <NavLink to="/blog">Blog</NavLink>
    <NavLink to="/band">Band</NavLink>
  </>
);

export default NavBarLinks;
