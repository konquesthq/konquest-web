import React from 'react';
import {graphql, StaticQuery, withPrefix} from 'gatsby';
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
    const template = this.props.isDemoRequest ? 'demo_request_submission' : 'contact_form_submission';
    send('sendgrid', template, this.state);
    this.handleClose();
    navigate(withPrefix('/thanks'));
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            contentfulContactForm(title: { eq: "Contact Form" })	{
              displayTitle,
              introText {
                introText
              },
              submitButtonText,
              contactCompanyName,
              contactStreetAddress,
              contactExtendedAddress,
              contactLocality,
              contactPostalCode,
              contactTelephone,
              contactInternationalTelephone,
              contactEmail
            }
          }
        `}
        render={data => {
          const formContent = data.contentfulContactForm;
          return (
            <div className={`contact-form ${this.props.isContactOpen ? 'open' : ''} `}>
              <div>
                <button type="button" className="close-button" onClick={this.handleClose}>Close</button>
                <div className="address">
                  <h2>{formContent.displayTitle}</h2>
                  <p>{formContent.introText.introText}</p>
                  <address className="vcard" itemScope itemType="http://schema.org/Organization">
                    <span className="org" itemProp="name">{formContent.contactCompanyName}</span>
                    <div className="adr" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                      <span className="street-address" itemProp="streetAddress">{formContent.contactStreetAddress}</span>
                      <span className="extended-address"
                            itemProp="extendedAddress">{formContent.contactExtendedAddress}</span>
                      <span className="locality" itemProp="addressLocality">{formContent.contactLocality}</span>
                      <span className="postal-code" itemProp="postalCode">{formContent.contactPostalCode}</span>
                    </div>
                    <p>Call:&nbsp;<a href={`tel:${formContent.contactInternationalTelephone}`} className="tel"
                                     itemProp="telephone">{formContent.contactTelephone}</a></p>
                    <p><a href={`mailto:${formContent.contactEmail}`} className="email"
                          itemProp="email">{formContent.contactEmail}</a></p>
                  </address>
                </div>
                <form onSubmit={this.handleSubmit}>
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
                  <button type="submit">{formContent.submitButtonText}</button>
                </form>
              </div>
            </div>
          )}
        }
      />
    );
  }
}

Contact.propTypes = {
  isContactOpen: PropTypes.bool.isRequired,
  isDemoRequest: PropTypes.bool
};

const mapStateToProps = ({isContactOpen,isDemoRequest}) => {
  return {isContactOpen,isDemoRequest};
};

export default connect(mapStateToProps, {closeContact})(Contact);