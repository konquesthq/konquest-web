import {Link} from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import './nav.scss';

const NavLink = ({path, children}) => {
  const currentPath =   window.location.pathname;
  const isSelected = currentPath === path;
  const selectedClass = isSelected ? "selected" : null;
  return (
    <Link to={path} className={selectedClass}>{children}</Link>
  );
};

const Nav = () => (
  <nav>
    <NavLink path="/">Home</NavLink>
    <NavLink path="/benefits/">Benefits</NavLink>
    <NavLink path="/pricing/">Pricing</NavLink>
    <NavLink path="/resources/">Resources</NavLink>
    <NavLink path="/contact/">Contact</NavLink>
    <a href="https://app.konquest.io" className="sign-in">Sign In</a>
  </nav>
);

NavLink.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Nav;