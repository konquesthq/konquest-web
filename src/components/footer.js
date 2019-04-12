import React from 'react';
import PropTypes from 'prop-types';
import {graphql, Link, StaticQuery} from 'gatsby';

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
              <span
                dangerouslySetInnerHTML={{
                  __html: this.props.content.subscribeText.childContentfulRichText.html,
                }}
              />
          <span>{this.props.content.subscribeSubText}</span>
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
                 tabIndex="-1" value="" onChange={() => {
          }}/>
        </div>
        <button type="submit">{this.props.content.subscribeButtonText}</button>
      </form>
    )
  }
}

MailchimpSubscribe.propTypes = {
  content: PropTypes.object.required
};

class Footer extends React.Component {
  render() {
    const year = new Date().getUTCFullYear();
    return (
      <StaticQuery
        query={graphql`
          query {
            contentfulFooter(title: { eq: "Footer" })	{
              contactTelephone,
              contactInternationalTelephone,
              contactEmail,
              subscribeText {
                childContentfulRichText {
                  html
                }
              },
              subscribeSubText,
              subscribeButtonText
            }
          }
        `}
        render={data => (
          <footer className="site-footer">
            <div className="contact">
              <div className="links">
                <div className="social">
                  <a href="https://www.linkedin.com/company/konquest/" target="_blank"
                     rel="noopener noreferrer" className="linkedin">LinkedIn</a>
                  <a href="https://www.facebook.com/Konquest-256106555318391/" target="_blank"
                     rel="noopener noreferrer" className="facebook">Facebook</a>
                  <a href="https://twitter.com/KonquestHQ" target="_blank" rel="noopener noreferrer"
                     className="twitter">Twitter</a>
                </div>
                <address className="contact vcard" itemScope itemType="http://schema.org/Organization">
                  <p>Call: <a href={`tel:${data.contentfulFooter.contactInternationalTelephone}`} className="tel"
                              itemProp="telephone">{data.contentfulFooter.contactTelephone}</a>&nbsp;|&nbsp;<a
                    href={`mailto:${data.contentfulFooter.contactEmail}`} className="email"
                    itemProp="email">{data.contentfulFooter.contactEmail}</a></p>
                </address>
              </div>
              <div className="subscribe">
                <MailchimpSubscribe content={data.contentfulFooter}/>
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
        )}
      />
    )
  }
}

export default Footer;