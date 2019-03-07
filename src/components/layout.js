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
    this.state = {
      isContactOpen: false
    };
    this.handleOpenContact = this.handleOpenContact.bind(this);
    this.handleCloseContact = this.handleCloseContact.bind(this);
  }

  handleOpenContact() {
    this.setState({
      isContactOpen: true
    });
  }

  handleCloseContact() {
    this.setState({
      isContactOpen: false
    });
  }

  render() {
    return (
      <div className={`site-container ${this.className ? this.className : ''} ${this.state.isContactOpen ? 'contact-open' : ''}`}>
        <Header onOpenContact={this.handleOpenContact} />
        <main>{this.children}</main>
        <Footer/>
        <Contact onClose={this.handleCloseContact}/>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};