import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Logos from "../components/logos";
import RequestDemo from "../components/requestDemo";
import OpenContactButton from '../components/openContactButton';
import {graphql} from "gatsby";

import './pricing.scss';

const PricingPage = ({data}) => (
  <Layout>
    <SEO title="Pricing" keywords={[`konquest`, `commission`, `sales`, `recruitment`, `pricing`]}/>
    <h1>Pricing</h1>
    <div className="pricing-overview">
      <section className="plan-details">
        <h2>Plan Details</h2>
        <p><span className="price">{data.pricing.price}</span>&nbsp;{data.pricing.priceTerm}</p>
        <div className="features">
          <ul>
            {data.pricing.features.map(feature => (
              <li>{feature}</li>
            ))}
          </ul>
          <OpenContactButton>Request a Demo</OpenContactButton>
        </div>
      </section>
      <section className="faqs">
        <h2>FAQs</h2>
        <div className="faq-items">
          <dl>
            {data.faqs.edges.map(({node}) => (
              <React.Fragment>
                <dt>{node.question.question}</dt>
                <dd>{node.answer.answer}</dd>
              </React.Fragment>
            ))}
          </dl>
          {data.pricing.caveat ? (
            <p className="caveat">* The standard one off setup fee includes integration with any of our existing integration partners. Should you use a different system, please reach out to us so we can discuss integration with you on an individual basis. Our policy is to never charge where it is avoidable.</p>
          ) : ''}
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
          {data.quote.quote.quote}
          <cite>{data.quote.citationPerson}, <span className="company">{data.quote.citationCompany}</span></cite>
        </blockquote>
      </section>
    </div>
    <RequestDemo/>
  </Layout>
);

export default PricingPage;

export const pricingQuery = graphql`
  query {
    pricing: contentfulPricing(title: { eq: "Pricing" }) {
      price,
      priceTerm,
      features,
      ctaText,
      caveat {
        caveat
      }
    }
    faqs: allContentfulFaq(sort: { fields: [createdAt], order: [ASC]}) {
      edges {
        node {
          question {
            question
          },
          answer {
            answer
          }
        }
      }
    }
    quote: contentfulQuote(title: { eq: "Quote" }) {
      quote {
        quote
      },
      citationPerson,
      citationCompany
    }
  }
`;