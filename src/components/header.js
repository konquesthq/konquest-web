import {graphql, Link, StaticQuery} from "gatsby"
import React from "react"
import Nav from "./nav";

import './header.scss';
import Img from "gatsby-image";

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        logoImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(height: 82, width: 78) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img className="img" fixed={data.logoImage.childImageSharp.fixed} />}
  />
);

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleToggleOpen = this.handleToggleOpen.bind(this);
  }

  handleToggleOpen() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <header className='site-header'>
        <div className="logo">
          <Link to='/'>
            <Logo/>
            Konquest
          </Link>
        </div>
        <div className={`nav-container ${this.state.open ? 'open' : ''}`}>
          <Nav/>
          <a href="https://app.konquest.io" className="sign-in">Sign In</a>
        </div>
        <button className="open-nav" type="button" onClick={this.handleToggleOpen}>Open Navigation</button>
      </header>
    );
  }
}