import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import './logos.scss';

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "konquest_logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
);

const Logos = () => (
  <ul className="logos">
    <li><Logo /></li>
    <li><Logo /></li>
    <li><Logo /></li>
    <li><Logo /></li>
    <li><Logo /></li>
  </ul>
);

export default Logos;
