import {Link} from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import './nav.scss';
import {Location, navigate} from '@reach/router';

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

export default class Nav extends React.Component {
  static handleContactOpen() {
    navigate('#contact-form');
  }

  render() {
    return (
      <nav>
        <NavLink path="/">Home</NavLink>
        <NavLink path="/pricing/">Pricing</NavLink>
        <NavLink path="/resources/">Resources</NavLink>
        <button type="button" onClick={Nav.handleContactOpen}>Contact
        </button>
      </nav>
    );
  }
};

NavLink.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};