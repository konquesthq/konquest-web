import React from 'react';

import './footer.scss';

const Footer = () => (
  <footer className="site-footer">
    <div className="links">
      <section className="social">
        <a href="#">LinkedIn</a>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
      </section>
      <section className="contact" itemScope itemType="http://schema.org/Organization">
        <p>Call: <a href="tel:+441915111298" itemProp="telephone">0191 511 1298</a>&nbsp;|&nbsp;<a
          href="mailto:hello@konquest.io" itemProp="email">hello@konquest.io</a></p>
      </section>
    </div>
  </footer>
);

export default Footer;