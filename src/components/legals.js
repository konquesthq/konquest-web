import PropTypes from "prop-types";
import React from "react";
import "./legals.scss";
import Layout from './updated/layout.updated';

const Legals = ({children}) => (
  <Layout className="legals">
    <section>
      <h1>Legals</h1>
      <article className="contents">
        {children}
      </article>
    </section>
  </Layout>
);

Legals.propTypes = {
  children: PropTypes.node.isRequired
};

export default Legals;
