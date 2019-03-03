import React from "react";
import {Link, graphql} from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RequestDemo from "../components/requestDemo";
import './resources.scss';

const ResourceItem = ({resourceItem}) => (
  <div className="resource-item">
    <div className="image">&nbsp;</div>
    <div className="details">
      <h2>{resourceItem.title}</h2>
      <p>Etiam in faucibus lectus, ut lobortis ex. Pellentese habitant morbi tristique senectus et netus. Prae interdum
        sed sapien consequat tincidunt. </p>
      <Link to={`/resources/${resourceItem.id}`}>Read More</Link>
    </div>
  </div>
);

class ResourceListPage extends React.Component {
  render() {
    const resourceItems = this.props.data.allContentfulResourceItem.edges;
    let extraResourceItems = null;
    if (resourceItems.length > 3) {
      extraResourceItems = (
        <ul>
          {resourceItems
            .slice(3)
            .map(({node}) => (
              <li key={node.id}>
                <ResourceItem resourceItem={node}/>
              </li>
            ))}
        </ul>
      );
    }
    return (
      <Layout className="resources">
        <SEO title="Resources" keywords={[`resources`, `blog`]}/>
        <h1>Resources</h1>
        <div className="contents">
          <div>
            <ul className="recent-resources">
              {resourceItems
                .slice(0, 3)
                .map(({node}) => (
                  <li key={node.id}>
                    <ResourceItem resourceItem={node}/>
                  </li>
                ))}
            </ul>
            {extraResourceItems}
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
          }
        }
      }
    }
  }
`;