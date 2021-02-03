import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openContact } from "../redux/actions";

const contactModes = ["Demo", "Contact"];

class OpenContactButton extends React.Component {
  constructor(props) {
    super(props);
    this.isDemoRequest = props.contactMode === "Demo";
    this.handleRequestDemo = this.handleRequestDemo.bind(this);
  }

  handleRequestDemo() {
    this.props.openContact(this.isDemoRequest);
  }

  render() {
    return (
      <button type="button" className="open-contact-form" onClick={this.handleRequestDemo}>{this.props.children}</button>
    );
  }
}

OpenContactButton.propTypes = {
  children: PropTypes.node.isRequired,
  contactMode: PropTypes.oneOf(contactModes)
};

export default connect(
  null,
  { openContact }
)(OpenContactButton);