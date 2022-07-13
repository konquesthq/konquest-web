import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import "./summary.scss";

const HomeSummary: React.FC = () => {
  const homeSummaryImages = useStaticQuery(graphql`
    query {
      illustration: file(relativePath: { eq: "updated-home/summary/illustration.png" }) {
        childImageSharp {
          fluid(maxHeight: 1080, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      illustrationCrm: file(relativePath: { eq: "updated-home/summary/illustration-crm.png" }) {
        childImageSharp {
          fluid(maxHeight: 1080, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      illustrationClawbacks: file(relativePath: { eq: "updated-home/summary/illustration-clawbacks.png" }) {
        childImageSharp {
          fluid(maxHeight: 1080, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section className="summary">
      <h3>Everything you need to seamlessly handle commission</h3>
      <div className="summary-cards">
        <div className="summary-card">
          <div className="summary-image">
            <GatsbyImage
              imgStyle={{ objectFit: `contain` }}
              className="summary-image"
              fluid={homeSummaryImages.illustration.childImageSharp.fluid}
            />
          </div>
          <h5>Handle complex rules and schemes</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacus nulla. Morbi sed tincidunt eros.
            Donec mi mi, tempus id quam nec, aliquet blandit magna. Proin id purus eget metus tempor te es fermentum ac
            at justo con equit tulbuae recti
          </p>
        </div>
        <div className="summary-card">
          <div className="summary-image">
            <GatsbyImage
              imgStyle={{ objectFit: `contain` }}
              fluid={homeSummaryImages.illustrationCrm.childImageSharp.fluid}
            />
          </div>
          <h5>Automate deals, claims and currencies</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacus nulla. Morbi sed tincidunt eros.
            Donec mi mi, tempus id quam nec, aliquet blandit magna. Proin id purus eget metus tempor te es fermentum ac
            at justo con equit tulbuae recti
          </p>
        </div>
        <div className="summary-card">
          <div className="summary-image">
            <GatsbyImage
              imgStyle={{ objectFit: `contain` }}
              fluid={homeSummaryImages.illustrationClawbacks.childImageSharp.fluid}
            />
          </div>
          <h5>Transparent approvals and clawbacks</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacus nulla. Morbi sed tincidunt eros.
            Donec mi mi, tempus id quam nec, aliquet blandit magna. Proin id purus eget metus tempor te es fermentum ac
            at justo con equit tulbuae recti
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeSummary;
