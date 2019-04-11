import React from "react";
import SEO from "../components/seo";
import Legals from "../components/legals";
import {graphql} from "gatsby";

const PrivacyPage = ({data}) => (
  <Legals>
    <SEO title="Privacy Policy"/>
    <h1>{data.contentfulInfo.title}</h1>
    <div dangerouslySetInnerHTML={{
      __html: data.contentfulInfo.content.childContentfulRichText.html,
    }}>
    </div>
  </Legals>
);

export default PrivacyPage;

export const privacyQuery = graphql`
  {
    contentfulInfo(title: { eq: "Privacy Policy" }) {
      id,
      title,
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
