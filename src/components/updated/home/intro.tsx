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

        <div className="intro-contents">
          <h2>The best way to manage, track and process commission for the recruitment industry</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacus nulla. Morbi sed tincidunt eros.
            Donec mi mi, tempus id quam nec, aliquet blandit magna. Proin id purus eget metus tempor fermentum ac at
            justo.
          </p>
          <OpenContactButton>Request a Demo</OpenContactButton>
        </div>
        <GatsbyImage
          className="img"
          fixed={[
            homeIntroSectionImage.heroImageDesktop.childImageSharp.fixed,
            {
              ...homeIntroSectionImage.heroImageSmallLaptop.childImageSharp.fixed,
              media: `(max-width: 1366px)`,
            },
          ]}
          fadeIn={false}
        />
   
    </section>
  );
};

export default HomeIntro;
