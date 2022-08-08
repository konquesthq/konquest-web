import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import "./customers.scss";

const HomeCustomers: React.FC = () => {
  const homeCustomersImage = useStaticQuery(graphql`
    query {
      customerDiscover: file(relativePath: { eq: "updated-home/customers/customer-discover.png" }) {
        childImageSharp {
          fixed(width: 120, height: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      customerIpharm: file(relativePath: { eq: "updated-home/customers/customer-ipharm.jpeg" }) {
        childImageSharp {
          fixed(width: 120, height: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      customerTempting: file(relativePath: { eq: "updated-home/customers/customer-tempting.jpeg" }) {
        childImageSharp {
          fixed(width: 120, height: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <section className="customers">
      <div className="customers-content">
        <div className="customers-cards">
          <div className="customers-image">
            <GatsbyImage alt="Discover International" fixed={homeCustomersImage.customerDiscover.childImageSharp.fixed} />
          </div>
          <div className="customers-image">
            <GatsbyImage alt="I-Pharm" fixed={homeCustomersImage.customerIpharm.childImageSharp.fixed} />
          </div>
          <div className="customers-image">
            <GatsbyImage alt="Tempting Ventures" fixed={homeCustomersImage.customerTempting.childImageSharp.fixed} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCustomers;
