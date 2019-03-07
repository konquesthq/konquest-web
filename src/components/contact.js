import React from 'react';
import PropTypes from 'prop-types';

import './contact.scss';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contact-form">
        <div>
          <button type="button" className="close-button" onClick={this.props.onClose}>Close</button>
          <form>
            <h2>Contact Konquest</h2>
            <p>Vivamus ultricies nisi consequat erdum porttitor. Integer eu ipsum vehicula felis tincut convallis et a
              diam. </p>
            <label>
              Name
              <input type="text"/>
            </label>
            {/*<label>*/}
              {/*Company*/}
              {/*<input type="text"/>*/}
            {/*</label>*/}
            <label>
              Email
              <input type="text"/>
            </label>
            <label>
              Phone
              <input type="text"/>
            </label>
            <label>
              Comments
              <textarea/>
            </label>
            <button type="submit">Send</button>
          </form>
          <address className="vcard" itemScope itemType="http://schema.org/Organization">
            <span className="org" itemProp="name">Konquest</span>
            <div className="adr" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
              <span className="street-address" itemProp="streetAddress">Address 1</span>
              {/*<span className="extended-address" itemProp="extendedAddress">Address 2</span>*/}
              <span className="locality" itemProp="addressLocality">Address 2</span>
              <span className="region" itemProp="addressRegion">Address 3</span>
              <span className="postal-code" itemProp="postalCode">Address 4</span>
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
  onClose: PropTypes.func.isRequired
};