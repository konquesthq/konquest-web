import React from "react"
import Info from "../components/info"
import SEO from "../components/seo"

import './404.scss';

const NotFoundPage = () => (
  <Info className="not-found">
    <SEO title="404: Not found" />
    <h1>This isn't the primate you're looking for</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla volutpat eget. </p>
  </Info>
);

export default NotFoundPage;
