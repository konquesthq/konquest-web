import React from "react";
import {StaticQuery, graphql} from "gatsby";
import Img from "gatsby-image";

import './logos.scss';

const Logos = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulLogos(title: { eq: "Customer Logos" })	{
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
      <ul className="logos">
        {
          data.contentfulLogos.logos.map(node => (
            <li key={node.id}>
              <Img className="img" fluid={node.fluid} imgStyle={{ objectFit: 'contain' }}/>
            </li>
          ))
        }
      </ul>
    )}
  />
);

export default Logos;
