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

const Nav = ({onOpenContact}) => {
  return (
    <nav>
      <NavLink path="/">Home</NavLink>
      <NavLink path="/pricing/">Pricing</NavLink>
      <NavLink path="/resources/">Resources</NavLink>
      <button type="button" onClick={onOpenContact}>Contact</button>
    </nav>
  )
};

NavLink.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Nav.propTypes = {
  onOpenContact: PropTypes.func.isRequired
};

export default Nav;