import React from "react";
import PropTypes from "prop-types";
import Header from './header';

import './info.scss';

const Info = ({children, className}) => (
  <div className={`site-container info ${className ? className : ''}`}>
    <Header/>
    <main>
      <div className="contents">
        {children}
      </div>
    </main>
  </div>
);

Info.propTypes = {
  children: PropTypes.node.isRequired
};

export default Info;
