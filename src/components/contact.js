import React from 'react';
import {withPrefix} from 'gatsby';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {closeContact} from "../redux/actions";
import {init, send} from 'emailjs-com';
import {navigate} from '@reach/router';

import './contact.scss';

const honeypotId = '80df4943-44b4-45a9-8359-5b2eccb787e7';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      comments: ''
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    init('user_JbfWFohRc0NNaocgaVbDF');
  }

  handleClose() {
    this.props.closeContact();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state[honeypotId]) return;
    send('sendgrid', 'contact_form_submission', this.state);
    this.handleClose();
    const form = event.target;
    fetch("/", {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(withPrefix('/thanks')));
  }

  render() {
    return (
      <div className={`contact-form ${this.props.isContactOpen ? 'open' : ''} `}>
        <div>
          <button type="button" className="close-button" onClick={this.handleClose}>Close</button>
          <form onSubmit={this.handleSubmit} name="contact" data-netlify="true" data-netlify-honeypot={honeypotId}>
            <input type="hidden" name="form-name" value="contact"/>
            <h2>We'd love to hear from you!</h2>
            <p>Got a question? Please complete our contact form anda member of the team will get back to you asap.</p>
            <label>
              Name *
              <input type="text"
                     name="name"
                     value={this.state.name}
                     onChange={this.handleInputChange}
                     required/>
            </label>
            <label>
              Email *
              <input type="text"
                     name="email"
                     value={this.state.email}
                     onChange={this.handleInputChange}
                     required/>
            </label>
            <label>
              Phone
              <input type="text"
                     name="phone"
                     value={this.state.phone}
                     onChange={this.handleInputChange}/>
            </label>
            <label>
              Comments
              <textarea name="comments"
                        value={this.state.comments}
                        onChange={this.handleInputChange}/>
            </label>
            <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
              <input type="text"
                     name={honeypotId}
                     tabIndex="-1" value="" onChange={this.handleInputChange}/>
            </div>
            <button type="submit">Send</button>
          </form>
          <address className="vcard" itemScope itemType="http://schema.org/Organization">
            <span className="org" itemProp="name">Konquest</span>
            <div className="adr" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
              <span className="street-address" itemProp="streetAddress">Ye Olde Hundred</span>
              {<span className="extended-address" itemProp="extendedAddress">69 Church Way</span>}
              <span className="locality" itemProp="addressLocality">North Shields</span>
              {/*<span className="region" itemProp="addressRegion">Address 3</span>*/}
              <span className="postal-code" itemProp="postalCode">NE29 0AE</span>
            </div>
            <p>Call:&nbsp;<a href="tel:+441915111298" className="tel" itemProp="telephone">0191 511 1298</a></p>
            <p><a href="mailto:hello@konquest.io" className="email" itemProp="email">hello@konquest.io</a></p>
          </address>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  isContactOpen: PropTypes.bool.isRequired
};

const mapStateToProps = ({isContactOpen}) => {
  return {isContactOpen};
};

export default connect(mapStateToProps, {closeContact})(Contact);