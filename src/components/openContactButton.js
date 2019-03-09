import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openContact } from "../redux/actions";

class OpenContactButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleRequestDemo = this.handleRequestDemo.bind(this);
  }

  handleRequestDemo() {
    this.props.openContact();
  }

  render() {
    return (
      <button type="button" onClick={this.handleRequestDemo}>{this.props.children}</button>
    );
  }
}

OpenContactButton.propTypes = {
  children: PropTypes.node.isRequired
};

export default connect(
  null,
  { openContact }
)(OpenContactButton);