import { graphql } from "gatsby";
import Img from 'gatsby-image';
import * as PropTypes from "prop-types";
import React from "react";
import RequestDemo from "../components/requestDemo";
import ShortResourceItem from "../components/resourceItem";
import SEO from "../components/seo";
import Layout from "../components/updated/layout.updated";

import "./resource.scss";

const propTypes = {
  data: PropTypes.object.isRequired,
};

class ResourceItemTemplate extends React.Component {
  render() {
    const resourceItem = this.props.data.item;
    const recent = this.props.data.recent;

    let recentArticles;

    if(recent) {
      recentArticles = (
        <div className="recent-articles">
          <h2>Recent Articles</h2>
          <ul className="resource-items">
            {
              recent.edges
                .map(({node}) => (
                  <li key={node.id}>
                    <ShortResourceItem resourceItem={node}/>
                  </li>
                ))
            }
          </ul>
        </div>
      );
    }

    return (
      <Layout className="resource-page">
        <SEO title={resourceItem.title} keywords={[`konquest`, `resources`, `blog`]}/>
        <article>
          <div className="contents">
            <Img className="img" fluid={resourceItem.headerImage.fluid}/>
            <h1>{resourceItem.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: resourceItem.content.childContentfulRichText.html,
              }}
            />
          </div>
        </article>
        {recentArticles}
        <RequestDemo/>
      </Layout>
    )
  }
}

ResourceItemTemplate.propTypes = propTypes;

export default ResourceItemTemplate;

export const resourceItemQuery = graphql`
  query($id: String!) {
    item: contentfulResourceItem(id: { eq: $id }) {
      title,
      description {
        description
      },
      content {
        childContentfulRichText {
          html
        }
      },
      headerImage {
        fluid(maxWidth: 978) {
          ...GatsbyContentfulFluid
        }
      }
    }
    recent: allContentfulResourceItem(filter: { id: { ne: $id }}, sort: { fields: [createdAt], order: [DESC]}, limit: 3) {
      edges {
        node {
          id,
          title,
          description {
            description
          }
        }
      }
    }
  }
`;