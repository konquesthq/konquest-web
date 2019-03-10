import {Link, withPrefix} from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import './nav.scss';
import {Location} from '@reach/router';
import OpenContactButton from './openContactButton';

const NavLink = ({path, children}) => {
  return (
    <Location>
      {
        ({location}) => {
          const isHome = path === "/";
          const isSelected = isHome ? location.pathname === withPrefix(path) : location.pathname.startsWith(withPrefix(path));
          const selectedClass = isSelected ? "selected" : null;
          return <Link to={path} className={selectedClass}>{children}</Link>
        }
      }
    </Location>
  );
};

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <NavLink path="/">Home</NavLink>
        <NavLink path="/pricing/">Pricing</NavLink>
        <NavLink path="/resources/">Resources</NavLink>
        <OpenContactButton>Contact</OpenContactButton>
      </nav>
    );
  }
};

NavLink.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};