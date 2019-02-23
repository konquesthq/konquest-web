import {Link} from "gatsby"
import React from "react"
import Nav from "./nav";

import './header.scss';

const Header = () => (
  <header className="site-header">
    <div className="logo">
      <Link to='/'>
        Konquest
      </Link>
    </div>
    <Nav />
  </header>
);

export default Header
