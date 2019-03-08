import {Link} from "gatsby"
import React from "react"
import Nav from "./nav";

import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className='site-header'>
        <div className="logo">
          <Link to='/'>
            Konquest
          </Link>
        </div>
        <Nav/>
        <a href="https://app.konquest.io" className="sign-in">Sign In</a>
      </header>
    );
  }
}