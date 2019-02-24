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
    <a href="https://app.konquest.io" className="sign-in">Sign In</a>
  </header>
);

export default Header
