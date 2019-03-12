import React from "react";
import {StaticQuery, graphql} from "gatsby";
import Img from "gatsby-image";

import './partners.scss';

const PartnerLogo = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "konquest_logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 163) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img className="img" fluid={data.placeholderImage.childImageSharp.fluid}/>}
  />
);

const Partners = () => (
  <ul className="partners">
    <li>
      <PartnerLogo/>
      <p>Lorem ipsum dolor sit amet, consecte adipiscing elit.</p>
    </li>
    <li>
      <PartnerLogo/>
      <p>Lorem ipsum dolor sit amet, consecte adipiscing elit.</p>
    </li>
    <li>
      <PartnerLogo/>
      <p>Lorem ipsum dolor sit amet, consecte adipiscing elit.</p>
    </li>
    <li>
      <PartnerLogo/>
      <p>Lorem ipsum dolor sit amet, consecte adipiscing elit.</p>
    </li>
  </ul>
);

export default Partners;
