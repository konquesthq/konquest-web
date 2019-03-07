import {Link} from "gatsby"
import React from "react"
import PropTypes from "prop-types"
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
        <Nav onOpenContact={this.props.onOpenContact} />
        <a href="https://app.konquest.io" className="sign-in">Sign In</a>
      </header>
    );
  }
}

Header.propTypes = {
  onOpenContact: PropTypes.func.isRequired
};