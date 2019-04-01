import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Logos from "../components/logos";
import RequestDemo from "../components/requestDemo";
import OpenContactButton from '../components/openContactButton';

import './pricing.scss';

const PricingPage = () => (
  <Layout>
    <SEO title="Pricing"/>
    <h1>Pricing</h1>
    <div className="pricing-overview">
      <section className="plan-details">
        <h2>Plan Details</h2>
        <p><span className="price">£10</span> user/month</p>
        <div className="features">
          <ul>
            <li>Unlimited schemes: Simple, Team, Override.</li>
            <li>CRM Integration</li>
            <li>Support by Humans</li>
          </ul>
          <OpenContactButton>Request a Demo</OpenContactButton>
        </div>
      </section>
      <section className="faqs">
        <h2>FAQs</h2>
        <div className="faq-items">
          <dl>
            <dt>Do I need to commit to a lengthy contract?</dt>
            <dd>Nope. Konquest is available to all customers on a rolling monthly basis. If you'd prefer to pay for upfront for a longer period in exchange for a discount then we'd be delighted to discuss this with you.
            </dd>
            <dt>Why is there a setup fee?</dt>
            <dd>We'd really rather not charge this, but the reality is that there is a lot of effort required from us to get you setup. This process includes the calibration of all of your commission schemes, as well as your CRM/timesheet integration(s)*
            </dd>
            <dt>My commission scheme is complex, are you sure you can accommodate?</dt>
            <dd>Whilst we can't guarantee we can accommodate every scheme on Earth, we've designed Konquest to be incredibly
              flexible. As a rule, as long as the data needed for any calculation is available, we can help you. So far, we're yet to run into a scenario we can't handle.
            </dd>
            <dt>Can I have a free trial?</dt>
            <dd>Sadly not, we're sorry. The setup process takes too much time for us to do it for free. Your minimum commitment would be our one off setup cost plus the total cost of 1 month's subscription.
            </dd>
          </dl>
          <p className="caveat">* The standard one off setup fee includes integration with any of our existing integration partners. Should you use a different system, please reach out to us so we can discuss integration with you on an individual basis. Our policy is to never charge where it is avoidable.</p>
        </div>
      </section>
    </div>
    <div className="testimonial">
      <section className="current-customers">
        <h2>Current Customers</h2>
        <Logos/>
      </section>
      <section className="quote">
        <blockquote>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla volutpat
          eget. Duis non massa iaculis, euismod nunc quis, egestas metus. Curabitur ac leo a dui vehicula blandit. Donec
          a purus id ex tincidunt pulvinar.
          <cite>Jack Skellington, <span className="company">Halloween Inc</span></cite>
        </blockquote>
      </section>
    </div>
    <RequestDemo/>
  </Layout>
);

export default PricingPage;
