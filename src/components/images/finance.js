import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FinanceImage = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "home/finance.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img className="img" fluid={data.image.childImageSharp.fluid} />}
  />
);

export default FinanceImage;