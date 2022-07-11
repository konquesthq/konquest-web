import { graphql, Link, StaticQuery } from "gatsby";
import React, { useState } from "react";
import Nav from "./nav.updated";

import Img from "gatsby-image";
import "./header.updated.scss";

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        logoImage: file(relativePath: { eq: "logo-blocks.png" }) {
          childImageSharp {
            fixed(height: 34, width: 31) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        logoText: file(relativePath: { eq: "wordmark-white.svg" }) {
          publicURL
        }
      }
    `}
    render={(data) => (
      <>
        <Img fixed={data.logoImage.childImageSharp.fixed} fadeIn={false} />
        <img src={data.logoText.publicURL} alt="Konquest" />
      </>
    )}
  />
);



const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleToggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <header className="site-header-updated">
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className={`nav-container ${open ? "open" : ""}`}>
        <Nav />

      </div>
      <button className="open-nav" type="button" onClick={handleToggleOpen}>
        Open Navigation
      </button>
    </header>
  );
};

export default Header;
