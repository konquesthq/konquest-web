import {Link} from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import './nav.scss';
import {Location} from '@reach/router';

const NavLink = ({path, children}) => {
  return (
    <Location>
      {
        ({location}) => {
          const currentPath = location.pathname.replace('/konquest-web', ''); // hack for hosting on gh-pages
          const isSelected = currentPath === path;
          const selectedClass = isSelected ? "selected" : null;
          return <Link to={path} className={selectedClass}>{children}</Link>
        }
      }
    </Location>
  );
};

const Nav = () => {
  return (
    <nav>
      <NavLink path="/">Home</NavLink>
      <NavLink path="/benefits/">Benefits</NavLink>
      <NavLink path="/pricing/">Pricing</NavLink>
      <NavLink path="/resources/">Resources</NavLink>
      <NavLink path="/contact/">Contact</NavLink>
      <a href="https://app.konquest.io" className="sign-in">Sign In</a>
    </nav>
  )
};

NavLink.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Nav;