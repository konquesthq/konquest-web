import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import Contact from './contact';
import "./layout.scss"
import "./infoLayout.scss"

export default class Layout extends React.Component {
  render() {
    return (
      <div
        className={`site-container ${this.props.className ? this.props.className : ''}`}>
        <Header/>
        <main>{this.props.children}</main>
        <Footer/>
        <Contact/>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};