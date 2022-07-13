import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import "./partners.scss";

const HomePartners: React.FC = () => {
  const homePartnersImage = useStaticQuery(graphql`
    query {
      partnerBullhorn: file(relativePath: { eq: "updated-home/partners/partner-bullhorn.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      partnerVincere: file(relativePath: { eq: "updated-home/partners/partner-vincere.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      partnerInTime: file(relativePath: { eq: "updated-home/partners/partner-intime.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      partnerMercury: file(relativePath: { eq: "updated-home/partners/partner-mercury.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section className="partners">
      <div className="partners-content">
        <h3>Connect, Automate...</h3>
        <div className="partners-cards">
          <div className="partners-card">
            <div className="partners-image">
              <GatsbyImage fluid={homePartnersImage.partnerVincere.childImageSharp.fluid} />
            </div>
            <p>Lorem ipsum dolor sit amet, consecte adipiscing elit.</p>
          </div>
          <div className="partners-card">
            <div className="partners-image">
              <GatsbyImage fluid={homePartnersImage.partnerBullhorn.childImageSharp.fluid} />
            </div>
            <p>Lorem ipsum dolor sit amet, consecte adipiscing elit.</p>
          </div>
          <div className="partners-card">
            <div className="partners-image">
              <GatsbyImage fluid={homePartnersImage.partnerInTime.childImageSharp.fluid} />
            </div>
            <p>Lorem ipsum dolor sit amet, consecte adipiscing elit.</p>
          </div>
          <div className="partners-card">
            <div className="partners-image">
              <GatsbyImage fluid={homePartnersImage.partnerMercury.childImageSharp.fluid} />
            </div>
            <p>Lorem ipsum dolor sit amet, consecte adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePartners;
