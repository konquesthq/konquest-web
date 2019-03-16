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
    render={data => <Img fixed={data.logoImage.childImageSharp.fixed} />}
  />
);

export default class Header extends React.Component {
  render() {
    return (
      <header className='site-header'>
        <div className="logo">
          <Link to='/'>
            <Logo/>
            Konquest
          </Link>
        </div>
        <Nav/>
        <a href="https://app.konquest.io" className="sign-in">Sign In</a>
      </header>
    );
  }
}