import React from "react";
import PropTypes from "prop-types";
import {StaticQuery, graphql} from "gatsby";
import Img from "gatsby-image";

import './logos.scss';

const Logo = ({customerImage}) => (
  <StaticQuery
    query={graphql`
      query {
        contentfulLogos	{
          logos {
            id,
            fluid(maxHeight: 112) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    `}
    render={data => <Img className="img" fluid={data.contentfulLogos.logos[customerImage].fluid}/>}
  />
);

Logo.propTypes = {
  customerImage: PropTypes.number.isRequired
};

const Logos = () => (
  <ul className="logos">
    <li><Logo customerImage={0}/></li>
    <li><Logo customerImage={1}/></li>
    <li><Logo customerImage={2}/></li>
    <li><Logo customerImage={3}/></li>
    <li><Logo customerImage={4}/></li>
  </ul>
);

export default Logos;
