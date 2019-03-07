import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import './404.scss';

const NotFoundPage = () => (
  <Layout className="info not-found">
    <div className="contents">
      <SEO title="404: Not found"/>
      <h1>This isn't the primate you're looking for</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla volutpat
        eget.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
