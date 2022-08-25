import { graphql } from "gatsby";
import React from "react";
import SEO from "../components/seo";
import Layout from "../components/updated/layout.updated";

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