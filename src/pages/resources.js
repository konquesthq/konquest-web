import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RequestDemo from "../components/requestDemo";
import ShortResourceItem, {ResourceItem} from "../components/resourceItem";
import './resources.scss';

class ResourceListPage extends React.Component {
  render() {
    const resourceItems = this.props.data.allContentfulResourceItem.edges;
    let extraResourceItems = null;
    if (resourceItems.length > 3) {
      extraResourceItems = (
        <React.Fragment>
          {resourceItems
            .slice(3)
            .map(({node}) => (
              <li key={node.id}>
                <ShortResourceItem resourceItem={node}/>
              </li>
            ))}
        </React.Fragment>
      );
    }
    return (
      <Layout className="resources">
        <SEO title="Resources" keywords={[`konquest`, `resources`, `blog`]}/>
        <h1>Resources</h1>
        <div className="contents">
          <div>
            <ul className="resource-items">
              {resourceItems
                .slice(0, 3)
                .map(({node}) => (
                  <li key={node.id}>
                    <ResourceItem resourceItem={node}/>
                  </li>
                ))}
              {extraResourceItems}
            </ul>
          </div>
        </div>
        <RequestDemo/>
      </Layout>
    )
  }
}

export default ResourceListPage

export const resourceQuery = graphql`
  {
    allContentfulResourceItem(sort: { fields: [createdAt], order: [DESC]}) {
      edges {
        node {
          id,
          title,
          description {
            description
          },
          headerImage {
            fluid(maxWidth: 440, maxHeight: 241) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;