import React from 'react';
import {Link} from 'gatsby';

import './footer.scss';

class Footer extends React.Component {
  render() {
    const year = new Date().getUTCFullYear();
    return (
      <footer className="site-footer">
        <div className="contact">
          <div className="links">
            <div className="social">
              <a href="#">LinkedIn</a>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </div>
            <div className="contact" itemScope itemType="http://schema.org/Organization">
              <p>Call: <a href="tel:+441915111298" itemProp="telephone">0191 511 1298</a>&nbsp;|&nbsp;<a
                href="mailto:hello@konquest.io" itemProp="email">hello@konquest.io</a></p>
            </div>
          </div>
          <div className="subscribe">
            
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