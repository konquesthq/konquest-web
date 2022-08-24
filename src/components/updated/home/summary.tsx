import { motion } from "framer-motion";
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
        <motion.div
          className="summary-card"
          initial={{ scale: 1.4, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}>
          <div className="summary-image">
            <GatsbyImage
              imgStyle={{ objectFit: `contain` }}
              className="summary-image"
              fluid={homeSummaryImages.illustration.childImageSharp.fluid}
            />
          </div>
          <h5>Handle complex rules and schemes</h5>
          <p>
            Build your commission schemes using our flexible scheme editor, designed specifically for the recruitment
            industry. Individual or team schemes, thresholds, deal-type rules, pay-when-paid and variable rates of pay
            are all seconds away.
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 1.4, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="summary-card">
          <div className="summary-image">
            <GatsbyImage
              imgStyle={{ objectFit: `contain` }}
              fluid={homeSummaryImages.illustrationCrm.childImageSharp.fluid}
            />
          </div>
          <h5>Automate deals, claims and currencies</h5>
          <p>
            Plug your CRM and/or timesheet solution into Konquest and we'll organise everything into commission claims.
            Everything is automated, from splits to currency conversions.
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 1.4, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="summary-card">
          <div className="summary-image">
            <GatsbyImage
              imgStyle={{ objectFit: `contain` }}
              fluid={homeSummaryImages.illustrationClawbacks.childImageSharp.fluid}
            />
          </div>
          <h5>Transparent approvals and clawbacks</h5>
          <p>
            Move your approvals workflow to the cloud, and benefit from a transparent process which reduces error rates
            to almost zero. Keep your consultants in the loop and remove guesswork from their income!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSummary;
