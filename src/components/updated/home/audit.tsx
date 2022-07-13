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
        <div className="audit-image">
          <GatsbyImage fluid={homeAuditImages.illustration.childImageSharp.fluid}  />
        </div>
        <div className="audit-summary">
          <h5>Fully auditable</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla volutpat
            eget. Duis non massa iaculis, euismod nunc quis, egestas metus.
            <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </p>
          <OpenContactButton>Request a Demo</OpenContactButton>
        </div>
      </div>
    </section>
  );
};

export default HomeAudit;
