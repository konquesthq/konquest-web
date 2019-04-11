import React from "react";
import {StaticQuery, graphql} from "gatsby";
import Img from "gatsby-image";

import './partners.scss';

const Partners = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulLogos(title: { eq: "Partner Logos" })	{
          logos {
            id,
            fluid(maxHeight: 234) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    `}
    render={data => (
        <ul className="partners">
          {
            data.contentfulLogos.logos.map(node => (
              <li key={node.id}>
                <Img className="img" fluid={node.fluid}/>
              </li>
            ))
          }
        </ul>
      )
    }
  />
);

export default Partners;
