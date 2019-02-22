import {Link} from "gatsby"
import React from "react"

import './header.scss';

const Header = () => (
  <header>
    <h1>
      <Link to='/'>
        Konquest
      </Link>
    </h1>
  </header>
);

export default Header
