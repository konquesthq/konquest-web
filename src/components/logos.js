import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import './logos.scss';

const Logo = ({customerImage}) => (
  <StaticQuery
    query={graphql`
      query {
        customerOneImage: file(relativePath: { eq: "logos/customer-theojames.png" }) {
          childImageSharp {
            fluid(maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        customerTwoImage: file(relativePath: { eq: "logos/customer-cps.png" }) {
          childImageSharp {
            fluid(maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        customerThreeImage: file(relativePath: { eq: "logos/customer-gem.png" }) {
          childImageSharp {
            fluid(maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        customerFourImage: file(relativePath: { eq: "logos/customer-premiergroup.png" }) {
          childImageSharp {
            fluid(maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        customerFiveImage: file(relativePath: { eq: "logos/customer-lennonwright.png" }) {
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
    <li><Logo customerImage="customerTwoImage"/></li>
    <li><Logo customerImage="customerThreeImage"/></li>
    <li><Logo customerImage="customerFourImage"/></li>
    <li><Logo customerImage="customerFiveImage"/></li>
  </ul>
);

export default Logos;
