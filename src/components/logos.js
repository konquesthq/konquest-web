import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import './logos.scss';

const Logo = ({customerImage}) => (
  <StaticQuery
    query={graphql`
      query {
        customerOneImage: file(relativePath: { eq: "konquest_logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        customerTwoImage: file(relativePath: { eq: "logos/cpsgroup.png" }) {
          childImageSharp {
            fluid(maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        customerThreeImage: file(relativePath: { eq: "konquest_logo.png" }) {
          childImageSharp {
            fluid(maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        customerFourImage: file(relativePath: { eq: "logos/premiergroup.png" }) {
          childImageSharp {
            fluid(maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        customerFiveImage: file(relativePath: { eq: "logos/lennonwright.png" }) {
          childImageSharp {
            fluid(maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img className="img" fluid={data[customerImage].childImageSharp.fluid} />}
  />
);

Logo.propTypes = {
  customerImage: PropTypes.string.isRequired
};

const Logos = () => (
  <ul className="logos">
    <li><Logo customerImage="customerOneImage"/></li>
    <li><Logo customerImage="customerOneImage"/></li>
    <li><Logo customerImage="customerThreeImage"/></li>
    <li><Logo customerImage="customerOneImage"/></li>
    <li><Logo customerImage="customerOneImage"/></li>
  </ul>
);

export default Logos;
