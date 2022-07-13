import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import OpenContactButton from "../../openContactButton";
import "./targets.scss";

const HomeTargets: React.FC = () => {
  const homeTargetImages = useStaticQuery(graphql`
    query {
      goalIllustration: file(relativePath: { eq: "updated-home/targets/goal-illustration.png" }) {
        childImageSharp {
          fluid(maxHeight: 1080, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      targetIllustration: file(relativePath: { eq: "updated-home/targets/target-illustration.png" }) {
        childImageSharp {
          fluid(maxHeight: 1080, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section className="targets">
      <div className="targets-content">
        <div className="targets-summary">
          <h5>Put progress and incentivisation front and centre</h5>
          <p>
            Cras leo turpis, convallis ac ligula sed, bibendum tempus mi. Aliquam diam sapien, suscipit eget bibendum
            nec, sodales sit amet tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Nunc a magna quis ex porttitor consectetur. Donec non elementum diam.
          </p>
          <OpenContactButton>Request a Demo</OpenContactButton>
        </div>

        <GatsbyImage
          className="target-image"
          fluid={homeTargetImages.targetIllustration.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
        />
        <GatsbyImage
          className="target-image"
          fluid={homeTargetImages.goalIllustration.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
};

export default HomeTargets;
