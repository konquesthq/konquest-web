import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql} from "gatsby";

const ThanksPage = ({data}) => (
  <Layout className="info">
    <div className="contents">
      <SEO title="Thank You"/>
      <h1>{data.contentfulInfo.displayTitle}</h1>
      <div dangerouslySetInnerHTML={{
        __html: data.contentfulInfo.content.childContentfulRichText.html,
      }}>
      </div>
    </div>
  </Layout>
);

export default ThanksPage;

export const thankYouQuery = graphql`
  {
    contentfulInfo(title: { eq: "Thank You" }) {
      id,
      title,
      displayTitle,
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;