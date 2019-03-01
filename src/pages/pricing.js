import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Logos from "../components/logos";

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
            <li>Feature description</li>
            <li>Feature description</li>
            <li>Feature description</li>
            <li>Feature description</li>
          </ul>
          <button type="button">Btn Text</button>
        </div>
      </section>
      <section className="faqs">
        <h2>FAQs</h2>
        <div className="faq-items">
          <dl>
            <dt>Here is a question about pricing?</dt>
            <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra malesuada odio, eget vulputate
              ipsum blandit eget.
            </dd>
            <dt>Here is a question about another concern on two lines?</dt>
            <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra malesuada odio, eget vulputate
              ipsum blandit eget.
            </dd>
            <dt>And who on earth are you?</dt>
            <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra malesuada odio, eget vulputate
              ipsum blandit eget.
            </dd>
            <dt>Why haven't you bought yet?</dt>
            <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra malesuada odio, eget vulputate
              ipsum blandit eget.
            </dd>
            <dt>Another question?</dt>
            <dd>No more.</dd>
          </dl>
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
    <div className="request-demo">
      <div className="demo-details">
        <p>Ut porttitor massa tellus, sit amet tempor nibh tincidunt eget. Cras volutpat interdum sem vitae vulputate.
          Morbi a dolor ut nisl ullamcorper tempor. Proin est ante, aliquet sed.</p>
        <button type="button">Request Demo</button>
      </div>
    </div>
  </Layout>
);

export default PricingPage;
