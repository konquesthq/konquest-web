import { Location } from '@reach/router';
import clsx from 'clsx';
import { Link, withPrefix } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import OpenContactButton from '../openContactButton';
import './nav.updated.scss';

const NavLink = ({path, children}) => {
  return (
    <Location>
      {
        ({location}) => {
          const isHome = path === "/";
          const isSelected = isHome ? location.pathname === withPrefix(path) : location.pathname.startsWith(withPrefix(path));

          return <li><Link to={path} className={clsx(isSelected && 'selected')}>{children}</Link></li>
        }
      }
    </Location>
  );
};

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="site-nav-updated">
        <ul>
          <NavLink path="/">Home</NavLink>
          <NavLink path="/pricing/">Pricing</NavLink>
          <NavLink path="/resources/">Resources</NavLink>
          <li><OpenContactButton>Contact</OpenContactButton></li>
          <li><a href='https://app.konquest.io'>Sign-In</a></li>
        </ul>
      </nav>
    );
  }
};

NavLink.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};