import React from "react";
import Legals from "../components/legals";
import SEO from "../components/seo";
import {graphql} from "gatsby";

const TermsPage = ({data}) => (
  <Legals>
    <SEO title="Terms" />
    <h1>{data.contentfulInfo.title}</h1>
    <div dangerouslySetInnerHTML={{
      __html: data.contentfulInfo.content.childContentfulRichText.html,
    }}>
    </div>
  </Legals>
);

export default TermsPage;

export const termsQuery = graphql`
  {
    contentfulInfo(title: { eq: "Terms & Conditions" }) {
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
