import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import "./layout.scss"

const Layout = ({children, className}) => (
  <div className={`site-container ${className ? className : ''}`}>
    <Header/>
    <main>{children}</main>
    <Footer/>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageClassName: PropTypes.string
};

export default Layout;
