import React from "react";
import {graphql} from "gatsby";
import * as PropTypes from "prop-types";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ShortResourceItem from "../components/resourceItem";
import RequestDemo from "../components/requestDemo";

import "./resource.scss";

const propTypes = {
  data: PropTypes.object.isRequired,
};

class ResourceItemTemplate extends React.Component {
  render() {
    const resourceItem = this.props.data.item;
    const recent = this.props.data.recent.edges;
    return (
      <Layout className="resource-page">
        <SEO title={resourceItem.title}/>
        <article>
          <header>
            <h1>{resourceItem.title}</h1>
          </header>
          <div className="contents">
            <div
              dangerouslySetInnerHTML={{
                __html: resourceItem.content.childContentfulRichText.html,
              }}
            />
          </div>
        </article>
        <div className="recent-articles">
          <h2>Recent Articles</h2>
          <ul className="resource-items">
            {
              recent
                .map(({node}) => (
                  <li key={node.id}>
                    <ShortResourceItem resourceItem={node}/>
                  </li>
                ))}
            }
          </ul>
        </div>
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
      content {
        childContentfulRichText {
          html
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