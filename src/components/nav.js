import {Link} from 'gatsby';
import React from 'react';

import './nav.scss';

const Nav = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/benefits/">Benefits</Link>
    <Link to="/pricing/">Pricing</Link>
    <Link to="/resources/">Resources</Link>
    <Link to="/contact/">Contact</Link>
    <a href="https://app.konquest.io" className="sign-in">Sign In</a>
  </nav>
);

export default Nav;