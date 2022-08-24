import { Link } from 'gatsby';
import React from "react";
import OpenContactButton from "../components/openContactButton";
import SEO from "../components/seo";
import Layout from "../components/updated/layout.updated";

import './404.scss';

const NotFoundPage = () => (
  <Layout className="info not-found">
    <div className="contents">
      <SEO title="404: Not found"/>
      <h1>Hmmmmm, this looks like a failed Konquest, we're sorry</h1>
      <p>We can't find this page for you, the link you clicked may be broken or the page may have been removed – Return to our <Link to="/">Homepage</Link> or <OpenContactButton>Contact Us</OpenContactButton> about the problem.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
