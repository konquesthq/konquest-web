import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import Contact from './contact';
import "./layout.scss"
import "./infoLayout.scss"

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.children = props.children;
    this.className = props.className;
  }

  render() {
    return (
      <div
        className={`site-container ${this.className ? this.className : ''}`}>
        <Header/>
        <main>{this.children}</main>
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