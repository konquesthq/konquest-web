import React from "react";
import PropTypes from "prop-types";
import Layout from './layout';
import "./legals.scss"

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
