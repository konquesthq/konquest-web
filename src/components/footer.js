import React from 'react';
import {Link} from 'gatsby';

import './footer.scss';

class MailchimpSubscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({email: event.target.value});
  }

  render() {
    return (
      <form action="https://konquest.us19.list-manage.com/subscribe/post" method="POST" target="_blank" noValidate>
        <input type="hidden" name="u" value="1b4fcadd18b78063061131d93"/>
        <input type="hidden" name="id" value="f3a7dd4abc"/>
        <label htmlFor="mail-subscription">
          <span>Join the <b>Commission Mission</b> Newsletter</span>
          <span>The inside track on incentive strategy</span>
        </label>
        <input type="text"
               id="mail-subscription"
               name="EMAIL"
               placeholder="you@domain.com"
               value={this.state.email}
               onChange={this.handleChange}/>
        <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
          <input type="text"
                 name="b_1b4fcadd18b78063061131d93_f3a7dd4abc"
                 tabIndex="-1" value=""/>
        </div>
        <button type="submit">Subscribe</button>
      </form>
    )
  }
}

class Footer extends React.Component {
  render() {
    const year = new Date().getUTCFullYear();
    return (
      <footer className="site-footer">
        <div className="contact">
          <div className="links">
            <div className="social">
              <a href="https://www.linkedin.com/company/konquest/" target="_blank"
                 rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.facebook.com/Konquest-256106555318391/" target="_blank"
                 rel="noopener noreferrer">Facebook</a>
              {/*<a href="#">Instagram</a>*/}
              <a href="https://twitter.com/KonquestHQ" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
            <div className="contact" itemScope itemType="http://schema.org/Organization">
              <p>Call: <a href="tel:+441915111298" itemProp="telephone">0191 511 1298</a>&nbsp;|&nbsp;<a
                href="mailto:hello@konquest.io" itemProp="email">hello@konquest.io</a></p>
            </div>
          </div>
          <div className="subscribe">
            <MailchimpSubscribe/>
          </div>
        </div>
        <div className="copyright">
          <b>&copy; Konquest</b> {year} All rights reserved
          <ul>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms-and-conditions">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer;