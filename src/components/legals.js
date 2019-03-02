import React from "react";
import PropTypes from "prop-types";
import Layout from './layout';
import "./legals.scss"

const Legals = ({children}) => (
  <Layout className="legals">
    <div>
      <div className="contents">
        {children}
      </div>
    </div>
  </Layout>
);

Legals.propTypes = {
  children: PropTypes.node.isRequired
};

export default Legals;
