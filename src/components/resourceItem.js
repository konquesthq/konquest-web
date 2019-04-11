import Img from "gatsby-image";
import {Link} from "gatsby";
import React from "react";

import './resourceItem.scss';

export const ResourceItem = ({resourceItem}) => (
  <div className="resource-item">
    <Img className="img" fluid={resourceItem.headerImage.fluid} />
    <div className="details">
      <h2>{resourceItem.title}</h2>
      <p>{resourceItem.description.description}</p>
      <Link to={`/resources/${resourceItem.id}`}>Read More</Link>
    </div>
  </div>
);

const ShortResourceItem = ({resourceItem}) => (
  <div className="resource-item short">
    <div className="details">
      <h2>{resourceItem.title}</h2>
      <p>{resourceItem.description.description}</p>
      <Link to={`/resources/${resourceItem.id}`}>Read More</Link>
    </div>
  </div>
);

export default ShortResourceItem;