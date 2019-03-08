import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import Contact from './contact';
import "./layout.scss"
import "./infoLayout.scss"
import {Location, navigate} from '@reach/router';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.children = props.children;
    this.className = props.className;
    Layout.handleCloseContact = Layout.handleCloseContact.bind(this);
  }

  static handleCloseContact() {
    navigate('#');
  }

  render() {
    const {location} = this.props;
    const isContactOpen = location.hash === '#contact-form';
    return (
      <div
        className={`site-container ${this.className ? this.className : ''} ${isContactOpen ? 'contact-open' : ''}`}>
        <Header/>
        <main>{this.children}</main>
        <Footer/>
        <Contact onClose={Layout.handleCloseContact}/>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default props => (
  <Location>
    {locationProps => <Layout {...locationProps} {...props} />}
  </Location>
);