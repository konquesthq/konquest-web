import { motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import OpenContactButton from "../../openContactButton";
import "./audit.scss";

const HomeAudit: React.FC = () => {
  const homeAuditImages = useStaticQuery(graphql`
    query {
      illustration: file(relativePath: { eq: "updated-home/audit/illustration-audit.png" }) {
        childImageSharp {
          fluid(maxHeight: 1080, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section className="audit">
      <div className="audit-content">
        <motion.div
          className="audit-image"
          transition={{ delay: 0.3, duration: 1.1 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 1.7 }}
          whileInView={{ opacity: 1, scale: 1 }}>
          <GatsbyImage fluid={homeAuditImages.illustration.childImageSharp.fluid} />
        </motion.div>
        <motion.div
          className="audit-summary"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}>
          <h5>Fully auditable</h5>
          <p>
            Konquest acts as a system of record, retaining the detail of every claim. Review your data on demand:
            <ul>
              <li>Digital audit trails built into every claim, or</li>
              <li>Export a hard copy for your records offline</li>
              <li>
                Work with us to establish exactly what is stored and for how long to ensure full compliance with
                national and international standards
              </li>
            </ul>
          </p>
          <OpenContactButton>Request a Demo</OpenContactButton>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAudit;
