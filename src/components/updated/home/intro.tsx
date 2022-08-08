import { motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import OpenContactButton from "../../openContactButton";
import "./intro.scss";

const HomeIntro: React.FC = () => {
  const homeIntroSectionImage = useStaticQuery(graphql`
    query {
      heroImageDesktop: file(relativePath: { eq: "updated-home/intro/hero-image.png" }) {
        childImageSharp {
          fixed(width: 675, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      heroImageSmallLaptop: file(relativePath: { eq: "updated-home/intro/hero-image.png" }) {
        childImageSharp {
          fixed(width: 570, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <section className="intro">
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="intro-contents">
        <h2>The best way to manage, track and process commission for the recruitment industry</h2>
        <p>
          Konquest is the first and only automation platform built exclusively for recruiters. Say goodbye to
          spreadsheets, and hello to automation and total visibility for consultants.
        </p>
        <OpenContactButton>Request a Demo</OpenContactButton>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1 }}
        viewport={{ once: true }}
        className="img">
        <GatsbyImage
          fixed={[
            homeIntroSectionImage.heroImageDesktop.childImageSharp.fixed,
            {
              ...homeIntroSectionImage.heroImageSmallLaptop.childImageSharp.fixed,
              media: `(max-width: 1366px)`,
            },
          ]}
          fadeIn={false}
        />
      </motion.div>
    </section>
  );
};

export default HomeIntro;
