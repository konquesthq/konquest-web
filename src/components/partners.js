import React from "react";
import PropTypes from 'prop-types';
import {StaticQuery, graphql} from "gatsby";
import Img from "gatsby-image";

import './partners.scss';

const PartnerLogo = ({partnerImage}) => (
  <StaticQuery
    query={graphql`
      query {
        partnerOneImage: file(relativePath: { eq: "logos/partner-bullhorn.png" }) {
          childImageSharp {
            fluid(maxWidth: 234) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        partnerTwoImage: file(relativePath: { eq: "logos/partner-accessgroup.png" }) {
          childImageSharp {
            fluid(maxWidth: 234) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        partnerThreeImage: file(relativePath: { eq: "logos/partner-engage.png" }) {
          childImageSharp {
            fluid(maxWidth: 234) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        partnerFourImage: file(relativePath: { eq: "logos/partner-vincere.png" }) {
          childImageSharp {
            fluid(maxWidth: 234) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img className="img" fluid={data[partnerImage].childImageSharp.fluid}/>}
  />
);

PartnerLogo.propTypes = {
  partnerImage: PropTypes.string.isRequired
};

const Partners = () => (
  <ul className="partners">
    <li>
      <PartnerLogo partnerImage="partnerOneImage"/>
      <p>Lorem ipsum dolor sit amet, consecte adipiscing elit.</p>
    </li>
    <li>
      <PartnerLogo partnerImage="partnerTwoImage"/>
      <p>Lorem ipsum dolor sit amet, consecte adipiscing elit.</p>
    </li>
    <li>
      <PartnerLogo partnerImage="partnerThreeImage"/>
      <p>Lorem ipsum dolor sit amet, consecte adipiscing elit.</p>
    </li>
    <li>
      <PartnerLogo partnerImage="partnerFourImage"/>
      <p>Lorem ipsum dolor sit amet, consecte adipiscing elit.</p>
    </li>
  </ul>
);

export default Partners;
